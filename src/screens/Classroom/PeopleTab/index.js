import { Avatar, Container, Skeleton, Stack, Typography } from '@mui/material';
import { createArrayFrom1ToN } from '../../../utils/createArrayFrom1ToN';

function PeopleTab({ layoutType, peopleTabData }) {
  const layoutResolver = (state, people, layoutType) => {
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
                <Stack
                  flexDirection="row"
                  alignItems="center"
                  sx={{ width: '90%', marginLeft: '20px' }}
                >
                  <Skeleton variant="circular" width={60} height={60} />
                  <Skeleton
                    variant="rectangular"
                    width="70%"
                    height={40}
                    sx={{ marginLeft: '15px' }}
                  />
                </Stack>
              </Stack>

              <Stack alignItems="center">
                <Skeleton
                  variant="rectangular"
                  width="90%"
                  height={70}
                  sx={{ marginBottom: '30px', marginTop: '50px' }}
                />
                {createArrayFrom1ToN(5).map(i => (
                  <Stack
                    key={i}
                    flexDirection="row"
                    alignItems="center"
                    sx={{ width: '90%', marginLeft: '20px', marginTop: '25px' }}
                  >
                    <Skeleton variant="circular" width={60} height={60} />
                    <Skeleton
                      variant="rectangular"
                      width="70%"
                      height={40}
                      sx={{ marginLeft: '15px' }}
                    />
                  </Stack>
                ))}
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
                  Docentes
                </Typography>
                <Stack alignItems="center">
                  {people
                    .filter(p => p.role === 'PROFESSOR')
                    .map(p => (
                      <Container
                        key={p.id}
                        sx={{
                          width: '95%',
                          padding: '20px',
                          borderBottom: '2px solid #BCBCBC',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        disableGutters
                      >
                        <Avatar
                          alt={p.name}
                          src={p.avatar}
                          sx={{
                            width: '60px',
                            height: '60px',
                            marginRight: '15px',
                          }}
                        />
                        <Typography variant="h5">{p.name}</Typography>
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
                  Discentes
                </Typography>
                <Stack alignItems="center">
                  {people
                    .filter(p => p.role === 'STUDENT')
                    .map(p => (
                      <Container
                        key={p.id}
                        sx={{
                          width: '95%',
                          padding: '20px',
                          borderBottom: '2px solid #BCBCBC',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        disableGutters
                      >
                        <Avatar
                          alt={p.name}
                          src={p.avatar}
                          sx={{
                            width: '60px',
                            height: '60px',
                            marginRight: '15px',
                          }}
                        />
                        <Typography variant="h5">{p.name}</Typography>
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
            <Container
              sx={{ marginTop: '50px', height: '100vh' }}
              disableGutters
            >
              <Stack alignItems="center">
                <Skeleton
                  variant="rectangular"
                  width="90%"
                  height={50}
                  sx={{ marginBottom: '30px' }}
                />
                <Stack
                  flexDirection="row"
                  alignItems="center"
                  sx={{ width: '90%', marginLeft: '20px' }}
                >
                  <Skeleton variant="circular" width={40} height={40} />
                  <Skeleton
                    variant="rectangular"
                    width="80%"
                    height={30}
                    sx={{ marginLeft: '15px' }}
                  />
                </Stack>
              </Stack>

              <Stack alignItems="center">
                <Skeleton
                  variant="rectangular"
                  width="90%"
                  height={50}
                  sx={{ marginBottom: '30px', marginTop: '50px' }}
                />
                {createArrayFrom1ToN(5).map(i => (
                  <Stack
                    key={i}
                    flexDirection="row"
                    alignItems="center"
                    sx={{ width: '90%', marginLeft: '20px', marginTop: '25px' }}
                  >
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton
                      variant="rectangular"
                      width="80%"
                      height={30}
                      sx={{ marginLeft: '15px' }}
                    />
                  </Stack>
                ))}
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
                  variant="h5"
                >
                  Docentes
                </Typography>
                <Stack alignItems="center">
                  {people
                    .filter(p => p.role === 'PROFESSOR')
                    .map(p => (
                      <Container
                        key={p.id}
                        sx={{
                          width: '95%',
                          padding: '20px',
                          borderBottom: '2px solid #BCBCBC',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        disableGutters
                      >
                        <Avatar
                          alt={p.name}
                          src={p.avatar}
                          sx={{
                            width: '40px',
                            height: '40px',
                            marginRight: '15px',
                          }}
                        />
                        <Typography
                          sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: 'vertical',
                          }}
                          variant="body1"
                        >
                          {p.name}
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
                  variant="h5"
                >
                  Discentes
                </Typography>
                <Stack alignItems="center">
                  {people
                    .filter(p => p.role === 'STUDENT')
                    .map(p => (
                      <Container
                        key={p.id}
                        sx={{
                          width: '95%',
                          padding: '20px',
                          borderBottom: '2px solid #BCBCBC',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                        disableGutters
                      >
                        <Avatar
                          alt={p.name}
                          src={p.avatar}
                          sx={{
                            width: '40px',
                            height: '40px',
                            marginRight: '15px',
                          }}
                        />
                        <Typography
                          sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 1,
                            WebkitBoxOrient: 'vertical',
                          }}
                          variant="body1"
                        >
                          {p.name}
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
    peopleTabData && peopleTabData.state,
    peopleTabData && peopleTabData.people,
    layoutType
  );
}

export default PeopleTab;
