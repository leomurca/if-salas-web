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
  const { fetchClassrooms } = useUser();
  const [classrooms, setClassrooms] = useState(null);

  useEffect(() => {
    async function getClassrooms() {
      const result = await fetchClassrooms();
      setClassrooms(result.data);
    }
    getClassrooms();
  }, [fetchClassrooms]);

  const onClickClassCard = id => {
    navigate(`/class/${id}`);
  };

  console.log(classrooms);

  return (
    <View
      layoutType={layoutType}
      classrooms={classrooms}
      onClickClassCard={onClickClassCard}
    />
  );
}

export default Home;
