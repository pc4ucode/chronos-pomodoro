import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Heading attr={123} attr2='String'>
        Olá mundo
      </Heading>
      <h1>Hello World (do app)</h1>
    </>
  );
}
