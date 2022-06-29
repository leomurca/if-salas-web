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

function ClassCard({
  abbreviation,
  title,
  color,
  teachers,
  layoutType,
  onClick,
}) {
  if (layoutType === 'desktop') {
    return (
      <Card sx={{ width: 390, height: 135 }}>
        <CardActionArea
          onClick={() => onClick()}
          sx={{ display: 'flex', flexDirection: 'row' }}
        >
          <Container
            sx={{
              backgroundColor: color,
              width: '35%',
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
                fontSize: '17px',
              }}
              gutterBottom
              variant="h6"
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
                  variant="body3"
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
  } else if (layoutType === 'mobile') {
    return (
      <Card sx={{ width: '100%' }}>
        <CardActionArea
          onClick={() => onClick()}
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
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
            <Typography gutterBottom variant="h6" component="div">
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
  }
}

export default ClassCard;
