// ========== Desktop  ==========
const desktopContainer = {
  height: '100vh',
  margin: 0,
};

const desktopDivider = {
  borderLeft: '4px solid #CFCFCF',
};

const desktop = {
  container: desktopContainer,
  divider: desktopDivider,
};

// ========== Mobile ==========
const mobileContainer = {
  height: 'inherit',
  width: '100%',
  padding: '10px 20px ',
  margin: 0,
};

const mobileDivider = {
  borderTop: '2px solid #CFCFCF',
  paddingTop: '15px',
};

const mobile = {
  container: mobileContainer,
  divider: mobileDivider,
};

// ========== Unset ==========
const unset = {
  container: null,
  divider: null,
  assignmentsStack: null,
};

const styles = { desktop, mobile, unset };
export default styles;
