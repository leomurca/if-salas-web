import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  InputLabel,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';

import SnackbarIndicator from '../../components/SnackbarIndicator';
import LoadingIndicator from '../../components/LoadingIndicator';
import InputMask from '../../components/InputMask';

import logoImage from '../../assets/if-salas-logo.svg';

import styles from './styles';
import { createArrayFrom1ToN } from '../../utils/createArrayFrom1ToN';
import { COURSES } from '../../utils/constants';
import { Done } from '@mui/icons-material';

function View({
  isPending,
  isError,
  error,
  layoutType,
  isPasswordFocusedForTheFirstTime,
  data,
  onChangeInput,
  onChangePasswordInput,
  onChangeCheckbox,
  onFocusInput,
  onTryRegister,
  currentYear,
}) {
  const {
    container,
    paper,
    boxLogo,
    boxForm,
    logoContainer,
    passwordRulesBox,
    passwordRulesStrength,
  } = styles[layoutType];

  return (
    <Container sx={container} disableGutters>
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
              placeholder="#######"
              InputProps={{
                inputComponent: InputMask,
              }}
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
                {COURSES.map(course => (
                  <MenuItem key={course.value} value={course.value}>
                    {course.name}
                  </MenuItem>
                ))}
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
                {createArrayFrom1ToN(8).map(i => (
                  <MenuItem key={i - 1} value={currentYear - (i - 1)}>
                    {currentYear - (i - 1)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              id="phone"
              name="phone"
              label="Telefone"
              variant="standard"
              type="phone"
              value={data.phone}
              onChange={onChangeInput}
              placeholder="(##) #####-####"
              InputProps={{
                inputComponent: InputMask,
              }}
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
              value={data.password.value}
              onChange={onChangePasswordInput}
              onFocus={onFocusInput}
            />
            {isPasswordFocusedForTheFirstTime && (
              <Box sx={passwordRulesBox}>
                <p style={passwordRulesStrength}>
                  Força da senha: {data.password.strength}%
                </p>
                <LinearProgress
                  color={data.password.strength === 100 ? 'success' : 'error'}
                  variant="determinate"
                  value={data.password.strength}
                />

                <List dense>
                  {data.password.rules.map(rule => (
                    <ListItem
                      key={rule.label}
                      style={{
                        padding: '0',
                        color: rule.applied ? 'green' : 'black',
                      }}
                    >
                      <ListItemIcon
                        style={{
                          minWidth: '40px',
                          color: rule.applied ? 'green' : 'black',
                        }}
                      >
                        <Done />
                      </ListItemIcon>
                      <ListItemText
                        primaryTypographyProps={{
                          fontWeight: rule.applied ? 'bolder' : 'inherit',
                        }}
                        primary={rule.label}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}

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
