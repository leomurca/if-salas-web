import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Stack,
  Tooltip,
  Divider,
} from '@mui/material';
import dayjs from 'dayjs';

import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter';

import styles from './styles';

function AssignmentCard({ title, classrooms, dueDate, scores, layoutType }) {
  const {
    cardContainer,
    classroomLinesIndicator,
    cardActionArea,
    cardContent,
    typographyTitle,
    stackClassroomNames,
    typographyClassroomNames,
    dividerMiddle,
    typographyDueDate,
  } = styles[layoutType];

  if (layoutType === 'desktop') {
    return (
      <Card sx={cardContainer(classrooms)}>
        {classrooms.length > 1 &&
          classrooms
            .filter((_, i) => i > 0)
            .map(c => <div key={c.id} style={classroomLinesIndicator(c)} />)}
        <CardActionArea sx={cardActionArea}>
          <CardContent sx={cardContent}>
            <Tooltip title={title}>
              <Typography
                sx={typographyTitle}
                gutterBottom
                variant="h6"
                component="div"
              >
                {title}
              </Typography>
            </Tooltip>
            <Stack sx={stackClassroomNames}>
              <Typography
                sx={typographyClassroomNames}
                variant="p"
                component="div"
              >
                {classrooms.map(c => c.name).join(', ')}
              </Typography>
              <Divider sx={dividerMiddle} />
              <Typography sx={typographyDueDate} variant="p" component="div">
                <strong>Data de entrega: </strong>{' '}
                {capitalizeFirstLetter(
                  dayjs(dueDate).format('dddd, DD/MM | HH:mm[h]')
                )}
              </Typography>
              <Typography variant="p" component="div">
                <strong>Valor: </strong>
                {scores.map(s => s.value).join(', ')} pts
              </Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  } else if (layoutType === 'mobile') {
    return (
      <Card sx={cardContainer(classrooms)}>
        <CardActionArea sx={cardActionArea}>
          {classrooms.length > 1 &&
            classrooms
              .filter((_, i) => i > 0)
              .map(c => <div key={c.id} style={classroomLinesIndicator(c)} />)}
          <CardContent sx={cardContent}>
            <Tooltip title={title}>
              <Typography
                sx={typographyTitle}
                gutterBottom
                variant="h6"
                component="div"
              >
                {title}
              </Typography>
            </Tooltip>
            <Stack sx={stackClassroomNames}>
              <Typography
                sx={typographyClassroomNames}
                variant="p"
                component="div"
              >
                {classrooms.map(c => c.name).join(', ')}
              </Typography>
              <Divider sx={dividerMiddle} />
              <Typography sx={typographyDueDate} variant="p" component="div">
                <strong>Data de entrega: </strong>
                {capitalizeFirstLetter(
                  dayjs(dueDate).format('dddd, DD/MM | HH:mm[h]')
                )}
              </Typography>
              <Typography variant="p" component="div">
                <strong>Valor: </strong>
                {scores.map(s => s.value).join(', ')} pts
              </Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default AssignmentCard;
