// ========== Desktop ==========
const desktopTitle = {
  fontWeight: 500,
};

const desktopContainer = {
  width: '100%',
  height: '100vh',
  backgroundColor: '#red',
  padding: 0,
  margin: 0,
  marginTop: '50px',
};

const desktopPaper = classColor => ({
  width: '100%',
  borderTop: `5px solid ${classColor}`,
  padding: '20px',
});

const desktopTabs = {
  marginLeft: '-20px',
  marginRight: '-20px',
  marginBottom: '-20px',
  marginTop: '30px',
};

const desktopAvatar = {
  width: 30,
  height: 30,
};

const desktopTooltip = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
};

const desktop = {
  title: desktopTitle,
  container: desktopContainer,
  paper: desktopPaper,
  tabs: desktopTabs,
  avatar: desktopAvatar,
  tooltip: desktopTooltip,
};

// ========== Mobile ==========
const mobileTitle = {
  fontWeight: 500,
  fontSize: '25px',
};

const mobileContainer = {
  width: '90%',
  backgroundColor: '#red',
  padding: 0,
  marginTop: '30px',
  paddingBottom: '100px',
};

const mobilePaper = classColor => ({
  width: '100%',
  borderTop: `5px solid ${classColor}`,
  padding: '10px',
});

const mobileTabs = {
  marginLeft: '-10px',
  marginRight: '-10px',
  marginBottom: '-10px',
  marginTop: '30px',
};

const mobileAvatar = {
  width: 30,
  height: 30,
};

const mobileTooltip = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
};

const mobile = {
  title: mobileTitle,
  container: mobileContainer,
  paper: mobilePaper,
  tabs: mobileTabs,
  avatar: mobileAvatar,
  tooltip: mobileTooltip,
};

// ========== Unset ==========
const unset = {
  title: null,
  container: null,
  paper: null,
  tabs: null,
  avatar: null,
  tooltip: null,
};

const styles = { desktop, mobile, unset };
export default styles;
