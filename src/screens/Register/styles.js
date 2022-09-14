// ========== Desktop  ==========
const desktopContainer = {
  height: 'auto',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '100px 0',
};

const desktopPaper = {
  height: 'fit-content',
  display: 'flex',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
  width: '100%',
};
const baseBox = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '30px 70px',
};

const desktopBoxLogo = {
  ...baseBox,
  backgroundColor: 'secondary.main',
  height: 'auto',
};

const desktopBoxForm = {
  ...baseBox,
  '> h1, p ': {
    textAlign: 'initial',
  },
  '> h1': {
    color: 'primary.black',
    margin: 0,
  },
  '> p': {
    color: 'primary.lightGray',
  },
};

const logoContainerDesktop = {};

const desktop = {
  container: desktopContainer,
  paper: desktopPaper,
  boxLogo: desktopBoxLogo,
  boxForm: desktopBoxForm,
  logoContainer: logoContainerDesktop,
};

// ========== Mobile ==========
const mobileContainer = {
  ...desktopContainer,
  padding: '100px 10px',
};

const mobilePaper = {
  ...desktopPaper,
  flexDirection: 'column-reverse',
  height: 'fit-content',
};

const mobileBoxLogo = {
  ...desktopBoxLogo,
  height: '50%',
  padding: '0',
};

const mobileBoxForm = {
  ...desktopBoxForm,
  padding: '20px 15px',
  width: '100%',
};

const logoContainerMobile = {
  padding: '20px 16px',
};

const mobile = {
  container: mobileContainer,
  paper: mobilePaper,
  boxLogo: mobileBoxLogo,
  boxForm: mobileBoxForm,
  logoContainer: logoContainerMobile,
};

// ========== Unset ==========
const unset = {
  container: null,
  paper: null,
  boxLogo: null,
  boxForm: null,
  logoContainer: null,
};

const styles = { desktop, mobile, unset };
export default styles;
