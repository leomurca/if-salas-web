import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import logoImage from '../assets/if-salas-logo.svg';

function MainDrawer({ options }) {
  return (
    <Drawer sx={drawer} variant="permanent" anchor="left">
      <Toolbar disableGutters sx={toolbar}>
        <img src={logoImage} width="70" alt="Logotipo" />
      </Toolbar>
      <List>
        {options.map(option => (
          <ListItem key={option.text} sx={listItem} disablePadding>
            <NavLink to={option.pathname}>
              <ListItemButton selected={option.isActive}>
                <ListItemIcon sx={listItemIcon}>
                  {option.unselectedIcon}
                </ListItemIcon>
                <ListItemText primary={option.text} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

const drawerWidth = 230;
const drawer = {
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: 'secondary.main',
  },
};

const toolbar = {
  display: 'flex',
  justifyContent: 'center',
  padding: '20px 0',
};

const listItem = {
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

const listItemIcon = {
  color: 'white',
};

export default MainDrawer;
