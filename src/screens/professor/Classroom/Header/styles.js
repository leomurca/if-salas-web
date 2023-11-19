// ========== Desktop ==========
const desktopTitle = {
  fontWeight: 500,
};

const desktopPaper = classColor => ({
  width: '100%',
  borderTop: `5px solid ${classColor}`,
  padding: '30px',
});

const desktopTabs = {
  marginLeft: '-20px',
  marginRight: '-20px',
  marginBottom: '-30px',
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

const mobilePaper = classColor => ({
  width: '100%',
  borderTop: `5px solid ${classColor}`,
  padding: '20px',
});

const mobileTabs = {
  marginLeft: '-10px',
  marginRight: '-10px',
  marginBottom: '-20px',
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
  paper: mobilePaper,
  tabs: mobileTabs,
  avatar: mobileAvatar,
  tooltip: mobileTooltip,
};

// ========== Unset ==========
const unset = {
  title: null,
  paper: null,
  tabs: null,
  avatar: null,
  tooltip: null,
};

const styles = { desktop, mobile, unset };
export default styles;
