import { NotificationsOutlined } from '@mui/icons-material';
import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import styles from './styles';

function Toolbar({ title, layoutType, avatarMenuOptions, user }) {
  const {
    box,
    menuBoxContainer,
    menuBox,
    notificationIconButton,
    menuNotifications,
    menuUser,
  } = styles[layoutType];
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNotifications, setAnchorElNotifications] = useState(null);

  if (layoutType === 'desktop') {
    return (
      <Box sx={box}>
        {title}
        <Box sx={menuBoxContainer}>
          <Box sx={menuBox}>
            <Tooltip title="Ver notificações">
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={e => setAnchorElNotifications(e.currentTarget)}
                sx={notificationIconButton}
              >
                <Badge badgeContent={17} color="success">
                  <NotificationsOutlined />
                </Badge>
              </IconButton>
            </Tooltip>
            <Menu
              sx={menuNotifications.sx}
              id="menu-appbar"
              anchorEl={anchorElNotifications}
              anchorOrigin={menuNotifications.anchorOrigin}
              keepMounted
              transformOrigin={menuNotifications.transformOrigin}
              open={Boolean(anchorElNotifications)}
              onClose={() => setAnchorElNotifications(null)}
            >
              <MenuItem onClick={() => setAnchorElNotifications(null)}>
                <Typography textAlign="center">Notificacoes</Typography>
              </MenuItem>
            </Menu>
            <Tooltip title="Ver opções">
              <IconButton
                onClick={e => setAnchorElUser(e.currentTarget)}
                sx={{ p: 0 }}
              >
                <Avatar alt={user.firstName} src={user.avatar} />
              </IconButton>
            </Tooltip>

            <Menu
              sx={menuUser.sx}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={menuUser.anchorOrigin}
              keepMounted
              transformOrigin={menuUser.transformOrigin}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
            >
              {avatarMenuOptions.map(option => (
                <MenuItem key={option.text} onClick={option.action}>
                  <Typography textAlign="center">{option.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Box>
    );
  } else if (layoutType === 'mobile') {
    return (
      <Box sx={box}>
        {title}
        <Box sx={menuBoxContainer}>
          <Box sx={menuBox}>
            <Tooltip title="Ver notificações">
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={e => setAnchorElNotifications(e.currentTarget)}
                sx={notificationIconButton}
              >
                <Badge badgeContent={17} color="success">
                  <NotificationsOutlined />
                </Badge>
              </IconButton>
            </Tooltip>
            <Menu
              sx={menuNotifications.sx}
              id="menu-appbar"
              anchorEl={anchorElNotifications}
              anchorOrigin={menuNotifications.anchorOrigin}
              keepMounted
              transformOrigin={menuNotifications.transformOrigin}
              open={Boolean(anchorElNotifications)}
              onClose={() => setAnchorElNotifications(null)}
            >
              <MenuItem onClick={() => setAnchorElNotifications(null)}>
                <Typography textAlign="center">Notificacoes</Typography>
              </MenuItem>
            </Menu>
            <Tooltip title="Ver opções">
              <IconButton
                onClick={e => setAnchorElUser(e.currentTarget)}
                sx={{ p: 0 }}
              >
                <Avatar alt={user.firstName} src={user.avatar} />
              </IconButton>
            </Tooltip>

            <Menu
              sx={menuUser.sx}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={menuUser.anchorOrigin}
              keepMounted
              transformOrigin={menuUser.transformOrigin}
              open={Boolean(anchorElUser)}
              onClose={() => setAnchorElUser(null)}
            >
              {avatarMenuOptions.map(option => (
                <MenuItem key={option.text} onClick={option.action}>
                  <Typography textAlign="center">{option.text}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Toolbar;
