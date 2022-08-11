import { Container } from '@mui/material';

import Header from './Header';
import AnnouncementsTab from './AnnouncementsTab';

import styles from './styles';

function View({
  layoutType,
  classroom,
  selectedTabOption,
  onSelectTabOption,
  announcementsTabData,
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
      />
    </Container>
  );
}

export default View;
