import {
  Avatar,
  AvatarGroup,
  Container,
  Paper,
  Stack,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from '@mui/material';
import { TAB_OPTIONS } from './tabOptions';
import styles from './styles';

function View({
  layoutType,
  classroom,
  selectedTabOption,
  onSelectTabOption,
  announcements,
}) {
  const { title, container, paper, tabs, avatar, tooltip } = styles[layoutType];
  return (
    <Container disableGutters sx={container}>
      {classroom === null ? (
        <h1>Loading...</h1>
      ) : (
        <Container disableGutters>
          <Paper sx={paper(classroom.color)} elevation={4} variant="elevation">
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
                <Typography sx={tooltip} variant="body3" color="text.secondary">
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
        announcements.data.map(announcement => (
          <Paper
            sx={{ marginTop: '30px' }}
            key={announcement.id}
            elevation={4}
            variant="elevation"
          >
            <Stack alignItems="center" direction="row" spacing={1}>
              <Avatar
                key={announcement.user.id}
                alt={announcement.user.name}
                src={announcement.user.avatar}
              />
              <Typography variant="body1">{announcement.user.name}</Typography>
            </Stack>
            {announcement.text}
          </Paper>
        ))
      )}
    </Container>
  );
}

export default View;
