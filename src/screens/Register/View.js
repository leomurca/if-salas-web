import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';

import SnackbarIndicator from '../../components/SnackbarIndicator';
import LoadingIndicator from '../../components/LoadingIndicator';

import logoImage from '../../assets/if-salas-logo.svg';

import styles from './styles';

function View({
  isPending,
  isError,
  error,
  layoutType,
  data,
  onChangeInput,
  onChangeCheckbox,
  onTryRegister,
}) {
  const { paper, boxLogo, boxForm, logoContainer } = styles[layoutType];
  const currentYear = dayjs().year();

  return (
    <Container
      sx={{
        height: 'auto',
        margin: '0 auto',
        padding: '100px 0',
      }}
      disableGutters
    >
      <Paper sx={paper} elevation={4} variant="elevation">
        <Box sx={boxForm}>
          <h1>Criar conta</h1>
          <p>Crie sua conta digitando os dados abaixo.</p>
          <Stack spacing={4} component="form">
            <TextField
              id="firstName"
              name="firstName"
              label="Primeiro nome"
              variant="standard"
              type="text"
              value={data.firstName}
              onChange={onChangeInput}
              autoFocus
            />
            <TextField
              id="lastName"
              name="lastName"
              label="Sobrenome"
              variant="standard"
              type="text"
              value={data.lastName}
              onChange={onChangeInput}
            />
            <TextField
              id="ra"
              name="ra"
              label="RA (Registro Acadêmico)"
              variant="standard"
              type="text"
              value={data.ra}
              onChange={onChangeInput}
            />
            <FormControl sx={{ textAlign: 'start' }} fullWidth>
              <InputLabel variant="standard" id="course">
                Curso
              </InputLabel>
              <Select
                variant="standard"
                labelId="course"
                id="course"
                name="course"
                value={data.course}
                label="Curso"
                onChange={onChangeInput}
              >
                <MenuItem value={0}>
                  Bacharelado em Sistemas de Informação
                </MenuItem>
                <MenuItem value={1}>
                  Tecnologia em Processos Gerenciais
                </MenuItem>
                <MenuItem value={2}>Tecnologia em Logística</MenuItem>
                <MenuItem value={3}>
                  Engenharia de Controle e Automação
                </MenuItem>
                <MenuItem value={4}>Bacharelado em Administração</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ textAlign: 'start' }} fullWidth>
              <InputLabel variant="standard" id="course">
                Ano da turma
              </InputLabel>
              <Select
                variant="standard"
                labelId="year"
                id="year"
                name="year"
                value={data.year}
                label="Ano da turma"
                onChange={onChangeInput}
              >
                <MenuItem value={0}>{currentYear}</MenuItem>
                <MenuItem value={1}>{currentYear - 1}</MenuItem>
                <MenuItem value={2}>{currentYear - 2}</MenuItem>
                <MenuItem value={3}>{currentYear - 3}</MenuItem>
                <MenuItem value={4}>{currentYear - 4}</MenuItem>
                <MenuItem value={5}>{currentYear - 5}</MenuItem>
              </Select>
            </FormControl>
            {/* TODO: Add field mask */}
            <TextField
              id="phone"
              name="phone"
              label="Telefone"
              variant="standard"
              type="phone"
              value={data.phone}
              onChange={onChangeInput}
            />
            <TextField
              id="email"
              name="email"
              label="E-mail"
              variant="standard"
              type="email"
              value={data.email}
              onChange={onChangeInput}
            />
            <TextField
              id="password"
              name="password"
              label="Senha"
              variant="standard"
              type="password"
              value={data.password}
              onChange={onChangeInput}
            />
            <Stack flexDirection="row" alignItems="center">
              <Checkbox
                name="termsAgreed"
                value={data.termsAgreed}
                onChange={onChangeCheckbox}
              />
              <Typography sx={{ color: '#595959' }} variant="body1">
                Eu li e aceito os <Link href="#">termos de uso. </Link>
              </Typography>
            </Stack>
            <Button
              onClick={onTryRegister}
              variant="contained"
              disabled={!data.termsAgreed}
            >
              Criar conta
            </Button>

            <Stack alignItems="center">
              <Typography sx={{ color: '#595959' }} variant="body1">
                Já possui uma conta? Então <Link href="login">faça login.</Link>
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box sx={boxLogo}>
          <Container sx={logoContainer}>
            <img
              src={logoImage}
              width={layoutType === 'desktop' ? '130' : '70'}
              alt="Logotipo"
            />
            <p>A plataforma de ensino de código aberto.</p>
          </Container>
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
