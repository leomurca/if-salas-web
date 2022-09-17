import parse from 'html-react-parser';
import {
  Box,
  Button,
  Container,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

import styles from './styles';
import { createArrayFrom1ToN } from '../../utils/createArrayFrom1ToN';

function View({ assignment, dropzone, layoutType }) {
  const {
    container,
    loadingContainer,
    headerStack,
    title,
    classroomColorStack,
    classroomColor,
    subHeaderStack,
    subHeaderTypography,
    descriptionStack,
    dropzoneStack,
    dropzoneBox,
    button,
  } = styles[layoutType];

  return assignment === null ? (
    <Container sx={loadingContainer} disableGutters>
      <Stack sx={headerStack}>
        <Skeleton variant="rectangular" width="100%" height={60} />
        <Skeleton
          sx={{ marginTop: '20px' }}
          variant="rectangular"
          width="30%"
          height={20}
        />
        <Stack sx={subHeaderStack}>
          <Skeleton variant="rectangular" width="20%" height={20} />
          <Skeleton variant="rectangular" width="50%" height={20} />
        </Stack>
      </Stack>
      <Stack sx={descriptionStack}>
        {createArrayFrom1ToN(12).map(i => (
          <Skeleton
            key={i}
            variant="text"
            sx={{ marginTop: i % 4 === 1 && '20px', fontSize: '1rem' }}
          />
        ))}
      </Stack>

      <Stack sx={dropzoneStack} flexDirection="column" alignItems="flex-end">
        <Skeleton variant="rectangular" width="100%" height={150} />
        <Skeleton
          sx={{ marginTop: '30px' }}
          variant="rectangular"
          width="30%"
          height={40}
        />
      </Stack>
    </Container>
  ) : (
    <Container sx={container} disableGutters>
      <Stack sx={headerStack}>
        <Typography sx={title} variant="h4">
          {assignment.title}
        </Typography>
        <Stack sx={classroomColorStack}>
          {assignment.classrooms.map(c => (
            <div key={c.id} style={classroomColor(c.color)}></div>
          ))}
          <Typography variant="body1">
            {assignment.classrooms.map(c => c.name).join(', ')}
          </Typography>
        </Stack>
        <Stack sx={subHeaderStack}>
          <Typography sx={subHeaderTypography} variant="body1" component="div">
            <strong>Valor: </strong>
            {assignment.scores.map(s => s.value).join(', ')} pts
          </Typography>
          <Typography sx={subHeaderTypography} variant="body1" component="div">
            <strong>Data de entrega: </strong>
            {capitalizeFirstLetter(
              dayjs(assignment.dueDate).format('dddd, DD/MM | HH:mm[h]')
            )}
          </Typography>
        </Stack>
      </Stack>
      <Stack sx={descriptionStack}>
        <div>{parse(assignment.description)}</div>;
      </Stack>
      <Stack sx={dropzoneStack} flexDirection="column" alignItems="flex-end">
        {/* TODO: Create a custom component for dropzone */}
        <Box
          sx={dropzoneBox}
          {...dropzone.getRootProps({ className: 'dropzone' })}
        >
          <input {...dropzone.getInputProps()} />
          <Typography sx={{ padding: '15px' }} variant="body1" component="div">
            Clique ou arraste um arquivo até aqui
          </Typography>
        </Box>
        <ul>
          {dropzone.acceptedFiles.map(file => (
            <li key={file.path}>
              {file.path} - {file.size} bytes
            </li>
          ))}
        </ul>
        <Button
          sx={button}
          onClick={() => console.log('clicked')}
          variant="contained"
        >
          Entregar
        </Button>
      </Stack>
    </Container>
  );
}

export default View;
