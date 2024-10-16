// ========== Desktop ==========
const desktopExternalContainer = {
  marginTop: '50px',
  height: '100vh',
};

const desktopSectionContainer = {
  width: '90%',
  marginBottom: '30px',
};

const desktopSectionTitle = {
  padding: '10px',
  borderBottom: '2px solid #00420D',
  color: '#00420D',
};

const desktopPersonContainer = {
  width: '95%',
  padding: '20px',
  borderBottom: '2px solid #BCBCBC',
  display: 'flex',
  alignItems: 'center',
};

const desktopPersonAvatar = {
  width: '50px',
  height: '50px',
  marginRight: '15px',
};

const desktopPersonName = {
  fontSize: '1.3em',
};

const desktopEmptyStateContainer = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '30px',
};

const desktop = {
  externalContainer: desktopExternalContainer,
  sectionContainer: desktopSectionContainer,
  sectionTitle: desktopSectionTitle,
  personContainer: desktopPersonContainer,
  personAvatar: desktopPersonAvatar,
  personName: desktopPersonName,
  emptyStateContainer: desktopEmptyStateContainer,
};

// ========== Mobile ==========
const mobileExternalContainer = {
  marginTop: '50px',
  height: '100vh',
};

const mobileSectionContainer = {
  width: '90%',
  marginBottom: '30px',
};

const mobileSectionTitle = {
  padding: '10px',
  borderBottom: '2px solid #00420D',
  color: '#00420D',
};

const mobilePersonContainer = {
  width: '95%',
  padding: '20px',
  borderBottom: '2px solid #BCBCBC',
  display: 'flex',
  alignItems: 'center',
};

const mobilePersonAvatar = {
  width: '40px',
  height: '40px',
  marginRight: '15px',
};

const mobilePersonName = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
};

const mobileEmptyStateContainer = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '30px',
};

const mobile = {
  externalContainer: mobileExternalContainer,
  sectionContainer: mobileSectionContainer,
  sectionTitle: mobileSectionTitle,
  personContainer: mobilePersonContainer,
  personAvatar: mobilePersonAvatar,
  personName: mobilePersonName,
  emptyStateContainer: mobileEmptyStateContainer,
};

// ========== Unset ==========
const unset = {
  externalContainer: null,
  sectionContainer: null,
  sectionTitle: null,
  personContainer: null,
  personAvatar: null,
  personName: null,
};

const styles = { desktop, mobile, unset };
export default styles;
