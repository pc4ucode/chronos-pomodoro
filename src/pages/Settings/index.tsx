import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultButton } from '../../components/DefaultButton';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

export function Setting() {
  return (
    <MainTemplate>
      <Heading>Configurações</Heading>
      <Container>
        <p style={{ textAlign: 'center' }}>
          Modifique as configurações para tempo de foco,p descanso curso e
          descanso longo
        </p>
      </Container>
      <Container>
        <form action='' className='form'>
          <div className='formRow'>
            <DefaultInput id='worktime' labelText='Foco' />
          </div>
          <div className='formRow'>
            <DefaultInput id='shortBreakTime' labelText='Descanso Curto' />
          </div>
          <div className='formRow'>
            <DefaultInput id='longBreakTime' labelText='Descanso Longo' />
          </div>
          <div className='formRow'>
            <DefaultButton
              icon={<SaveIcon />}
              aria-label='Salvar configurações'
              title='Salvar configurações'
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
