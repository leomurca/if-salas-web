import {
  Avatar,
  AvatarGroup,
  Container,
  Grid,
  Paper,
  Stack,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from '@mui/material';
import { TAB_OPTIONS } from './tabOptions';
import styles from './styles';
import AnnouncementCard from '../../components/AnnouncementCard';

function View({
  layoutType,
  classroom,
  selectedTabOption,
  onSelectTabOption,
  announcements,
}) {
  const { title, container, paper, tabs, avatar, tooltip } = styles[layoutType];

  if (layoutType === 'desktop') {
    return (
      <Container disableGutters sx={container}>
        {classroom === null ? (
          <h1>Loading...</h1>
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
        {announcements === null ? (
          <h1>Loading...</h1>
        ) : (
          <Grid sx={container} container spacing={2}>
            <Grid item xs={4}>
              <Container
                disableGutters
                sx={{
                  backgroundColor: 'tomato',
                  height: '100vh',
                  textAlign: 'center',
                }}
              >
                Left
              </Container>
            </Grid>
            <Grid item xs={8}>
              <Stack
                sx={{ width: '100%' }}
                alignItems="center"
                justifyContent="center"
                flexWrap="wrap"
                direction="row"
                gap="30px"
              >
                {announcements.data.map(announcement => (
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
          <h1>Loading...</h1>
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
        {announcements === null ? (
          <h1>Loading...</h1>
        ) : (
          <Stack
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            direction="row"
            gap="30px"
            sx={{ marginTop: '30px' }}
          >
            <Container
              disableGutters
              sx={{
                backgroundColor: 'tomato',
                height: '400px',
                textAlign: 'center',
              }}
            >
              Left
            </Container>
            <Stack
              sx={{ width: '100%' }}
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
              direction="row"
              gap="30px"
            >
              {announcements.data.map(announcement => (
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
