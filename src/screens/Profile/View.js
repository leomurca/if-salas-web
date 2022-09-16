import {
  Avatar,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  Container,
  Button,
} from '@mui/material';
import dayjs from 'dayjs';

import InputMask from '../../components/InputMask';

import { COURSES } from '../../utils/constants';
import { createArrayFrom1ToN } from '../../utils/createArrayFrom1ToN';
import styles from './styles';

function View({ data, onChangeInput, layoutType }) {
  const {
    profileSummaryBox,
    avatar,
    profileSummaryStack,
    formBox,
    formField,
    formStack,
    fullNameTypography,
    button,
  } = styles[layoutType];
  const fullName = `${data.firstName} ${data.lastName}`;
  const currentYear = dayjs().year();

  return (
    <Container disableGutters sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={profileSummaryBox}>
        <Avatar alt={fullName} src={data.avatar} sx={avatar} />
        <Stack sx={profileSummaryStack}>
          <Typography sx={fullNameTypography} variant="h4">
            {fullName}
          </Typography>
          <Typography variant="body2">
            Estudante de {COURSES.filter(c => c.value === data.course)[0].name}
          </Typography>
          <Typography variant="body2">Turma de {data.year}</Typography>
          <Typography variant="body2">
            <strong>RA: </strong> {data.ra}
          </Typography>
        </Stack>
      </Box>

      <Box sx={formBox}>
        <Stack {...formStack} component="form">
          <TextField
            id="firstName"
            name="firstName"
            label="Primeiro nome"
            variant="standard"
            type="text"
            sx={formField}
            value={data.firstName}
            onChange={onChangeInput}
          />

          <TextField
            id="lastName"
            name="lastName"
            label="Sobrenome"
            variant="standard"
            type="text"
            sx={formField}
            value={data.lastName}
            onChange={onChangeInput}
          />

          <TextField
            id="phone"
            name="phone"
            label="Telefone"
            variant="standard"
            type="phone"
            value={data.phone}
            onChange={onChangeInput}
            placeholder="(##) #####-####"
            sx={formField}
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
            sx={formField}
          />

          <TextField
            id="password"
            name="password"
            label="Senha"
            variant="standard"
            type="password"
            value={data.password}
            onChange={onChangeInput}
            sx={formField}
          />

          <FormControl sx={{ ...formField, textAlign: 'start' }} fullWidth>
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
          <FormControl sx={{ ...formField, textAlign: 'start' }} fullWidth>
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
            id="ra"
            name="ra"
            label="RA (Registro Acadêmico)"
            variant="standard"
            type="text"
            value={data.ra}
            placeholder="#######"
            disabled
            sx={{ ...formField, cursor: 'no-drop' }}
            InputProps={{
              inputComponent: InputMask,
            }}
          />

          <Button
            sx={button}
            onClick={() => console.log('clicked')}
            variant="contained"
          >
            Salvar alterações
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default View;
