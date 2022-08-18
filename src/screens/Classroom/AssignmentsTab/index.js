import { Container, Link, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter';

function AssignmentsTab({ assignmentsTabData, layoutType }) {
  console.log(assignmentsTabData);
  const layoutResolver = (state, assignments, layoutType) => {
    if (layoutType === 'desktop') {
      switch (state) {
        case 'loading':
          return <h1>Loading...</h1>;

        case 'idle':
          return (
            <Container sx={{ marginTop: '50px' }} disableGutters>
              <Container sx={{ width: '90%' }} disableGutters>
                <Typography
                  sx={{
                    padding: '10px',
                    borderBottom: '2px solid #00420D',
                    color: '#00420D',
                  }}
                  variant="h4"
                >
                  Provas
                </Typography>
                <Stack alignItems="center">
                  {assignments
                    .filter(a => a.type === 'assessment')
                    .map(a => (
                      <Container
                        key={a.id}
                        sx={{
                          width: '95%',
                          padding: '20px',
                          borderBottom: '2px solid #BCBCBC',
                        }}
                        disableGutters
                      >
                        <Typography variant="h5">
                          <Link
                            sx={{
                              color: 'black',
                              textDecoration: 'underline #000000',
                            }}
                            href={`/assignment/${a.id}`}
                          >
                            {a.title}
                          </Link>
                        </Typography>
                        <Typography
                          sx={{ marginTop: '15px', fontSize: '15px' }}
                          variant="p"
                          component="div"
                        >
                          <strong>Data de entrega: </strong>{' '}
                          {capitalizeFirstLetter(
                            dayjs(a.dueDate).format('dddd, DD/MM | HH:mm[h]')
                          )}
                        </Typography>
                        <Typography
                          sx={{ fontSize: '15px' }}
                          variant="p"
                          component="div"
                        >
                          <strong>Valor: </strong>
                          {a.scores.map(s => s.value).join(', ')} pts
                        </Typography>
                      </Container>
                    ))}
                </Stack>
              </Container>

              <Container
                sx={{ width: '90%', marginTop: '30px' }}
                disableGutters
              >
                <Typography
                  sx={{
                    padding: '10px',
                    borderBottom: '2px solid #00420D',
                    color: '#00420D',
                  }}
                  variant="h4"
                >
                  Trabalhos
                </Typography>
                <Stack alignItems="center">
                  {assignments
                    .filter(a => a.type === 'project')
                    .map(a => (
                      <Container
                        key={a.id}
                        sx={{
                          width: '95%',
                          padding: '20px',
                          borderBottom: '2px solid #BCBCBC',
                        }}
                        disableGutters
                      >
                        <Typography variant="h5">
                          <Link
                            sx={{
                              color: 'black',
                              textDecoration: 'underline #000000',
                            }}
                            href={`/assignment/${a.id}`}
                          >
                            {a.title}
                          </Link>
                        </Typography>
                        <Typography
                          sx={{ marginTop: '15px', fontSize: '15px' }}
                          variant="p"
                          component="div"
                        >
                          <strong>Data de entrega: </strong>{' '}
                          {capitalizeFirstLetter(
                            dayjs(a.dueDate).format('dddd, DD/MM | HH:mm[h]')
                          )}
                        </Typography>
                        <Typography
                          sx={{ fontSize: '15px' }}
                          variant="p"
                          component="div"
                        >
                          <strong>Valor: </strong>
                          {a.scores.map(s => s.value).join(', ')} pts
                        </Typography>
                      </Container>
                    ))}
                </Stack>
              </Container>
            </Container>
          );

        case 'gone':
          return null;

        default:
          return null;
      }
    } else if (layoutType === 'mobile') {
      switch (state) {
        case 'loading':
          return <h1>Loading...</h1>;

        case 'idle':
          return <h1>Assignments Tab</h1>;

        case 'gone':
          return null;

        default:
          return null;
      }
    }
  };

  return layoutResolver(
    assignmentsTabData && assignmentsTabData.state,
    assignmentsTabData && assignmentsTabData.assignments,
    layoutType
  );
}

export default AssignmentsTab;
