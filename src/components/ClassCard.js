import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Container,
  Avatar,
  Stack,
  AvatarGroup,
  Tooltip,
} from '@mui/material';

function ClassCard({ abbreviation, title, color, teachers, layoutType }) {
  switch (layoutType) {
    case 'desktop':
      return (
        <Card sx={{ width: 390, height: 145 }}>
          <CardActionArea sx={{ display: 'flex', flexDirection: 'row' }}>
            <Container
              sx={{
                backgroundColor: color,
                width: '30%',
                height: '145px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              <h1>{abbreviation}</h1>
            </Container>
            <CardContent sx={{ width: '70%' }}>
              <Typography
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                }}
                gutterBottom
                variant="h5"
                component="div"
              >
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
                <Tooltip title={teachers.map(t => t.name).join(', ')}>
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
                    {teachers.map(t => t.name).join(', ')}
                  </Typography>
                </Tooltip>
              </Stack>
            </CardContent>
          </CardActionArea>
        </Card>
      );

    case 'mobile':
      return (
        <Card sx={{ width: '100%' }}>
          <CardActionArea sx={{ display: 'flex', flexDirection: 'column' }}>
            <Container
              sx={{
                backgroundColor: color,
                width: '100%',
                height: '145px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              <h1>{abbreviation}</h1>
            </Container>
            <CardContent sx={{ width: '100%' }}>
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
                  {teachers.map(t => t.name).join(', ')}
                </Typography>
              </Stack>
            </CardContent>
          </CardActionArea>
        </Card>
      );

    default:
      return null;
  }
}

export default ClassCard;
