import { Container, Link, Skeleton, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter';
import { createArrayFrom1ToN } from '../../../utils/createArrayFrom1ToN';

function AssignmentsTab({ assignmentsTabData, layoutType }) {
  const layoutResolver = (state, assignments, layoutType) => {
    if (layoutType === 'desktop') {
      switch (state) {
        case 'loading':
          return (
            <Container
              sx={{ marginTop: '50px', height: '100vh' }}
              disableGutters
            >
              <Stack alignItems="center">
                <Skeleton
                  variant="rectangular"
                  width="90%"
                  height={70}
                  sx={{ marginBottom: '30px' }}
                />
                <Stack alignItems="flex-start" sx={{ width: '90%' }}>
                  <Skeleton variant="rectangular" height={50} width="95%" />
                  <Skeleton
                    variant="rectangular"
                    height={20}
                    width={450}
                    sx={{ marginTop: '25px' }}
                  />
                  <Skeleton
                    variant="rectangular"
                    height={20}
                    width={300}
                    sx={{ marginTop: '15px' }}
                  />
                </Stack>
                <Stack
                  alignItems="flex-start"
                  sx={{ width: '90%', marginTop: '30px' }}
                >
                  <Skeleton variant="rectangular" height={50} width="95%" />
                  <Skeleton
                    variant="rectangular"
                    height={20}
                    width={450}
                    sx={{ marginTop: '25px' }}
                  />
                  <Skeleton
                    variant="rectangular"
                    height={20}
                    width={300}
                    sx={{ marginTop: '15px' }}
                  />
                </Stack>
              </Stack>

              <Stack sx={{ marginTop: '50px' }} alignItems="center">
                <Skeleton
                  variant="rectangular"
                  width="90%"
                  height={70}
                  sx={{ marginBottom: '30px' }}
                />
                <Stack alignItems="flex-start" sx={{ width: '90%' }}>
                  <Skeleton variant="rectangular" height={50} width="95%" />
                  <Skeleton
                    variant="rectangular"
                    height={20}
                    width={450}
                    sx={{ marginTop: '25px' }}
                  />
                  <Skeleton
                    variant="rectangular"
                    height={20}
                    width={300}
                    sx={{ marginTop: '15px' }}
                  />
                </Stack>
              </Stack>
            </Container>
          );

        case 'idle':
          return (
            <Container
              sx={{ marginTop: '50px', height: '100vh' }}
              disableGutters
            >
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
          return (
            <Stack
              alignItems="center"
              flexWrap="wrap"
              direction="row"
              sx={{ marginTop: '30px' }}
            >
              <Skeleton
                variant="rectangular"
                width="100%"
                height={70}
                sx={{ marginTop: '30px' }}
              />
              <Skeleton
                variant="rectangular"
                width="100%"
                height={30}
                sx={{ marginTop: '20px' }}
              />
              <Skeleton
                variant="rectangular"
                width="100%"
                height={15}
                sx={{ marginTop: '20px' }}
              />
              <Skeleton
                variant="rectangular"
                width={250}
                height={15}
                sx={{ marginTop: '10px' }}
              />

              <Skeleton
                variant="rectangular"
                width="100%"
                height={70}
                sx={{ marginTop: '50px' }}
              />
              <Skeleton
                variant="rectangular"
                width="100%"
                height={30}
                sx={{ marginTop: '20px' }}
              />
              <Skeleton
                variant="rectangular"
                width="100%"
                height={15}
                sx={{ marginTop: '20px' }}
              />
              <Skeleton
                variant="rectangular"
                width={250}
                height={15}
                sx={{ marginTop: '10px' }}
              />
            </Stack>
          );

        case 'idle':
          return (
            <Container
              sx={{ marginTop: '50px', height: '100vh' }}
              disableGutters
            >
              <Container sx={{ width: '100%' }} disableGutters>
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
                          width: '100%',
                          padding: '20px',
                          borderBottom: '2px solid #BCBCBC',
                        }}
                        disableGutters
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                          }}
                        >
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
                          sx={{ marginTop: '10px', fontSize: '12px' }}
                          variant="p"
                          component="div"
                        >
                          <strong>Data de entrega: </strong>{' '}
                          {capitalizeFirstLetter(
                            dayjs(a.dueDate).format('dddd, DD/MM | HH:mm[h]')
                          )}
                        </Typography>
                        <Typography
                          sx={{ fontSize: '12px' }}
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
                sx={{ width: '100%', marginTop: '30px' }}
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
                        <Typography
                          variant="body1"
                          sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                          }}
                        >
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
                          sx={{ marginTop: '10px', fontSize: '12px' }}
                          variant="p"
                          component="div"
                        >
                          <strong>Data de entrega: </strong>{' '}
                          {capitalizeFirstLetter(
                            dayjs(a.dueDate).format('dddd, DD/MM | HH:mm[h]')
                          )}
                        </Typography>
                        <Typography
                          sx={{ fontSize: '12px' }}
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
    }
  };

  return layoutResolver(
    assignmentsTabData && assignmentsTabData.state,
    assignmentsTabData && assignmentsTabData.assignments,
    layoutType
  );
}

export default AssignmentsTab;
