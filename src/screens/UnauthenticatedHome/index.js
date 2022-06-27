import { Link } from '@mui/material';
import { Container } from '@mui/system';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

import styles from './styles';

function UnauthenticatedHome() {
  useDocumentTitle('Seja bem-vindo');
  const { container } = styles.desktop;

  return (
    <Container sx={container} maxWidth="false">
      <h1>Seja bem-vindo!</h1>
      <Link href="/login">Ir para login</Link>
    </Container>
  );
}

export default UnauthenticatedHome;
