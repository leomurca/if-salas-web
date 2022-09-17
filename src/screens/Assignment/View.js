import parse from 'html-react-parser';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

function View({ assignment, dropzone, layoutType }) {
  return assignment === null ? (
    <h1>Loading...</h1>
  ) : (
    <Container
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '30px',
      }}
      disableGutters
    >
      <Stack
        sx={{
          width: '70%',
          paddingBottom: '5px',
          borderBottom: '1px solid black',
        }}
      >
        <Typography sx={{ fontWeight: 'bold', padding: '15px 0' }} variant="h4">
          {assignment.title}
        </Typography>
        <Stack flexDirection="row" alignItems="center">
          {assignment.classrooms.map(c => (
            <div
              style={{
                backgroundColor: c.color,
                width: '15px',
                height: '15px',
                marginRight: '5px',
              }}
            ></div>
          ))}
          <Typography variant="body1">
            {assignment.classrooms.map(c => c.name).join(', ')}
          </Typography>
        </Stack>
        <Stack
          sx={{ paddingBottom: '5px', paddingTop: '20px' }}
          flexDirection="row"
          justifyContent="space-between"
        >
          <Typography variant="body1" component="div">
            <strong>Valor: </strong>
            {assignment.scores.map(s => s.value).join(', ')} pts
          </Typography>
          <Typography variant="body1" component="div">
            <strong>Data de entrega: </strong>
            {capitalizeFirstLetter(
              dayjs(assignment.dueDate).format('dddd, DD/MM | HH:mm[h]')
            )}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: '70%',
          paddingTop: '30px',
          paddingBottom: '30px',
          borderBottom: '1px solid black',
        }}
      >
        <div>{parse(assignment.description)}</div>;
      </Stack>
      <Stack
        sx={{
          width: '70%',
          paddingTop: '30px',
          paddingBottom: '30px',
        }}
        flexDirection="column"
        alignItems="flex-end"
      >
        {/* TODO: Create a custom component for dropzone */}
        <Box
          sx={{
            width: '100%',
            height: '150px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px dashed black',
          }}
          {...dropzone.getRootProps({ className: 'dropzone' })}
        >
          <input {...dropzone.getInputProps()} />
          <Typography variant="body1" component="div">
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
          sx={{ width: '30%', marginTop: '20px' }}
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
