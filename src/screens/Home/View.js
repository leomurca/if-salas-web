import { Grid, Skeleton, Stack } from '@mui/material';

import ClassCard from '../../components/ClassCard';
import AssignmentCard from '../../components/AssignmentCard';

import styles from './styles';
import { createArrayFrom1ToN } from '../../utils/createArrayFrom1ToN';

function View({ layoutType, classrooms, assignments, onClickClassCard }) {
  const { container, divider, assignmentsStack } = styles[layoutType];

  switch (layoutType) {
    case 'desktop':
      return (
        <Grid sx={container} container spacing={2}>
          <Grid item xs={8}>
            <h1>Turmas</h1>
            <Stack
              alignItems="center"
              flexWrap="wrap"
              direction="row"
              gap="30px"
            >
              {classrooms === null ? (
                createArrayFrom1ToN(6).map(i => (
                  <Skeleton
                    key={i}
                    variant="rectangular"
                    width={390}
                    height={145}
                  />
                ))
              ) : classrooms.length !== 0 ? (
                classrooms.map(classroom => (
                  <ClassCard
                    key={classroom.name}
                    abbreviation={classroom.abbreviation}
                    title={classroom.name}
                    color={classroom.color}
                    teachers={classroom.teachers}
                    layoutType={layoutType}
                    onClick={() => onClickClassCard(classroom.id)}
                  />
                ))
              ) : (
                <h1>Nenhuma sala de aula encontrada!</h1>
              )}
            </Stack>
          </Grid>
          <Grid sx={divider} item xs={4}>
            <h1>Atividades</h1>
            <h2>Atribuídas</h2>
            <Stack
              sx={assignmentsStack}
              alignItems="end"
              flexWrap="wrap"
              direction="row"
              gap="30px"
            >
              {assignments === null ? (
                createArrayFrom1ToN(6).map(i => (
                  <Skeleton
                    key={i}
                    variant="rectangular"
                    width={390}
                    height={145}
                  />
                ))
              ) : assignments.length !== 0 ? (
                assignments.map(assignment => (
                  <AssignmentCard
                    key={assignment.title}
                    title={assignment.title}
                    classrooms={assignment.classrooms}
                    dueDate={assignment.dueDate}
                    scores={assignment.scores}
                    layoutType={layoutType}
                  />
                ))
              ) : (
                <h1>Nenhuma atividade encontrada!</h1>
              )}
            </Stack>
          </Grid>
        </Grid>
      );
    case 'mobile':
      return (
        <Stack sx={container}>
          <h1>Turmas</h1>
          <Stack
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            direction="row"
            gap="30px"
          >
            {classrooms === null ? (
              createArrayFrom1ToN(6).map(i => (
                <Skeleton
                  key={i}
                  variant="rectangular"
                  width="100%"
                  height={245}
                />
              ))
            ) : classrooms.length !== 0 ? (
              classrooms.map(classroom => (
                <ClassCard
                  key={classroom.name}
                  abbreviation={classroom.abbreviation}
                  title={classroom.name}
                  color={classroom.color}
                  teachers={classroom.teachers}
                  layoutType={layoutType}
                  onClick={() => onClickClassCard(classroom.id)}
                />
              ))
            ) : (
              <h1>Nenhuma sala de aula encontrada!</h1>
            )}
          </Stack>
          <h1 style={divider}>Atividades</h1>
          <h2>Atribuídas</h2>
          <Stack
            sx={assignmentsStack}
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            direction="row"
            gap="30px"
          >
            {assignments === null ? (
              createArrayFrom1ToN(6).map(i => (
                <Skeleton
                  key={i}
                  variant="rectangular"
                  width="100%"
                  height={245}
                />
              ))
            ) : assignments.length !== 0 ? (
              assignments.map(assignment => (
                <AssignmentCard
                  key={assignment.title}
                  title={assignment.title}
                  classrooms={assignment.classrooms}
                  dueDate={assignment.dueDate}
                  scores={assignment.scores}
                  layoutType={layoutType}
                />
              ))
            ) : (
              <h1>Nenhuma sala de aula encontrada!</h1>
            )}
          </Stack>
        </Stack>
      );

    default:
      return null;
  }
}

export default View;
