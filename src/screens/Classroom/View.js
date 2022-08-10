import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  Container,
  Grid,
  Link,
  Paper,
  Skeleton,
  Stack,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from '@mui/material';
import { TAB_OPTIONS } from './tabOptions';
import styles from './styles';
import AnnouncementCard from '../../components/AnnouncementCard';
import { createArrayFrom1ToN } from '../../utils/createArrayFrom1ToN';
import jitsiLogo from '../../assets/jitsi.svg';

function View({
  layoutType,
  classroom,
  selectedTabOption,
  onSelectTabOption,
  announcementsTabData,
}) {
  const { title, container, paper, tabs, avatar, tooltip } = styles[layoutType];
  if (layoutType === 'desktop') {
    return (
      <Container disableGutters sx={container}>
        {classroom === null ? (
          <Skeleton variant="rectangular" width="100%" height={240} />
        ) : (
          <Container disableGutters>
            <Paper
              sx={paper(classroom.color)}
              elevation={4}
              variant="elevation"
            >
              <h1 style={title}>{classroom.name}</h1>
              <Stack alignItems="center" direction="row" spacing={1}>
                <AvatarGroup total={classroom.teachers.length}>
                  {classroom.teachers.map(t => (
                    <Avatar
                      key={t.name}
                      alt={t.name}
                      src={t.avatar}
                      sx={avatar}
                    />
                  ))}
                </AvatarGroup>
                <Tooltip title={classroom.teachers.map(t => t.name).join(', ')}>
                  <Typography
                    sx={tooltip}
                    variant="body3"
                    color="text.secondary"
                  >
                    {classroom.teachers.map(t => t.name).join(', ')}
                  </Typography>
                </Tooltip>
              </Stack>
              <Tabs
                value={selectedTabOption}
                onChange={onSelectTabOption}
                aria-label="Tabs para informações da disciplina"
                variant="fullWidth"
                sx={tabs}
              >
                {TAB_OPTIONS.map(option => (
                  <Tab key={option.value} label={option.lable} />
                ))}
              </Tabs>
            </Paper>
          </Container>
        )}
        {announcementsTabData === null ? (
          <Grid sx={container} container spacing={2}>
            <Grid sx={{ padding: '0 !important' }} item xs={4}>
              {createArrayFrom1ToN(2).map(i => (
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
        ) : (
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
                      <Link sx={{ fontSize: '15px' }} key={ua.id}>
                        {ua.title}
                      </Link>
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
        )}
      </Container>
    );
  } else if (layoutType === 'mobile') {
    return (
      <Container disableGutters sx={container}>
        {classroom === null ? (
          <Skeleton variant="rectangular" width="100%" height={240} />
        ) : (
          <Container disableGutters>
            <Paper
              sx={paper(classroom.color)}
              elevation={4}
              variant="elevation"
            >
              <h1 style={title}>{classroom.name}</h1>
              <Stack alignItems="center" direction="row" spacing={1}>
                <AvatarGroup total={classroom.teachers.length}>
                  {classroom.teachers.map(t => (
                    <Avatar
                      key={t.name}
                      alt={t.name}
                      src={t.avatar}
                      sx={avatar}
                    />
                  ))}
                </AvatarGroup>
                <Tooltip title={classroom.teachers.map(t => t.name).join(', ')}>
                  <Typography
                    sx={tooltip}
                    variant="body3"
                    color="text.secondary"
                  >
                    {classroom.teachers.map(t => t.name).join(', ')}
                  </Typography>
                </Tooltip>
              </Stack>
              <Tabs
                value={selectedTabOption}
                onChange={onSelectTabOption}
                aria-label="Tabs para informações da disciplina"
                variant="fullWidth"
                sx={tabs}
              >
                {TAB_OPTIONS.map(option => (
                  <Tab key={option.value} label={option.lable} />
                ))}
              </Tabs>
            </Paper>
          </Container>
        )}
        {announcementsTabData === null ? (
          <Stack
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            direction="row"
            gap="30px"
            sx={{ marginTop: '30px' }}
          >
            {createArrayFrom1ToN(2).map(i => (
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
        ) : (
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
                    <Link sx={{ fontSize: '15px' }} key={ua.id}>
                      {ua.title}
                    </Link>
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
        )}
      </Container>
    );
  }
}

export default View;
