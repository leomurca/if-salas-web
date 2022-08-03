import { Avatar, Card, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import dayjs from 'dayjs';
import { styles } from './styles';

function AnnouncementCard({ announcement }) {
  const { cardContainer, typographyName, typographyCreatedAt, textContainer } =
    styles;
  return (
    <Card sx={cardContainer} elevation={4} variant="elevation">
      <Stack alignItems="center" direction="row" spacing={1}>
        <Avatar
          key={announcement.user.id}
          alt={announcement.user.name}
          src={announcement.user.avatar}
        />
        <Stack>
          <Typography sx={typographyName} variant="body1">
            {announcement.user.name}
          </Typography>
          <Typography sx={typographyCreatedAt} variant="body1">
            {dayjs(announcement.createdAt).format('DD [de] MMM [de] YYYY')}
          </Typography>
        </Stack>
      </Stack>
      <Container sx={textContainer} disableGutters>
        {announcement.text}
      </Container>
    </Card>
  );
}

export default AnnouncementCard;
