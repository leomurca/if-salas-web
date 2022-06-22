import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Container,
  Avatar,
  Stack,
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
          {teachers.map(teacher => (
            <Stack
              key={teacher.name}
              alignItems="center"
              direction="row"
              spacing={1}
            >
              <Avatar
                alt={teacher.name}
                src={teacher.avatar}
                sx={{ width: 30, height: 30 }}
              />
              <Typography variant="body2" color="text.secondary">
                {teacher.name}
              </Typography>
            </Stack>
          ))}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ClassCard;
