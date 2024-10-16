// ========== Desktop  ==========
const drawerWidth = 230;
const desktopMenuContainer = {
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: 'secondary.main',
  },
  position: 'relative',
};

const desktopEnvDashVersionTypography = {
  position: 'absolute',
  bottom: '0',
  textAlign: 'center',
  color: '#ffffff',
  width: '100%',
  marginBottom: '20px',
};

const desktopToolbar = {
  display: 'flex',
  justifyContent: 'center',
  padding: '20px 0',
};

const desktopListItem = {
  '> a': {
    width: drawerWidth,
    textDecoration: 'none',
    color: 'white',
    height: 'inherit',
  },
  '.Mui-selected': {
    backgroundColor: '#003708',
    borderLeft: '4px solid #ffffff',
  },
};

const desktopListItemIcon = {
  color: 'white',
};

const desktop = {
  menuContainer: desktopMenuContainer,
  envDashVersionTypography: desktopEnvDashVersionTypography,
  navigator: desktopToolbar,
  item: desktopListItem,
  itemIcon: desktopListItemIcon,
};

// ========== Mobile ==========
const mobileMenuContainer = {
  width: '100%',
  position: 'fixed',
  bottom: 0,
  zIndex: 2,
};

const mobile = {
  menuContainer: mobileMenuContainer,
  envDashVersionTypography: null,
  navigator: null,
  item: null,
  itemIcon: null,
};

// ========== Unset ==========
const unset = {
  menuContainer: null,
  envDashVersionTypography: null,
  navigator: null,
  item: null,
  itemIcon: null,
};

const styles = { desktop, mobile, unset };
export default styles;
