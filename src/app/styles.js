// ========== Desktop =========
const desktopContainer = {
  height: 'auto',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'primary.mainBackground',
};

const desktopToolbar = {
  fontSize: '30px',
};

const desktop = {
  container: desktopContainer,
  toolbar: desktopToolbar,
};

// ========== Mobile =========
const mobileContainer = {
  ...desktopContainer,
  flexDirection: 'column',
  justifyContent: 'start',
};

const mobileToolbar = {
  fontSize: '20px',
};

const mobile = {
  container: mobileContainer,
  toolbar: mobileToolbar,
};

// ========== Unset =========
const unset = {
  container: null,
  toolbar: null,
};

const styles = { desktop, mobile, unset };
export default styles;
