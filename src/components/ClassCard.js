import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Container,
  Avatar,
  Stack,
  AvatarGroup,
} from '@mui/material';

function ClassCard({ abbreviation, title, color, teachers }) {
  return (
    <Card sx={{ width: 420 }}>
      <CardActionArea sx={{ display: 'flex', flexDirection: 'row' }}>
        <Container
          sx={{
            backgroundColor: color,
            width: '140px',
            height: '145px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}
        >
          <h1>{abbreviation}</h1>
        </Container>
        <CardContent sx={{ width: '280px' }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Stack alignItems="center" direction="row" spacing={1}>
            <AvatarGroup total={teachers.length}>
              {teachers.map(t => (
                <Avatar
                  key={t.name}
                  alt={t.name}
                  src={t.avatar}
                  sx={{ width: 30, height: 30 }}
                />
              ))}
            </AvatarGroup>
            <Typography
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}
              variant="body2"
              color="text.secondary"
            >
              {teachers.map(t => t.name).join(',')}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ClassCard;
