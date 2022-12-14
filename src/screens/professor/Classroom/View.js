import { Container } from '@mui/system';
import AnnouncementsTab from './AnnouncementsTab';
import AssignmentsTab from './AssignmentsTab';
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
      />
      <AssignmentsTab
        layoutType={layoutType}
        assignmentsTabData={assignmentsTabData}
      />
      <PeopleTab layoutType={layoutType} peopleTabData={peopleTabData} />
    </Container>
  );
}

export default View;
