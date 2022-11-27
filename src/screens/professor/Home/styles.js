// ========== Desktop  ==========
const desktopContainer = {
  height: '100vh',
  margin: 0,
};

const desktop = {
  container: desktopContainer,
};

// ========== Mobile ==========
const mobileContainer = {
  height: 'inherit',
  width: '100%',
  padding: '10px 20px ',
  margin: 0,
};

const mobile = {
  container: mobileContainer,
};

// ========== Unset ==========
const unset = {
  container: null,
  divider: null,
  assignmentsStack: null,
};

const styles = { desktop, mobile, unset };
export default styles;
