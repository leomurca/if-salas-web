import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../context/user';
import { useDocumentTitle } from '../../../hooks/useDocumentTitle';
import useLayoutType from '../../../hooks/useLayoutType';
import View from './View';

function Home() {
  useDocumentTitle('Página Inicial');
  const navigate = useNavigate();
  const layoutType = useLayoutType();
  const { userService } = useUser();
  const [classrooms, setClassrooms] = useState(null);
  const [assignments, setAssignments] = useState(null);

  useEffect(() => {
    async function getClassrooms() {
      const result = await userService.fetchClassrooms();
      setClassrooms(result.data);
    }
    getClassrooms();
  }, [userService, userService.fetchClassrooms]);

  useEffect(() => {
    async function getAssignments() {
      const result = await userService.fetchAllAssignments();
      setAssignments(result.data);
    }
    getAssignments();
  }, [userService, userService.fetchAllAssignments]);

  const onClickClassCard = id => {
    navigate(`/class/${id}`);
  };

  const onClickAssignmentCard = id => {
    navigate(`/assignment/${id}`);
  };

  return (
    <View
      layoutType={layoutType}
      classrooms={classrooms}
      assignments={assignments}
      onClickClassCard={onClickClassCard}
      onClickAssignmentCard={onClickAssignmentCard}
    />
  );
}

export default Home;
