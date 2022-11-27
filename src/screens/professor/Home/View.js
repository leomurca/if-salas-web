import { Grid, Skeleton, Stack } from '@mui/material';
import { Container } from '@mui/system';
import ClassCard from '../../../components/ClassCard';
import { createArrayFrom1ToN } from '../../../utils/createArrayFrom1ToN';
import styles from './styles';

function View({ layoutType, classrooms, onClickClassCard }) {
  const { container, divider, assignmentsStack } = styles[layoutType];

  if (layoutType === 'desktop') {
    return (
      <Grid sx={container} container spacing={2}>
        <Grid item xs={8}>
          <h1>Minhas Turmas</h1>
          <Stack alignItems="center" flexWrap="wrap" direction="row" gap="30px">
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
              <Container
                sx={{
                  height: '100vh',
                  display: 'flex',
                  justifyContent: 'center',
                }}
                disableGutters
              >
                <p>Nenhuma sala de aula encontrada!</p>
              </Container>
            )}
          </Stack>
        </Grid>
        <Grid sx={divider} item xs={4}>
          <h1>Atividades para corrigir</h1>
          <h2>Atribuídas</h2>
          <Stack
            sx={assignmentsStack}
            alignItems="end"
            flexWrap="wrap"
            direction="row"
            gap="30px"
          >
            <h3>Atividade 1</h3>
            <h3>Atividade 2</h3>
          </Stack>
        </Grid>
      </Grid>
    );
  } else if (layoutType === 'mobile') {
    return (
      <Stack sx={container}>
        <h1>Minhas Turmas</h1>
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
            <Container disableGutters>
              <p>Nenhuma sala de aula encontrada!</p>
            </Container>
          )}
        </Stack>
        <h1 style={divider}>Atividades para corrigir</h1>
        <h2>Atribuídas</h2>
        <Stack
          sx={assignmentsStack}
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          direction="row"
          gap="30px"
        >
          <h3>Atividade 1</h3>
          <h3>Atividade 2</h3>
        </Stack>
      </Stack>
    );
  }
}

export default View;
