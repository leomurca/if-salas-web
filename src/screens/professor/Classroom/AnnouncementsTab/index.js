import { useState } from 'react';
import {
  Button,
  Card,
  Container,
  Grid,
  Link,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material';
import AnnouncementCard from '../../../../components/AnnouncementCard';

import styles from './styles';
import jitsiLogo from '../../../../assets/jitsi.svg';
import { createArrayFrom1ToN } from '../../../../utils/createArrayFrom1ToN';
import PublishAnnouncementCard from '../../../../components/PublishAnnouncementCard';

function AnnouncementsTab({
  layoutType,
  announcementsTabData,
  classroom,
  user,
}) {
  const [composingTextValue, setComposingTextValue] = useState('');
  const { container, emptyStateContainer } = styles[layoutType];

  const layoutResolver = (state, layoutType) => {
    if (layoutType === 'desktop') {
      switch (state) {
        case 'loading':
          return (
            <Grid sx={container} container spacing={2}>
              <Grid sx={{ padding: '0 !important' }} item xs={4}>
                {createArrayFrom1ToN(3).map(i => (
                  <Skeleton
                    key={i}
                    variant="rectangular"
                    width="100%"
                    height={200}
                    sx={{ marginBottom: '30px' }}
                  />
                ))}
              </Grid>
              <Grid sx={{ paddingTop: '0 !important' }} item xs={8}>
                {createArrayFrom1ToN(4).map(i => (
                  <Skeleton
                    key={i}
                    variant="rectangular"
                    width="100%"
                    height={250}
                    sx={{ marginBottom: '30px' }}
                  />
                ))}
              </Grid>
            </Grid>
          );

        case 'idle':
          return (
            <Grid sx={container} container spacing={2}>
              <Grid sx={{ padding: '0 !important' }} item xs={4}>
                <Stack gap="30px">
                  <Card
                    sx={{ width: '100%', padding: '20px', paddingTop: '10px' }}
                    elevation={4}
                    variant="elevation"
                  >
                    <Stack justifyContent="flex-start" spacing={1}>
                      <Container
                        disableGutters
                        sx={{ display: 'flex', justifyContent: 'row' }}
                      >
                        <img src={jitsiLogo} alt="Jitsi Meet" />
                        <h3 style={{ fontWeight: 500 }}>
                          Sala de aula virtual
                        </h3>
                      </Container>

                      <Button
                        sx={{ marginTop: '15px' }}
                        variant="contained"
                        href={classroom.virtualRoom}
                        target="__blank"
                      >
                        Iniciar aula
                      </Button>
                    </Stack>
                  </Card>
                  <Card
                    sx={{ width: '100%', padding: '20px', paddingTop: '10px' }}
                    elevation={4}
                    variant="elevation"
                  >
                    <Stack justifyContent="flex-start" spacing={1}>
                      <h3 style={{ fontWeight: 500 }}>Próximas Atividades</h3>
                      {announcementsTabData.upcomingAssignments.length !== 0 ? (
                        announcementsTabData.upcomingAssignments.map(ua => (
                          <Link
                            href={`/assignment/${ua.id}`}
                            sx={{ fontSize: '15px' }}
                            key={ua.id}
                          >
                            {ua.title}
                          </Link>
                        ))
                      ) : (
                        <Container disableGutters>
                          <p>Nenhuma atividade encontrada!</p>
                        </Container>
                      )}
                    </Stack>
                  </Card>
                  <Card
                    sx={{ width: '100%', padding: '20px', paddingTop: '10px' }}
                    elevation={4}
                    variant="elevation"
                  >
                    <Stack justifyContent="flex-start" spacing={1}>
                      <h3 style={{ fontWeight: 500 }}>
                        Horários de Atendimento
                      </h3>
                      {classroom.appointmentSlots.map((appts, index) => (
                        <Typography key={index} variant="body1">
                          {appts.weekDay}, {appts.start}h - {appts.end}h
                        </Typography>
                      ))}
                    </Stack>
                  </Card>
                </Stack>
              </Grid>
              <Grid sx={{ paddingTop: '0 !important' }} item xs={8}>
                <Stack
                  sx={{ width: '100%', paddingTop: 0 }}
                  alignItems="center"
                  justifyContent="center"
                  flexWrap="wrap"
                  direction="row"
                  gap="30px"
                >
                  <PublishAnnouncementCard
                    layoutType={layoutType}
                    user={user}
                    value={composingTextValue}
                    onChange={e => setComposingTextValue(e.target.value)}
                  />
                  {announcementsTabData.announcements.length !== 0 ? (
                    announcementsTabData.announcements.map(announcement => (
                      <AnnouncementCard
                        key={announcement.id}
                        announcement={announcement}
                      />
                    ))
                  ) : (
                    <Container sx={emptyStateContainer} disableGutters>
                      <p>Nenhum comunicado encontrado!</p>
                    </Container>
                  )}
                </Stack>
              </Grid>
            </Grid>
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
              justifyContent="center"
              flexWrap="wrap"
              direction="row"
              gap="30px"
              sx={{ marginTop: '30px' }}
            >
              {createArrayFrom1ToN(3).map(i => (
                <Skeleton
                  key={i}
                  variant="rectangular"
                  width="100%"
                  height={200}
                  sx={{ marginBottom: '30px' }}
                />
              ))}
              {createArrayFrom1ToN(4).map(i => (
                <Skeleton
                  key={i}
                  variant="rectangular"
                  width="100%"
                  height={250}
                  sx={{ marginBottom: '30px' }}
                />
              ))}
            </Stack>
          );

        case 'idle':
          return (
            <Stack
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
              direction="row"
              gap="30px"
              sx={{ marginTop: '30px' }}
            >
              <Stack gap="30px" sx={{ width: '100%' }}>
                <Card
                  sx={{ width: '100%', padding: '20px', paddingTop: '10px' }}
                  elevation={4}
                  variant="elevation"
                >
                  <Stack justifyContent="flex-start" spacing={1}>
                    <Container
                      disableGutters
                      sx={{ display: 'flex', justifyContent: 'row' }}
                    >
                      <img src={jitsiLogo} alt="Jitsi Meet" />
                      <h3 style={{ fontWeight: 500 }}>Sala de aula virtual</h3>
                    </Container>
                    <Button
                      variant="contained"
                      href={classroom.virtualRoom}
                      target="__blank"
                    >
                      Iniciar aula
                    </Button>
                  </Stack>
                </Card>
                <Card
                  sx={{ width: '100%', padding: '20px', paddingTop: '10px' }}
                  elevation={4}
                  variant="elevation"
                >
                  <Stack justifyContent="flex-start" spacing={1}>
                    <h3 style={{ fontWeight: 500 }}>Próximas Atividades</h3>

                    {announcementsTabData.upcomingAssignments.length !== 0 ? (
                      announcementsTabData.upcomingAssignments.map(ua => (
                        <Link
                          href={`/assignment/${ua.id}`}
                          sx={{ fontSize: '15px' }}
                          key={ua.id}
                        >
                          {ua.title}
                        </Link>
                      ))
                    ) : (
                      <Container disableGutters>
                        <p>Nenhuma atividade encontrada!</p>
                      </Container>
                    )}
                  </Stack>
                </Card>
                <Card
                  sx={{ width: '100%', padding: '20px', paddingTop: '10px' }}
                  elevation={4}
                  variant="elevation"
                >
                  <Stack justifyContent="flex-start" spacing={1}>
                    <h3 style={{ fontWeight: 500 }}>Horários de Atendimento</h3>
                    {classroom.appointmentSlots.map((appts, index) => (
                      <Typography key={index} variant="body1">
                        {appts.weekDay}, {appts.start}h - {appts.end}h
                      </Typography>
                    ))}
                  </Stack>
                </Card>
              </Stack>
              <Stack
                sx={{ width: '100%' }}
                alignItems="center"
                justifyContent="center"
                flexWrap="wrap"
                direction="row"
                gap="30px"
              >
                <PublishAnnouncementCard
                  layoutType={layoutType}
                  user={user}
                  value={composingTextValue}
                  onChange={e => setComposingTextValue(e.target.value)}
                />
                {announcementsTabData.announcements.length !== 0 ? (
                  announcementsTabData.announcements.map(announcement => (
                    <AnnouncementCard
                      key={announcement.id}
                      announcement={announcement}
                    />
                  ))
                ) : (
                  <Container sx={emptyStateContainer} disableGutters>
                    <p>Nenhum comunicado encontrado!</p>
                  </Container>
                )}
              </Stack>
            </Stack>
          );

        case 'gone':
          return null;

        default:
          return null;
      }
    }
  };

  return layoutResolver(
    announcementsTabData && announcementsTabData.state,
    layoutType
  );
}

export default AnnouncementsTab;
