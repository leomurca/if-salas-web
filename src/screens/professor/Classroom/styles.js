// ========== Desktop ==========
const desktopContainer = {
  width: '100%',
  height: '100vh',
  backgroundColor: '#red',
  padding: 0,
  margin: 0,
  marginTop: '50px',
};

const desktop = {
  container: desktopContainer,
};

// ========== Mobile ==========
const mobileContainer = {
  width: '90%',
  backgroundColor: '#red',
  padding: 0,
  marginTop: '30px',
  paddingBottom: '100px',
};

const mobile = {
  container: mobileContainer,
};

// ========== Unset ==========
const unset = {
  container: null,
};

const styles = { desktop, mobile, unset };
export default styles;
