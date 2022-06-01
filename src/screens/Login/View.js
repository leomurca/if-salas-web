import { Fragment } from 'react';
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
  const { paper, boxLogo, boxForm } = styles[layoutType];

  return (
    <Fragment>
      <Paper sx={paper} elevation={4} variant="elevation">
        <Box sx={boxLogo}>
          <Container>
            <img
              src={logoImage}
              width={layoutType === 'desktop' ? '100' : '70'}
              alt="Logotipo"
            />
            <p>A plataforma de ensino de código aberto.</p>
          </Container>
        </Box>
        <Box sx={boxForm}>
          <h1>Login</h1>
          <p>Bem-vindo de volta. Faça o login digitando os dados abaixo.</p>
          <Stack spacing={4} component="form">
            <TextField
              id="email"
              label="E-mail"
              variant="standard"
              type="email"
              value={email}
              onChange={e => onChangeEmail(e.target.value)}
            />
            <TextField
              id="password"
              label="Senha"
              variant="standard"
              type="password"
              value={password}
              onChange={e => onChangePassword(e.target.value)}
            />
            <Button
              disabled={!isSubmitable}
              onClick={onTryLogin}
              variant="contained"
            >
              Entrar
            </Button>
            <Link href="#">Esqueci minha senha</Link>
            <Link href="#">Cadastre-se</Link>
          </Stack>
        </Box>
      </Paper>
      <LoadingIndicator isLoading={isPending} />
      <SnackbarIndicator
        isOpen={isError}
        severity="error"
        message={error && error.message}
      />
    </Fragment>
  );
}

export default View;
