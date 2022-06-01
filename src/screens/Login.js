import { Fragment, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Link,
  Paper,
  Stack,
  TextField,
} from '@mui/material';
import { useAuthState } from '../context/auth';

import LoadingIndicator from '../components/LoadingIndicator';
import SnackbarIndicator from '../components/SnackbarIndicator';

import logoImage from '../assets/if-salas-logo.svg';

function Login() {
  const { login, isPending, isError, error } = useAuthState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isSubmitable = email.length !== 0 && password.length !== 0;

  const onTryLogin = () => {
    isSubmitable && login(email, password);
  };

  return (
    <Fragment>
      <Paper sx={paper} elevation={4} variant="elevation">
        <Box sx={boxLogo}>
          <Container>
            <img src={logoImage} width="100" alt="Logotipo" />
            <p>A plataforma de ensino de código aberto.</p>
          </Container>
        </Box>
        <Box sx={boxForm}>
          <h1>Login</h1>
          <p>Bem-vindo de volta. Faça o login digitando os dados abaixo.</p>
          <Stack spacing={4} sx={stack} component="form">
            <TextField
              id="email"
              label="E-mail"
              variant="standard"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              id="password"
              label="Senha"
              variant="standard"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
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

const paper = {
  width: '950px',
  height: '500px',
  display: 'flex',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
};

const baseBox = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
};

const boxLogo = {
  ...baseBox,
  backgroundColor: 'secondary.main',
};

const boxForm = {
  ...baseBox,
  '> h1, p ': {
    paddingLeft: '70px',
    paddingRight: '70px',
    textAlign: 'initial',
  },
  '> h1': {
    color: 'primary.black',
    margin: 0,
  },
  '> p': {
    color: 'primary.lightGray',
  },
};

const stack = {
  padding: '0 70px',
};

export default Login;
