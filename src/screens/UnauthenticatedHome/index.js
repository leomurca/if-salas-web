import { Link } from '@mui/material';
import { Container } from '@mui/system';

import styles from './styles';

function UnauthenticatedHome() {
  const { container } = styles.desktop;

  return (
    <Container sx={container} maxWidth="false">
      <h1>Seja bem-vindo!</h1>
      <Link href="/login">Ir para login</Link>
    </Container>
  );
}

export default UnauthenticatedHome;
