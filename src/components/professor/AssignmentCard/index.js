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

import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter';

import styles from './styles';
import { AssignmentTurnedIn, PendingActions } from '@mui/icons-material';

function AssignmentCard({
  title,
  classrooms,
  dueDate,
  deliveredByStudents,
  reviewed,
  total,
  layoutType,
  onClick,
}) {
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
        <CardActionArea onClick={() => onClick()} sx={cardActionArea}>
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
              <Typography sx={typographyDueDate} variant="p" component="div">
                Data de entrega:{' '}
                {capitalizeFirstLetter(dayjs(dueDate).format('dddd, DD/MM'))}
              </Typography>
              <Divider sx={dividerMiddle} />
              {deliveredByStudents >= 0 && total && (
                <Typography
                  variant="p"
                  component="div"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '10px',
                  }}
                >
                  <AssignmentTurnedIn sx={{ marginRight: '5px' }} />
                  {`${reviewed}`} corrigidas.
                </Typography>
              )}
              {reviewed >= 0 && total && (
                <Typography
                  variant="p"
                  component="div"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <PendingActions sx={{ marginRight: '5px' }} />{' '}
                  {`${total - reviewed}`} pendentes.
                </Typography>
              )}
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  } else if (layoutType === 'mobile') {
    return (
      <Card sx={cardContainer(classrooms)}>
        <CardActionArea onClick={() => onClick()} sx={cardActionArea}>
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

              <Typography sx={typographyDueDate} variant="p" component="div">
                Data de entrega:{' '}
                {capitalizeFirstLetter(dayjs(dueDate).format('dddd, DD/MM'))}
              </Typography>
              <Divider sx={dividerMiddle} />
              {deliveredByStudents >= 0 && total && (
                <Typography
                  variant="p"
                  component="div"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '10px',
                  }}
                >
                  <AssignmentTurnedIn sx={{ marginRight: '5px' }} />
                  {`${reviewed}`} corrigidas.
                </Typography>
              )}
              {reviewed >= 0 && total && (
                <Typography
                  variant="p"
                  component="div"
                  sx={{ display: 'flex', alignItems: 'center' }}
                >
                  <PendingActions sx={{ marginRight: '5px' }} />{' '}
                  {`${total - reviewed}`} pendentes.
                </Typography>
              )}
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default AssignmentCard;
