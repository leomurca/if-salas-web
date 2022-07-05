import { useState } from 'react';
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
import { NavLink, useNavigate } from 'react-router-dom';
import logoImage from '../../assets/if-salas-logo.svg';
import styles from './styles';

function MainMenu({ options, layoutType }) {
  const { menuContainer, navigator, item, itemIcon } = styles[layoutType];
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(
    options.find(option => option.isActive)
  );

  if (layoutType === 'desktop') {
    return (
      <Drawer sx={menuContainer} variant="permanent" anchor="left">
        <Toolbar disableGutters sx={navigator}>
          <img src={logoImage} width="70" alt="Logotipo" />
        </Toolbar>
        <List>
          {options.map(option => (
            <ListItem key={option.text} sx={item} disablePadding>
              <NavLink to={option.pathname}>
                <ListItemButton selected={option.isActive}>
                  <ListItemIcon sx={itemIcon}>
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
  } else if (layoutType === 'mobile') {
    return (
      <Box sx={menuContainer}>
        <BottomNavigation
          onChange={(_, newValue) => {
            const newOption = options.find(option => option.id === newValue);
            setSelectedOption(newOption);
            navigate(newOption.pathname, { replace: true });
          }}
          sx={navigator}
          showLabels
          value={selectedOption.id}
        >
          {options.map(option => (
            <BottomNavigationAction
              sx={item}
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
  }
}

export default MainMenu;
