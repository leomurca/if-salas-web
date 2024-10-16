import {
  Box,
  Button,
  Container,
  Link,
  Paper,
  Stack,
  TextField,
} from '@mui/material';

import SnackbarIndicator from '../../components/SnackbarIndicator';
import LoadingIndicator from '../../components/LoadingIndicator';

import logoImage from '../../assets/if-salas-logo.svg';

import styles from './styles';

function View({
  email,
  password,
  onChangeEmail,
  onChangePassword,
  isSubmitable,
  onTryLogin,
  isPending,
  isError,
  error,
  layoutType,
}) {
  const { container, paper, boxLogo, boxForm, logoContainer } =
    styles[layoutType];

  return (
    <Container disableGutters sx={container}>
      <Paper sx={paper} elevation={4} variant="elevation">
        <Box sx={boxLogo}>
          <Container sx={logoContainer}>
            <img
              src={logoImage}
              width={layoutType === 'desktop' ? '100' : '70'}
              alt="Logotipo"
            />
            <p>A plataforma de ensino de código aberto.</p>
          </Container>
        </Box>
        <Box sx={boxForm}>
          <h1>Entrar</h1>
          <p>Bem-vindo de volta. Faça o login digitando os dados abaixo.</p>
          <Stack spacing={4} component="form">
            <TextField
              id="email"
              label="E-mail"
              variant="standard"
              type="email"
              value={email}
              onChange={e => onChangeEmail(e.target.value)}
              autoFocus
            />
            <TextField
              id="password"
              label="Senha"
              variant="standard"
              type="password"
              value={password}
              onChange={e => onChangePassword(e.target.value)}
              onKeyDown={e => (e.key === 'Enter' ? onTryLogin() : null)}
            />
            <Button
              disabled={!isSubmitable}
              onClick={onTryLogin}
              variant="contained"
            >
              Entrar
            </Button>
            <Link href="#">Esqueci minha senha</Link>
            <Link href="register">Cadastre-se</Link>
          </Stack>
        </Box>
      </Paper>
      <LoadingIndicator isLoading={isPending} />
      <SnackbarIndicator
        isOpen={isError}
        severity="error"
        message={error && error.message}
      />
    </Container>
  );
}

export default View;
