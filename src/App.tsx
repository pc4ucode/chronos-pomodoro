import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { Container } from './components/Container';

export function App() {
  return (
    <>
      <Container>
        <Heading>Logo</Heading>
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
