import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../../context/user';
import useLayoutType from '../../hooks/useLayoutType';
import { TAB_OPTIONS } from './tabOptions';
import View from './View';

function Classroom() {
  const params = useParams();
  const layoutType = useLayoutType();
  const { fetchClassroomById, fetchClassroomAnnouncements } = useUser();
  const [classroom, setClassroom] = useState(null);
  const [selectedTabOption, setSelectedTabOption] = useState(
    TAB_OPTIONS.map(o => o.value).indexOf('announcements')
  );

  const [tabData, setTabData] = useState(null);

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

  useEffect(() => {
    async function getSelectedTabData() {
      setTabData(null);
      if (selectedTabOption === 0) {
        console.log('Fetch announcements');
        const result = await fetchClassroomAnnouncements(params.id);
        setTabData({
          tab: TAB_OPTIONS[selectedTabOption].value,
          data: [...result.data],
        });
      } else if (selectedTabOption === 1) {
        console.log('Fetch assignments');
      } else if (selectedTabOption === 2) {
        console.log('Fetch people');
      }
    }
    getSelectedTabData();
  }, [fetchClassroomAnnouncements, selectedTabOption, params]);

  return (
    <View
      layoutType={layoutType}
      classroom={classroom}
      selectedTabOption={selectedTabOption}
      onSelectTabOption={onSelectTabOption}
      announcements={
        tabData && tabData.tab === 'announcements' ? tabData : null
      }
      people={tabData && tabData.tab === 'people' ? tabData : null}
    />
  );
}

export default Classroom;
