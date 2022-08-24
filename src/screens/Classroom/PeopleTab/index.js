import { Container, Skeleton, Stack } from '@mui/material';
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
          return people.map(p => <p key={p.id}>{p.name}</p>);
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
          return <h1>People Tab</h1>;
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
