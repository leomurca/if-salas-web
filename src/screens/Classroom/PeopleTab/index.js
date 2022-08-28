import { Avatar, Container, Skeleton, Stack, Typography } from '@mui/material';
import { createArrayFrom1ToN } from '../../../utils/createArrayFrom1ToN';
import styles from './styles';

function PeopleTab({ layoutType, peopleTabData }) {
  const layoutResolver = (state, people, layoutType) => {
    const {
      externalContainer,
      sectionContainer,
      sectionTitle,
      personContainer,
      personAvatar,
      personName,
    } = styles[layoutType];
    if (layoutType === 'desktop') {
      switch (state) {
        case 'loading':
          return (
            <Container sx={externalContainer} disableGutters>
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
            <Container sx={externalContainer} disableGutters>
              <Container sx={sectionContainer} disableGutters>
                <Typography sx={sectionTitle} variant="h4">
                  Docentes
                </Typography>
                <Stack alignItems="center">
                  {people
                    .filter(p => p.role === 'PROFESSOR')
                    .map(p => (
                      <Container key={p.id} sx={personContainer} disableGutters>
                        <Avatar alt={p.name} src={p.avatar} sx={personAvatar} />
                        <Typography sx={personName} variant="h5">
                          {p.name}
                        </Typography>
                      </Container>
                    ))}
                </Stack>
              </Container>

              <Container sx={sectionContainer} disableGutters>
                <Typography sx={sectionTitle} variant="h4">
                  Discentes
                </Typography>
                <Stack alignItems="center">
                  {people
                    .filter(p => p.role === 'STUDENT')
                    .map(p => (
                      <Container key={p.id} sx={personContainer} disableGutters>
                        <Avatar alt={p.name} src={p.avatar} sx={personAvatar} />
                        <Typography sx={personName} variant="h5">
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
    } else if (layoutType === 'mobile') {
      switch (state) {
        case 'loading':
          return (
            <Container sx={externalContainer} disableGutters>
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
            <Container sx={externalContainer} disableGutters>
              <Container sx={sectionContainer} disableGutters>
                <Typography sx={sectionTitle} variant="h5">
                  Docentes
                </Typography>
                <Stack alignItems="center">
                  {people
                    .filter(p => p.role === 'PROFESSOR')
                    .map(p => (
                      <Container key={p.id} sx={personContainer} disableGutters>
                        <Avatar alt={p.name} src={p.avatar} sx={personAvatar} />
                        <Typography sx={personName} variant="body1">
                          {p.name}
                        </Typography>
                      </Container>
                    ))}
                </Stack>
              </Container>

              <Container sx={sectionContainer} disableGutters>
                <Typography sx={sectionTitle} variant="h5">
                  Discentes
                </Typography>
                <Stack alignItems="center">
                  {people
                    .filter(p => p.role === 'STUDENT')
                    .map(p => (
                      <Container key={p.id} sx={personContainer} disableGutters>
                        <Avatar alt={p.name} src={p.avatar} sx={personAvatar} />
                        <Typography sx={personName} variant="body1">
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
