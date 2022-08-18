import { Container } from '@mui/material';

import Header from './Header';
import AnnouncementsTab from './AnnouncementsTab';
import AssignmentsTab from './AssignmentsTab';

import styles from './styles';

function View({
  layoutType,
  classroom,
  selectedTabOption,
  onSelectTabOption,
  announcementsTabData,
  assignmentsTabData,
}) {
  const { container } = styles[layoutType];
  return (
    <Container disableGutters sx={container}>
      <Header
        layoutType={layoutType}
        classroom={classroom}
        selectedTabOption={selectedTabOption}
        onSelectTabOption={onSelectTabOption}
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
