import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../../context/user';
import useLayoutType from '../../hooks/useLayoutType';
import { TAB_OPTIONS } from './tabOptions';
import View from './View';

function Classroom() {
  const params = useParams();
  const layoutType = useLayoutType();
  const { fetchClassroomById } = useUser();
  const [classroom, setClassroom] = useState(null);
  const [selectedTabOption, setSelectedTabOption] = useState(
    TAB_OPTIONS.map(o => o.value).indexOf('announcements')
  );

  const onSelectTabOption = (_, value) => {
    setSelectedTabOption(value);
  };

  useEffect(() => {
    async function getClassroomById(classId) {
      document.title = 'Carregando...';
      const result = await fetchClassroomById(classId);
      setClassroom(result.data);
    }

    getClassroomById(params.id);
  }, [fetchClassroomById, params]);

  useEffect(() => {
    if (classroom !== null) {
      document.title = classroom.name;
    }
  }, [classroom]);

  return (
    <View
      layoutType={layoutType}
      classroom={classroom}
      selectedTabOption={selectedTabOption}
      onSelectTabOption={onSelectTabOption}
    />
  );
}

export default Classroom;
