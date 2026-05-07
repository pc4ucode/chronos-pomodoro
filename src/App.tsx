import { Heading } from './components/Heading';
import { Container } from './components/Container';
import { Logo } from './components/Logo';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Heading>Menu</Heading>
      </Container>
      <Container>
        <Heading>Formulario</Heading>
      </Container>
      <Container>
        <Heading>Footer</Heading>
      </Container>
    </>
  );
}
