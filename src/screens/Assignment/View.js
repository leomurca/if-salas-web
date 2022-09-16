import parse from 'html-react-parser';
import { Button, Container, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

function View({ assignment, layoutType }) {
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
        <Stack
          sx={{ padding: '5px 0' }}
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
        flexDirection="row"
        justifyContent="flex-end"
      >
        <Button
          sx={{ width: '30%' }}
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
