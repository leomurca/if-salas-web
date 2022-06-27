import { useEffect, useState } from 'react';
import { useUser } from '../../context/user';
import useLayoutType from '../../hooks/useLayoutType';
import View from './View';

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

  return (
    <View
      layoutType={layoutType}
      classrooms={classrooms}
      assignments={assignments}
    />
  );
}

export default Home;
