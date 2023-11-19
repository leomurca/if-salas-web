// ========== Desktop ==========
const desktopContainer = {
  width: '100%',
  height: '100vh',
  backgroundColor: '#red',
  padding: 0,
  margin: 0,
  marginTop: '50px',
};

const desktopEmptyStateContainer = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '30px',
};

const desktop = {
  container: desktopContainer,
  emptyStateContainer: desktopEmptyStateContainer,
};

// ========== Mobile ==========
const mobileContainer = {
  width: '90%',
  backgroundColor: '#red',
  padding: 0,
  marginTop: '30px',
  paddingBottom: '100px',
};

const mobileEmptyStateContainer = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '30px',
};

const mobile = {
  container: mobileContainer,
  emptyStateContainer: mobileEmptyStateContainer,
};

// ========== Unset ==========
const unset = {
  container: null,
  emptyStateContainer: null,
};

const styles = { desktop, mobile, unset };
export default styles;
