import { useState } from 'react';
import {
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Skeleton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AnnouncementCard from '../../../../components/AnnouncementCard';
import PublishAnnouncementCard from '../../../../components/PublishAnnouncementCard';
import FormDialog from '../../../../components/FormDialog';

import styles from './styles';
import jitsiLogo from '../../../../assets/jitsi.svg';
import { createArrayFrom1ToN } from '../../../../utils/createArrayFrom1ToN';

function AnnouncementsTab({
  layoutType,
  announcementsTabData,
  classroom,
  onChangeEditInput,
  onSaveEditChanges,
  user,
}) {
  const [anchorEl, setAnchorEl] = useState({
    virtualRoom: null,
    appointmentSlots: null,
  });
  const [dialogOpened, setDialogOpened] = useState(null);
  const [composingTextValue, setComposingTextValue] = useState('');
  const { container, emptyStateContainer } = styles[layoutType];

  const onSaveEdit = anchorName => {
    onSaveEditChanges();
    setDialogOpened(null);
    setAnchorEl({ ...anchorEl, [anchorName]: null });
  };

  const onDismissEdit = anchorName => {
    setDialogOpened(null);
    setAnchorEl({ ...anchorEl, [anchorName]: null });
  };

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
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Stack direction="row">
                          <img src={jitsiLogo} alt="Jitsi Meet" />
                          <h3 style={{ fontWeight: 500 }}>
                            Sala de aula virtual
                          </h3>
                        </Stack>

                        <Tooltip title="Opcoes">
                          <IconButton
                            onClick={e =>
                              setAnchorEl({
                                ...anchorEl,
                                virtualRoom: e.currentTarget,
                              })
                            }
                            aria-label="edit"
                            size="medium"
                          >
                            <MoreVertIcon fontSize="inherit" />
                          </IconButton>
                        </Tooltip>
                        <Menu
                          id="menu-appbar-virtual-room"
                          anchorEl={anchorEl.virtualRoom}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={Boolean(anchorEl.virtualRoom)}
                          onClose={() =>
                            setAnchorEl({ ...anchorEl, virtualRoom: null })
                          }
                        >
                          <MenuItem
                            onClick={() => setDialogOpened('virtualRoom')}
                          >
                            <Typography textAlign="center">Editar</Typography>
                          </MenuItem>
                        </Menu>
                        <FormDialog
                          isOpened={dialogOpened === 'virtualRoom'}
                          title="Alterar url da sala de aula virtual"
                          contentText="Edite o campo abaixo para alterar a url da sua sala de aula virtual."
                          inputs={[
                            <TextField
                              autoFocus
                              margin="dense"
                              name="virtualRoom"
                              type="text"
                              value={classroom.virtualRoom}
                              onChange={onChangeEditInput}
                              fullWidth
                              variant="standard"
                            />,
                          ]}
                          onDismiss={() => onDismissEdit('virtualRoom')}
                          onSave={() => onSaveEdit('virtualRoom')}
                        />
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
                      <Container
                        disableGutters
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <h3 style={{ fontWeight: 500 }}>
                          Horários de Atendimento
                        </h3>
                        <Tooltip title="Opcoes">
                          <IconButton
                            onClick={e =>
                              setAnchorEl({
                                ...anchorEl,
                                appointmentSlots: e.currentTarget,
                              })
                            }
                            aria-label="edit"
                            size="medium"
                          >
                            <MoreVertIcon fontSize="inherit" />
                          </IconButton>
                        </Tooltip>
                        <Menu
                          id="menu-appbar-appointment-slots"
                          anchorEl={anchorEl.appointmentSlots}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={Boolean(anchorEl.appointmentSlots)}
                          onClose={() =>
                            setAnchorEl({ ...anchorEl, appointmentSlots: null })
                          }
                        >
                          <MenuItem
                            onClick={() => setDialogOpened('appointmentSlots')}
                          >
                            <Typography textAlign="center">Editar</Typography>
                          </MenuItem>
                        </Menu>
                        <FormDialog
                          isOpened={dialogOpened === 'appointmentSlots'}
                          title="Alterar horarios de atendimento"
                          contentText="Edite os campos abaixo para alterar os horarios de atendimento da disciplina."
                          inputs={[
                            classroom.appointmentSlots.map((appts, index) => (
                              <TextField
                                key={index}
                                autoFocus
                                margin="dense"
                                name={index}
                                type="text"
                                value={`${appts.weekDay}, ${appts.start}h - ${appts.end}h`}
                                onChange={onChangeEditInput}
                                fullWidth
                                variant="standard"
                              />
                            )),
                          ]}
                          onDismiss={() => onDismissEdit('appointmentSlots')}
                          onSave={() => onSaveEdit('appointmentSlots')}
                        />
                      </Container>
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
                      sx={{ display: 'flex', justifyContent: 'space-between' }}
                    >
                      <Stack direction="row">
                        <img src={jitsiLogo} alt="Jitsi Meet" />
                        <h3 style={{ fontWeight: 500 }}>
                          Sala de aula virtual
                        </h3>
                      </Stack>
                      <Tooltip title="Opcoes">
                        <IconButton
                          onClick={e => setAnchorEl(e.currentTarget)}
                          aria-label="edit"
                          size="medium"
                        >
                          <MoreVertIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={() => setAnchorEl(null)}
                      >
                        <MenuItem
                          onClick={() => setDialogOpened('virtualRoom')}
                        >
                          <Typography textAlign="center">Editar</Typography>
                        </MenuItem>
                      </Menu>
                      <FormDialog
                        isOpened={dialogOpened === 'virtualRoom'}
                        title="Alterar url da sala de aula virtual"
                        contentText="Edite o campo abaixo para alterar a url da sua sala de aula virtual."
                        inputs={[
                          <TextField
                            autoFocus
                            margin="dense"
                            name="virtualRoom"
                            type="text"
                            value={classroom.virtualRoom}
                            onChange={onChangeEditInput}
                            fullWidth
                            variant="standard"
                          />,
                        ]}
                        onDismiss={() => onDismissEdit('virtualRoom')}
                        onSave={() => onSaveEdit('virtualRoom')}
                      />
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
