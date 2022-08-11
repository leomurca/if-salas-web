import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../../context/user';
import useLayoutType from '../../hooks/useLayoutType';
import { TAB_OPTIONS } from './tabOptions';
import View from './View';

function Classroom() {
  const params = useParams();
  const layoutType = useLayoutType();
  const {
    fetchClassroomById,
    fetchClassroomAnnouncements,
    fetchUpcomingAssignments,
  } = useUser();
  const [classroom, setClassroom] = useState(null);
  const [selectedTabOption, setSelectedTabOption] = useState(
    TAB_OPTIONS.announcements.value
  );

  const [tabData, setTabData] = useState(TAB_OPTIONS.announcements);

  const fetchAndPopulateAnnouncementsTabData = useCallback(async () => {
    const announcements = await fetchClassroomAnnouncements(params.id);
    const upcomingAssignments = await fetchUpcomingAssignments(params.id);

    setTabData({
      tab: 'announcements',
      announcements: [...announcements.data],
      upcomingAssignments: [...upcomingAssignments.data],
    });
  }, [fetchClassroomAnnouncements, fetchUpcomingAssignments, params.id]);

  const fetchAndPopulateAssignmentsTabData = useCallback(async () => {
    console.log('Fetch assignments');
  }, []);

  const fetchAndPopulatePoepleTabData = useCallback(async () => {
    console.log('Fetch assignments');
  }, []);

  useEffect(() => {
    async function getSelectedTabData() {
      setTabData(null);
      switch (selectedTabOption) {
        case TAB_OPTIONS.announcements.value:
          fetchAndPopulateAnnouncementsTabData();
          break;
        case TAB_OPTIONS.assignments.value:
          fetchAndPopulateAssignmentsTabData();
          break;
        case TAB_OPTIONS.people.value:
          fetchAndPopulatePoepleTabData();
          break;
        default:
          console.log('Invalid tab option');
      }
    }
    getSelectedTabData();
  }, [
    selectedTabOption,
    params,
    fetchAndPopulateAnnouncementsTabData,
    fetchAndPopulateAssignmentsTabData,
    fetchAndPopulatePoepleTabData,
  ]);

  useEffect(() => {
    async function getClassroomById(classId) {
      document.title = 'Carregando...';
      const result = await fetchClassroomById(classId);
      setClassroom(result.data);
    }

    function updateDocumentTitle() {
      if (classroom !== null) {
        document.title = classroom.name;
      }
    }

    getClassroomById(params.id);
    updateDocumentTitle();
  }, [fetchClassroomById, params, classroom]);

  return (
    <View
      layoutType={layoutType}
      classroom={classroom}
      selectedTabOption={selectedTabOption}
      onSelectTabOption={(_, value) => setSelectedTabOption(value)}
      announcementsTabData={
        tabData && tabData.tab === 'announcements' ? tabData : null
      }
    />
  );
}

export default Classroom;
