import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logoImage from '../assets/if-salas-logo.svg';

function MainMenu({ options, layoutType }) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(
    options.find(option => option.isActive)
  );

  switch (layoutType) {
    case 'desktop':
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

    case 'mobile':
      return (
        <Box sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
          <BottomNavigation
            onChange={(_, newValue) => {
              const newOption = options.find(option => option.id === newValue);
              setSelectedOption(newOption);
              navigate(newOption.pathname, { replace: true });
            }}
            showLabels
            value={selectedOption.id}
          >
            {options.map(option => (
              <BottomNavigationAction
                key={option.text}
                label={option.text}
                icon={
                  option.id === selectedOption.id
                    ? option.selectedIcon
                    : option.unselectedIcon
                }
              />
            ))}
          </BottomNavigation>
        </Box>
      );

    default:
      return null;
  }
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

export default MainMenu;
