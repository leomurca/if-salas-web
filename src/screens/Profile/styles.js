// ========== Desktop  ==========
const desktopProfileSummaryBox = {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  marginTop: '70px',
};

const desktopAvatarStack = {
  position: 'relative',
};

const desktopAvatar = {
  width: 200,
  height: 200,
};

const desktopAvatarFab = {
  position: 'absolute',
  bottom: '10%',
  right: 0,
};

const desktopProfileSummaryStack = {
  marginLeft: '30px',
};

const desktopFormBox = {
  width: '100%',
  marginBottom: '70px',
};

const desktopFormField = {
  width: '45%',
};

const desktopFormStack = {
  gap: 6,
  paddingTop: '50px',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'space-around',
};

const desktopFullNameTypography = {
  fontWeight: 'bold',
};

const desktopButton = {
  width: '30%',
};

const desktop = {
  profileSummaryBox: desktopProfileSummaryBox,
  avatarStack: desktopAvatarStack,
  avatar: desktopAvatar,
  avatarFab: desktopAvatarFab,
  profileSummaryStack: desktopProfileSummaryStack,
  formBox: desktopFormBox,
  formField: desktopFormField,
  formStack: desktopFormStack,
  fullNameTypography: desktopFullNameTypography,
  button: desktopButton,
};

// ========== Mobile ==========
const mobileProfileSummaryBox = {
  ...desktopProfileSummaryBox,
  flexDirection: 'column',
  textAlign: 'center',
  height: 'fit-content',
};

const mobileAvatarStack = {
  ...desktopAvatarStack,
};

const mobileAvatar = {
  ...desktopAvatar,
  width: 170,
  height: 170,
};

const mobileAvatarFab = {
  ...desktopAvatarFab,
};

const mobileProfileSummaryStack = {};

const mobileFormBox = {
  ...desktopFormBox,
  height: 'fit-content',
  marginBottom: '100px',
  paddingLeft: '15px',
  paddingRight: '15px',
};

const mobileFormField = {
  ...desktopFormField,
  width: '100%',
};

const mobileFormStack = {
  ...desktopFormStack,
  gap: 3,
};

const mobileFullNameTypography = {
  ...desktopFullNameTypography,
  marginTop: '20px',
};

const mobileButton = {
  width: '100%',
};

const mobile = {
  profileSummaryBox: mobileProfileSummaryBox,
  avatarStack: mobileAvatarStack,
  avatar: mobileAvatar,
  avatarFab: mobileAvatarFab,
  profileSummaryStack: mobileProfileSummaryStack,
  formBox: mobileFormBox,
  formField: mobileFormField,
  formStack: mobileFormStack,
  fullNameTypography: mobileFullNameTypography,
  button: mobileButton,
};

// ========== Unset ==========
const unset = {
  profileSummaryBox: null,
  avatarStack: null,
  avatar: null,
  profileSummaryStack: null,
  formBox: null,
  formField: null,
  formStack: null,
  fullNameTypography: null,
  button: null,
};

const styles = { desktop, mobile, unset };
export default styles;
