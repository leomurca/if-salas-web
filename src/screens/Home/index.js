import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/user';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import useLayoutType from '../../hooks/useLayoutType';
import View from './View';

function Home() {
  useDocumentTitle('Página Inicial');
  const navigate = useNavigate();
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

  const onClickClassCard = id => {
    navigate(`/class/${id}`, { replace: true });
  };

  return (
    <View
      layoutType={layoutType}
      classrooms={classrooms}
      assignments={assignments}
      onClickClassCard={onClickClassCard}
    />
  );
}

export default Home;
