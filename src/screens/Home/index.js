import { useEffect, useState } from 'react';
import { Grid, Skeleton, Stack } from '@mui/material';
import { useUser } from '../../context/user';

import ClassCard from '../../components/ClassCard';
import useLayoutType from '../../hooks/useLayoutType';
import AssignmentCard from '../../components/AssignmentCard';

function Home() {
  const layoutType = useLayoutType();
  const { fetchClassrooms, fetchAssignments } = useUser();
  const [classrooms, setClassrooms] = useState(null);
  const [assignments, setAssignments] = useState(null);

  useEffect(() => {
    async function getClassrooms() {
      const result = await fetchClassrooms();
      setClassrooms(result.data);
    }
    getClassrooms();
  }, [fetchClassrooms]);

  useEffect(() => {
    async function getAssignments() {
      const result = await fetchAssignments();
      setAssignments(result.data);
    }
    getAssignments();
  }, [fetchAssignments]);

  switch (layoutType) {
    case 'desktop':
      return (
        <Grid sx={{ height: '100vh', margin: 0 }} container spacing={2}>
          <Grid sx={{}} item xs={8}>
            <h1>Turmas</h1>
            <Stack
              alignItems="center"
              flexWrap="wrap"
              direction="row"
              gap="30px"
            >
              {classrooms === null ? (
                Array(6)
                  .fill()
                  .map((_, index) => (
                    <Skeleton
                      key={index}
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
                  />
                ))
              ) : (
                <h1>Nenhuma sala de aula encontrada!</h1>
              )}
            </Stack>
          </Grid>
          <Grid sx={{ borderLeft: '4px solid #CFCFCF' }} item xs={4}>
            <h1>Atividades</h1>
            <h2>Atribuídas</h2>
            <Stack
              sx={{ paddingBottom: '100px' }}
              alignItems="end"
              flexWrap="wrap"
              direction="row"
              gap="30px"
            >
              {assignments === null ? (
                Array(6)
                  .fill()
                  .map((_, index) => (
                    <Skeleton
                      key={index}
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
        <Stack
          sx={{
            height: 'inherit',
            width: '100%',
            padding: '10px 20px ',
            margin: 0,
          }}
        >
          <h1>Turmas</h1>
          <Stack
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            direction="row"
            gap="30px"
          >
            {classrooms === null ? (
              Array(6)
                .fill()
                .map((_, index) => (
                  <Skeleton
                    key={index}
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
                />
              ))
            ) : (
              <h1>Nenhuma sala de aula encontrada!</h1>
            )}
          </Stack>
          <h1>Atividades</h1>
          <h2>Atribuídas</h2>
          <Stack
            sx={{
              paddingBottom: '100px',
            }}
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            direction="row"
            gap="30px"
          >
            {assignments === null ? (
              Array(6)
                .fill()
                .map((_, index) => (
                  <Skeleton
                    key={index}
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

export default Home;
