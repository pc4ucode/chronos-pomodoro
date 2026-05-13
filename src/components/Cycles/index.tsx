import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css';

export function Cycles() {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle });
  console.log(cycleStep);

  const cycleDescriptionsMap = {
    workTime: 'foco',
    shortBreakTime: 'descanso curta',
    longBreakTime: 'descanso longa',
  };

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      <div className={styles.cycleDots}>
        {/* <span className={`${styles.cycleDot} ${styles.workTime}`}></span> */}
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={nextCycle}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${cycleDescriptionsMap[nextCycleType]}`}
              title={`Indicador de ciclo de ${cycleDescriptionsMap[nextCycleType]}`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
