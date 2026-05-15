import { useEffect, useReducer } from 'react';
import { TaskContext } from './TaskContent';
import { taskReducer } from './taskReducer';
import { initialTaskState } from './initialTaskState';
import { TimerWorkerManager } from '../../workers/TimerWorkerManager';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  useEffect(() => {
    const worker = TimerWorkerManager.getInstance();

    worker.onmessage(e => {
      const countDownSeconds = e.data;
      console.log(countDownSeconds);

      if (countDownSeconds <= 0) {
        console.log('Worker COMPLETED');
        worker.terminate();
      }
    });

    if (!state.activeTask) {
      console.log('Worker terminado por falta de activeTask');
      worker.terminate();
      return;
    }

    worker.postMessage(state);
  }, [state]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
