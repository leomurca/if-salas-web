import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../../../context/user';
import useLayoutType from '../../../hooks/useLayoutType';
import { TAB_OPTIONS } from './tabOptions';
import View from './View';

function Classroom() {
  const params = useParams();
  const layoutType = useLayoutType();
  const { userService, state } = useUser();
  const [classroom, setClassroom] = useState(null);
  const [tabData, setTabData] = useState(null);

  const [selectedTabOption, setSelectedTabOption] = useState(
    TAB_OPTIONS.announcements.value
  );

  const fetchAndPopulateAnnouncementsTabData = useCallback(async () => {
    setTabData({ tab: 'announcements', state: 'loading' });
    const announcements = await userService.fetchClassroomAnnouncements(
      params.id
    );

    setTabData({
      tab: 'announcements',
      state: 'idle',
      announcements: [...announcements.data],
    });
  }, [userService, params.id]);

  const fetchAndPopulateAssignmentsTabData = useCallback(async () => {
    setTabData({ tab: 'assignments', state: 'loading' });
    const assignments = await userService.fetchAssignmentsByClassId(params.id);

    setTabData({
      tab: 'assignments',
      state: 'idle',
      assignments: [...assignments.data],
    });
  }, [userService, params.id]);

  useEffect(() => {
    async function getClassroomById(classId) {
      document.title = 'Carregando...';
      const result = await userService.fetchClassroomById(classId);
      setClassroom(result.data);
    }

    function updateDocumentTitle() {
      if (classroom !== null) {
        document.title = classroom.name;
      }
    }

    getClassroomById(params.id);
    updateDocumentTitle();
  }, [userService, userService.fetchClassroomById, params, classroom]);

  const fetchAndPopulatePeopleTabData = useCallback(async () => {
    setTabData({ tab: 'people', state: 'loading' });
    const people = await userService.fetchPeopleByClassId(params.id);

    setTabData({
      tab: 'people',
      state: 'idle',
      people: [...people.data],
    });
  }, [userService, params.id]);

  const fetchAndPopulateGradesTabData = useCallback(async () => {
    setTabData({ tab: 'people', state: 'loading' });
    const grades = await userService.fetchPeopleByClassId(params.id);

    setTabData({
      tab: 'grades',
      state: 'idle',
      grades: [...grades.data],
    });
  }, [userService, params.id]);

  useEffect(() => {
    async function getSelectedTabData() {
      switch (selectedTabOption) {
        case TAB_OPTIONS.announcements.value:
          fetchAndPopulateAnnouncementsTabData();
          break;
        case TAB_OPTIONS.assignments.value:
          fetchAndPopulateAssignmentsTabData();
          break;
        case TAB_OPTIONS.people.value:
          fetchAndPopulatePeopleTabData();
          break;
        case TAB_OPTIONS.grades.value:
          fetchAndPopulateGradesTabData();
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
    fetchAndPopulatePeopleTabData,
    fetchAndPopulateGradesTabData,
  ]);

  return (
    <View
      layoutType={layoutType}
      classroom={classroom}
      selectedTabOption={selectedTabOption}
      onSelectTabOption={(_, value) => setSelectedTabOption(value)}
      announcementsTabData={
        tabData && tabData.tab === 'announcements' ? tabData : { state: 'gone' }
      }
      assignmentsTabData={
        tabData && tabData.tab === 'assignments' ? tabData : { state: 'gone' }
      }
      peopleTabData={
        tabData && tabData.tab === 'people' ? tabData : { state: 'gone' }
      }
      gradesTabData={
        tabData && tabData.tab === 'grades' ? tabData : { state: 'gone' }
      }
      user={state && state.user}
      isLoading={tabData && tabData.state === 'loading'}
    />
  );
}

export default Classroom;
