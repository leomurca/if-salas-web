// ========== Desktop ==========
const desktopCardContainer = {
  width: 390,
  height: 135,
};
const desktopCardActionArea = {
  display: 'flex',
  flexDirection: 'row',
};

const desktopAbbreviationContainer = color => ({
  backgroundColor: color,
  width: '35%',
  height: '145px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
});

const desktopCardContent = {
  width: '70%',
};

const desktopTitleContainer = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  fontSize: '17px',
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
  cardContainer: desktopCardContainer,
  cardActionArea: desktopCardActionArea,
  abbreviationContainer: desktopAbbreviationContainer,
  cardContent: desktopCardContent,
  titleContainer: desktopTitleContainer,
  avatar: desktopAvatar,
  tooltip: desktopTooltip,
};

// ========== Mobile ==========
const mobileCardContainer = {
  width: '100%',
};

const mobileCardActionArea = {
  display: 'flex',
  flexDirection: 'column',
};

const mobileAbbreviationContainer = color => ({
  backgroundColor: color,
  width: '100%',
  height: '145px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
});

const mobileCardContent = {
  width: '100%',
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
  cardContainer: mobileCardContainer,
  cardActionArea: mobileCardActionArea,
  abbreviationContainer: mobileAbbreviationContainer,
  cardContent: mobileCardContent,
  titleContainer: null,
  avatar: mobileAvatar,
  tooltip: mobileTooltip,
};

// ========== Unset ==========
const unset = {
  cardContainer: null,
  cardActionArea: null,
  abbreviationContainer: null,
  cardContent: null,
  titleContainer: null,
  avatar: null,
  tooltip: null,
};

const styles = { desktop, mobile, unset };
export default styles;
