import { Container } from '@mui/system';
import AnnouncementsTab from './AnnouncementsTab';
import AssignmentsTab from './AssignmentsTab';
import Header from './Header';
import styles from './styles';

function View({
  layoutType,
  classroom,
  selectedTabOption,
  onSelectTabOption,
  announcementsTabData,
  assignmentsTabData,
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
    </Container>
  );
}

export default View;
