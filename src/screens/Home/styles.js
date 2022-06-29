// ========== Desktop  ==========
const desktopContainer = {
  height: '100vh',
  margin: 0,
};

const desktopDivider = {
  borderLeft: '4px solid #CFCFCF',
};

const desktopAssignmentsStack = {
  paddingBottom: '100px',
};

const desktop = {
  container: desktopContainer,
  divider: desktopDivider,
  assignmentsStack: desktopAssignmentsStack,
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

const mobileAssignmentsStack = {
  paddingBottom: '100px',
};

const mobile = {
  container: mobileContainer,
  divider: mobileDivider,
  assignmentsStack: mobileAssignmentsStack,
};

// ========== Unset ==========
const unset = {
  container: null,
  divider: null,
  assignmentsStack: null,
};

const styles = { desktop, mobile, unset };
export default styles;
