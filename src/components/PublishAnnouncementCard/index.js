import {
  Avatar,
  Button,
  Card,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import styles from './styles';

function PublishAnnouncementCard({ layoutType, user, value, onChange }) {
  const [isComposing, setIsComposing] = useState(false);
  const { card, publishAnnouncement } = styles[layoutType];

  return (
    <Card sx={card} elevation={4} variant="elevation">
      {isComposing ? (
        <Stack
          sx={publishAnnouncement}
          alignItems="end"
          direction="column"
          spacing={2}
        >
          <TextField
            value={value}
            onChange={onChange}
            sx={{ width: '100%' }}
            id="outlined-multiline-static"
            label="Escreva um comunicado para sua turma"
            autoFocus
            multiline
            minRows={4}
          />

          <Stack direction="row" spacing={4}>
            <Button onClick={() => setIsComposing(false)} variant="text">
              Cancelar
            </Button>

            <Button onClick={() => console.log('clicked')} variant="contained">
              Postar
            </Button>
          </Stack>
        </Stack>
      ) : (
        <Stack
          sx={publishAnnouncement}
          alignItems="center"
          direction="row"
          spacing={2}
          onClick={() => setIsComposing(true)}
        >
          <Avatar alt={user.firstName} src={user.avatar} />
          <Typography id="outlined-multiline-static" sx={{ width: '100%' }}>
            Escreva um comunicado para sua turma
          </Typography>
        </Stack>
      )}
    </Card>
  );
}

export default PublishAnnouncementCard;
