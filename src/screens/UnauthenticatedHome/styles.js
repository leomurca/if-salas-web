// ========== Desktop  ==========
const desktopContainer = {
  width: '85%',
  display: 'flex',
  margin: 0,
  paddingTop: '100px',
};

const desktopContainerLeft = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
};

const desktopContainerLeftH1 = {
  fontSize: '60px',
};

const desktopContainerLeftP = {
  fontSize: '20px',
  marginTop: '0',
};

const desktopContainerRight = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alginItems: 'center',
  justifyContent: 'center',
};

const desktopButtonsContainer = {
  marginTop: '20px',
  padding: 0,
  display: 'flex',
  gap: '30px',
};

const desktopButton = {
  width: 'fit-content',
  padding: '10px 20px',
};

const desktopImg = {
  margin: '0 auto',
};

const desktop = {
  container: desktopContainer,
  containerLeft: desktopContainerLeft,
  containerRight: desktopContainerRight,
  containerLeftH1: desktopContainerLeftH1,
  containerLeftP: desktopContainerLeftP,
  buttonsContainer: desktopButtonsContainer,
  button: desktopButton,
  img: desktopImg,
};

// ========== Mobile ==========
const mobileContainer = {
  width: '100%',
  display: 'flex',
  margin: 0,
  paddingTop: '20px',
  flexDirection: 'column',
};

const mobileContainerLeft = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
};

const mobileContainerRight = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alginItems: 'center',
  justifyContent: 'center',
};

const mobileContainerLeftH1 = {
  fontSize: '40px',
};

const mobileContainerLeftP = {
  fontSize: '15px',
  margin: 0,
};

const mobileButton = {
  width: '100%',
};

const mobileButtonsContainer = {
  marginTop: '20px',
  padding: 0,
  display: 'flex',
  gap: '30px',
  flexDirection: 'column',
  width: '100%',
};

const mobileImg = {
  width: '100%',
  height: '250px',
  margin: '0 auto',
  marginTop: '50px',
};

const mobile = {
  container: mobileContainer,
  containerLeft: mobileContainerLeft,
  containerRight: mobileContainerRight,
  containerLeftH1: mobileContainerLeftH1,
  containerLeftP: mobileContainerLeftP,
  buttonsContainer: mobileButtonsContainer,
  button: mobileButton,
  img: mobileImg,
};

// ========== Unset ==========
const unset = {
  container: null,
  containerLeft: null,
  containerRight: null,
  containerLeftH1: null,
  containerLeftP: null,
  buttonsContainer: null,
  button: null,
  img: null,
};

const styles = { desktop, mobile, unset };
export default styles;
