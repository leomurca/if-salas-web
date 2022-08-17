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
import AnnouncementCard from '../../../components/AnnouncementCard';
import { createArrayFrom1ToN } from '../../../utils/createArrayFrom1ToN';

import styles from './styles';
import jitsiLogo from '../../../assets/jitsi.svg';

function AnnouncementsTab({ layoutType, announcementsTabData, classroom }) {
  const { container } = styles[layoutType];
  if (layoutType === 'desktop') {
    return announcementsTabData && announcementsTabData.state === 'loading' ? (
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
    ) : announcementsTabData.state === 'gone' ? null : (
      <Grid sx={container} container spacing={2}>
        <Grid sx={{ padding: '0 !important' }} item xs={4}>
          <Stack gap="30px">
            <Card
              sx={{ width: '100%', padding: '20px' }}
              elevation={4}
              variant="elevation"
            >
              <Stack justifyContent="flex-start" spacing={1}>
                <Container
                  disableGutters
                  sx={{ display: 'flex', justifyContent: 'row' }}
                >
                  <img src={jitsiLogo} alt="Jitsi Meet" />
                  <h3 style={{ fontWeight: 500 }}>Jitsi</h3>
                </Container>

                <Button
                  variant="contained"
                  href="https://google.com"
                  target="__blank"
                >
                  Entrar
                </Button>
              </Stack>
            </Card>
            <Card
              sx={{ width: '100%', padding: '20px' }}
              elevation={4}
              variant="elevation"
            >
              <Stack justifyContent="flex-start" spacing={1}>
                <h3 style={{ fontWeight: 500 }}>Próximas Atividades</h3>
                {announcementsTabData.upcomingAssignments.map(ua => (
                  <Link
                    href={`/assignment/${ua.id}`}
                    sx={{ fontSize: '15px' }}
                    key={ua.id}
                  >
                    {ua.title}
                  </Link>
                ))}
              </Stack>
            </Card>
            <Card
              sx={{ width: '100%', padding: '20px' }}
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
            {announcementsTabData.announcements.map(announcement => (
              <AnnouncementCard
                key={announcement.id}
                announcement={announcement}
              />
            ))}
          </Stack>
        </Grid>
      </Grid>
    );
  } else if (layoutType === 'mobile') {
    return announcementsTabData && announcementsTabData.state === 'loading' ? (
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
    ) : announcementsTabData.state === 'gone' ? null : (
      <Stack
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        direction="row"
        gap="30px"
        sx={{ marginTop: '30px' }}
      >
        <Stack gap="30px">
          <Card
            sx={{ width: '100%', padding: '20px' }}
            elevation={4}
            variant="elevation"
          >
            <Stack justifyContent="flex-start" spacing={1}>
              <Container
                disableGutters
                sx={{ display: 'flex', justifyContent: 'row' }}
              >
                <img src={jitsiLogo} alt="Jitsi Meet" />
                <h3 style={{ fontWeight: 500 }}>Jitsi</h3>
              </Container>

              <Button
                variant="contained"
                href="https://google.com"
                target="__blank"
              >
                Entrar
              </Button>
            </Stack>
          </Card>
          <Card
            sx={{ width: '100%', padding: '20px' }}
            elevation={4}
            variant="elevation"
          >
            <Stack justifyContent="flex-start" spacing={1}>
              <h3 style={{ fontWeight: 500 }}>Próximas Atividades</h3>
              {announcementsTabData.upcomingAssignments.map(ua => (
                <Link
                  href={`/assignment/${ua.id}`}
                  sx={{ fontSize: '15px' }}
                  key={ua.id}
                >
                  {ua.title}
                </Link>
              ))}
            </Stack>
          </Card>
          <Card
            sx={{ width: '100%', padding: '20px' }}
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
          {announcementsTabData.announcements.map(announcement => (
            <AnnouncementCard
              key={announcement.id}
              announcement={announcement}
            />
          ))}
        </Stack>
      </Stack>
    );
  }
}

export default AnnouncementsTab;
