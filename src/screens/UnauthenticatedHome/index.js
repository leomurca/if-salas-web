import { Button, Link } from '@mui/material';
import { Container } from '@mui/system';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import screenshot from '../../assets/screenshot.png';

import styles from './styles';
import useLayoutType from '../../hooks/useLayoutType';

function UnauthenticatedHome() {
  useDocumentTitle('IF Salas');
  const layoutType = useLayoutType();
  const {
    container,
    containerLeft,
    containerRight,
    containerLeftH1,
    containerLeftP,
    buttonsContainer,
    button,
    img,
  } = styles[layoutType];

  return (
    <Container sx={container} maxWidth="false">
      <Container sx={containerLeft}>
        <h1 style={containerLeftH1}>A plataforma de ensino de código aberto</h1>
        <p style={containerLeftP}>
          Descubra o IF Salas, a plataforma de ensino inovadora do Instituto
          Federal de Minas Gerais (IFMG). Com o IF Salas, alunos e professores
          têm acesso a um ambiente virtual de aprendizado dinâmico e interativo,
          onde é possível participar de aulas ao vivo, acessar materiais
          didáticos, realizar atividades e avaliações, e colaborar em projetos
          de forma simples e eficiente.
        </p>

        <Container style={buttonsContainer}>
          <Button style={button} variant="contained" href="login">
            Fazer login no IF Salas
          </Button>

          <Button style={button} variant="outlined" href="register">
            Registrar-se no IF Salas
          </Button>
        </Container>
      </Container>

      <Container sx={containerRight}>
        <img
          style={img}
          src={screenshot}
          alt="Print da plartaforma"
          width="650"
          height="550"
        />
      </Container>
    </Container>
  );
}

export default UnauthenticatedHome;
