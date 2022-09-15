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

function View({ data, onChangeInput }) {
  const fullName = `${data.firstName} ${data.lastName}`;
  const currentYear = dayjs().year();

  return (
    <Container disableGutters sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          // TODO: Check issue with screen heights too small
          height: '400px',
          padding: '30px',
        }}
      >
        <Avatar
          alt={fullName}
          src={data.avatar}
          sx={{ width: 250, height: 250 }}
        />
        <Stack sx={{ marginLeft: '30px' }}>
          <Typography sx={{ fontWeight: 'bold' }} variant="h3">
            {fullName}
          </Typography>
          <Typography sx={{ fontSize: '20px' }} variant="body1">
            Estudante de {COURSES.filter(c => c.value === data.course)[0].name}
          </Typography>
          <Typography sx={{ fontSize: '20px' }} variant="body1">
            Turma de {data.year}
          </Typography>
          <Typography sx={{ fontSize: '20px' }} variant="body1">
            <strong>RA: </strong> {data.ra}
          </Typography>
        </Stack>
      </Box>

      <Box sx={{ width: '100%', height: '800px' }}>
        <Stack
          gap={10}
          paddingTop="30px"
          flexWrap="wrap"
          flexDirection="row"
          justifyContent="space-around"
          component="form"
        >
          <TextField
            id="firstName"
            name="firstName"
            label="Primeiro nome"
            variant="standard"
            type="text"
            sx={{ width: '45%' }}
            value={data.firstName}
            onChange={onChangeInput}
          />

          <TextField
            id="lastName"
            name="lastName"
            label="Sobrenome"
            variant="standard"
            type="text"
            sx={{ width: '45%' }}
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
            sx={{ width: '45%' }}
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
            sx={{ width: '45%' }}
          />

          <TextField
            id="password"
            name="password"
            label="Senha"
            variant="standard"
            type="password"
            value={data.password}
            onChange={onChangeInput}
            sx={{ width: '45%' }}
          />

          <FormControl sx={{ textAlign: 'start', width: '45%' }} fullWidth>
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
          <FormControl sx={{ textAlign: 'start', width: '45%' }} fullWidth>
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
            placeholder="00#####"
            disabled
            sx={{ width: '45%', cursor: 'no-drop' }}
            InputProps={{
              inputComponent: InputMask,
            }}
          />

          <Button
            sx={{ width: '30%' }}
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
