// ========== Desktop ==========
const desktopBox = {
  display: 'flex',
  marginLeft: '230px',
  height: '130px',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 70px',
  borderBottom: '3px solid #CFCFCF',
};

const desktopMenuBoxContainer = {
  flexGrow: 0,
};

const desktopMenuBox = {
  display: 'flex',
  gap: '20px',
};

const desktopNotificationIconButton = {
  p: 2,
};

const desktopMenuNotifications = {
  sx: {
    mt: '45px',
  },
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
};

const desktopMenuUser = {
  sx: {
    mt: '45px',
  },
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
};

const desktop = {
  box: desktopBox,
  menuBoxContainer: desktopMenuBoxContainer,
  menuBox: desktopMenuBox,
  notificationIconButton: desktopNotificationIconButton,
  menuNotifications: desktopMenuNotifications,
  menuUser: desktopMenuUser,
};

// ========== Mobile ==========
const mobileBox = {
  display: 'flex',
  alignItems: 'center',
  borderBottom: '3px solid #CFCFCF',
  marginLeft: 0,
  height: '70px',
  padding: '0 10px',
  justifyContent: 'space-around',
};

const mobileMenuBoxContainer = {
  flexGrow: 0,
};

const mobileMenuBox = {
  display: 'flex',
  gap: '20px',
};

const mobileNotificationIconButton = {
  p: 2,
};

const mobileMenuNotifications = {
  sx: {
    mt: '45px',
  },
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
};

const mobileMenuUser = {
  sx: {
    mt: '45px',
  },
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
};

const mobile = {
  box: mobileBox,
  menuBoxContainer: mobileMenuBoxContainer,
  menuBox: mobileMenuBox,
  notificationIconButton: mobileNotificationIconButton,
  menuNotifications: mobileMenuNotifications,
  menuUser: mobileMenuUser,
};

// ========== Unset ==========
const unset = {
  box: null,
  menuBoxContainer: null,
  menuBox: null,
  notificationIconButton: null,
  menuNotifications: null,
  menuUser: null,
};

const styles = { desktop, mobile, unset };
export default styles;
