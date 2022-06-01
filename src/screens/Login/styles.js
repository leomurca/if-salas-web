const desktopPaper = {
  width: '950px',
  height: '500px',
  display: 'flex',
  justifyContent: 'center',
  color: 'white',
  textAlign: 'center',
};

const mobilePaper = {
  ...desktopPaper,
  flexDirection: 'column',
  height: '700px',
  marginLeft: '10px',
  marginRight: '10px',
};

const baseBox = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '0 70px',
};

const desktopBoxLogo = {
  ...baseBox,
  backgroundColor: 'secondary.main',
};

const mobileBoxLogo = {
  ...desktopBoxLogo,
  height: '45%',
  padding: '0',
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

const mobileBoxForm = {
  ...desktopBoxForm,
  padding: '0 15px',
  width: 'fit-content',
};

const desktop = {
  paper: desktopPaper,
  boxLogo: desktopBoxLogo,
  boxForm: desktopBoxForm,
};

const mobile = {
  paper: mobilePaper,
  boxLogo: mobileBoxLogo,
  boxForm: mobileBoxForm,
};

const styles = { desktop, mobile };
export default styles;
