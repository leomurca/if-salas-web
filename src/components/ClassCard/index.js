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

import styles from './styles';

function ClassCard({
  abbreviation,
  title,
  color,
  teachers,
  layoutType,
  onClick,
}) {
  const {
    cardContainer,
    cardActionArea,
    abbreviationContainer,
    cardContent,
    titleContainer,
    avatar,
    tooltip,
  } = styles[layoutType];
  if (layoutType === 'desktop') {
    return (
      <Card sx={cardContainer}>
        <CardActionArea onClick={() => onClick()} sx={cardActionArea}>
          <Container sx={abbreviationContainer(color)}>
            <h1>{abbreviation}</h1>
          </Container>
          <CardContent sx={cardContent}>
            <Typography
              sx={titleContainer}
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
                    sx={avatar}
                  />
                ))}
              </AvatarGroup>
              <Tooltip title={teachers.map(t => t.name).join(', ')}>
                <Typography sx={tooltip} variant="body3" color="text.secondary">
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
      <Card sx={cardContainer}>
        <CardActionArea onClick={() => onClick()} sx={cardActionArea}>
          <Container sx={abbreviationContainer(color)}>
            <h1>{abbreviation}</h1>
          </Container>
          <CardContent sx={cardContent}>
            <Typography
              sx={titleContainer}
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
                    sx={avatar}
                  />
                ))}
              </AvatarGroup>
              <Typography sx={tooltip} variant="body2" color="text.secondary">
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
