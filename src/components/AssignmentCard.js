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

import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';

function AssignmentCard({ title, classrooms, dueDate, scores, layoutType }) {
  switch (layoutType) {
    case 'desktop':
      return (
        <Card
          sx={{
            width: '100%',
            borderLeft: `5px solid ${classrooms[0].color}`,
          }}
        >
          <CardActionArea
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'start',
            }}
          >
            <CardContent sx={{ width: '100%' }}>
              <Tooltip title={title}>
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
              </Tooltip>
              <Stack sx={{ width: '100%' }}>
                <Typography
                  sx={{ fontWeight: 'bold' }}
                  variant="p"
                  component="div"
                >
                  {classrooms.map(c => c.name).join(',')}
                </Typography>
                <Divider sx={{ marginTop: '10px' }} />
                <Typography
                  sx={{ marginTop: '10px' }}
                  variant="p"
                  component="div"
                >
                  <strong>Data de entrega: </strong>{' '}
                  {capitalizeFirstLetter(
                    dayjs(dueDate).format('dddd, DD/MM | HH:mm[h]')
                  )}
                </Typography>
                <Typography variant="p" component="div">
                  <strong>Valor: </strong>
                  {scores.map(s => s.value).join(',')} pts
                </Typography>
              </Stack>
            </CardContent>
          </CardActionArea>
        </Card>
      );

    case 'mobile':
      return (
        <Card
          sx={{
            width: 390,
            borderTop: `5px solid ${classrooms[0].color}`,
          }}
        >
          <CardActionArea
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CardContent sx={{ width: '100%' }}>
              <Tooltip title={title}>
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
              </Tooltip>
              <Stack sx={{ width: '100%' }}>
                <Typography
                  sx={{ fontWeight: 'bold' }}
                  variant="p"
                  component="div"
                >
                  {classrooms.map(c => c.name).join(',')}
                </Typography>
                <Divider sx={{ marginTop: '10px' }} />
                <Typography
                  sx={{ marginTop: '10px' }}
                  variant="p"
                  component="div"
                >
                  <strong>Data de entrega: </strong>
                  {capitalizeFirstLetter(
                    dayjs(dueDate).format('dddd, DD/MM | HH:mm[h]')
                  )}
                </Typography>
                <Typography variant="p" component="div">
                  <strong>Valor: </strong>
                  {scores.map(s => s.value).join(',')} pts
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

export default AssignmentCard;
