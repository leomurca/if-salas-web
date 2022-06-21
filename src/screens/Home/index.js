import { useEffect, useState } from 'react';
import { Grid, Skeleton, Stack } from '@mui/material';
import { useUser } from '../../context/user';

import ClassCard from '../../components/ClassCard';

function Home() {
  const { fetchClassrooms } = useUser();
  const [classrooms, setClassrooms] = useState(null);

  useEffect(() => {
    async function getClassrooms() {
      const result = await fetchClassrooms();
      setClassrooms(result.data);
    }
    getClassrooms();
  }, [fetchClassrooms]);

  return (
    <Grid sx={{ height: '100vh', margin: 0 }} container spacing={2}>
      <Grid sx={{}} item xs={8}>
        <h1>Turmas</h1>
        <Stack alignItems="center" flexWrap="wrap" direction="row" gap="30px">
          {classrooms === null ? (
            Array(6)
              .fill()
              .map((_, index) => (
                <Skeleton
                  key={index}
                  variant="rectangular"
                  width={420}
                  height={145}
                />
              ))
          ) : classrooms.length !== 0 ? (
            classrooms.map(classroom => (
              <ClassCard
                key={classroom.name}
                abbreviation={classroom.abbreviation}
                title={classroom.name}
                teachers={classroom.teachers}
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
        <Stack alignItems="end" flexWrap="wrap" direction="row" gap="30px">
          {classrooms === null ? (
            Array(6)
              .fill()
              .map((_, index) => (
                <Skeleton
                  key={index}
                  variant="rectangular"
                  width={420}
                  height={145}
                />
              ))
          ) : classrooms.length !== 0 ? (
            classrooms.map(classroom => (
              <ClassCard
                key={classroom.name}
                abbreviation={classroom.abbreviation}
                title={classroom.name}
                teachers={classroom.teachers}
              />
            ))
          ) : (
            <h1>Nenhuma sala de aula encontrada!</h1>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Home;
