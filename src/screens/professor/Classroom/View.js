import { Container } from '@mui/system';
import AnnouncementsTab from './AnnouncementsTab';
import AssignmentsTab from './AssignmentsTab';
import GradesTab from './GradesTab';
import Header from './Header';
import PeopleTab from './PeopleTab';
import styles from './styles';

function View({
  layoutType,
  classroom,
  selectedTabOption,
  onSelectTabOption,
  announcementsTabData,
  assignmentsTabData,
  peopleTabData,
  gradesTabData,
  user,
  isLoading,
}) {
  const { container } = styles[layoutType];
  return (
    <Container disableGutters sx={container}>
      <Header
        layoutType={layoutType}
        classroom={classroom}
        selectedTabOption={selectedTabOption}
        onSelectTabOption={onSelectTabOption}
        isLoading={isLoading}
      />
      <AnnouncementsTab
        layoutType={layoutType}
        announcementsTabData={announcementsTabData}
        classroom={classroom && classroom}
        user={user && user}
      />
      <AssignmentsTab
        layoutType={layoutType}
        assignmentsTabData={assignmentsTabData}
      />
      <PeopleTab layoutType={layoutType} peopleTabData={peopleTabData} />
      <GradesTab layoutType={layoutType} gradesTabData={gradesTabData} />
    </Container>
  );
}

export default View;
