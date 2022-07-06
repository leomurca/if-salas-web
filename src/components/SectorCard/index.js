import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

import styles from './styles';

function SectorCard({
  title,
  description,
  coverImage,
  informationUrl,
  layoutType,
}) {
  const { card, cardMedia } = styles;
  return (
    <Card sx={card}>
      <CardMedia {...cardMedia} image={coverImage.image} alt={coverImage.alt} />
      <CardContent sx={layoutType === 'desktop' ? { height: 190 } : null}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={informationUrl} target="__blank" size="small">
          Informações
        </Button>
      </CardActions>
    </Card>
  );
}

export default SectorCard;
