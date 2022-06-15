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

function Toolbar({ title, layoutType }) {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNotifications, setAnchorElNotifications] = useState(null);

  console.log(layoutType);

  switch (layoutType) {
    case 'desktop':
      return (
        <Box sx={box}>
          {title}
          <Box sx={{ flexGrow: 0 }}>
            <Box
              sx={{
                display: 'flex',
                gap: '20px',
              }}
            >
              <Tooltip title="Ver notificações">
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                  onClick={e => setAnchorElNotifications(e.currentTarget)}
                  sx={{ p: 2 }}
                >
                  <Badge badgeContent={17} color="success">
                    <NotificationsOutlined />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElNotifications}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
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
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={() => setAnchorElUser(null)}
              >
                <MenuItem onClick={() => setAnchorElUser(null)}>
                  <Typography textAlign="center">Meu perfil</Typography>
                </MenuItem>
                <MenuItem onClick={() => setAnchorElUser(null)}>
                  <Typography textAlign="center">Sair</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Box>
      );

    case 'mobile':
      return (
        <Box sx={mobileBox}>
          {title}
          <Box sx={{ flexGrow: 0 }}>
            <Box
              sx={{
                display: 'flex',
                gap: '20px',
              }}
            >
              <Tooltip title="Ver notificações">
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                  onClick={e => setAnchorElNotifications(e.currentTarget)}
                  sx={{ p: 2 }}
                >
                  <Badge badgeContent={17} color="success">
                    <NotificationsOutlined />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElNotifications}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
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
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={() => setAnchorElUser(null)}
              >
                <MenuItem onClick={() => setAnchorElUser(null)}>
                  <Typography textAlign="center">Meu perfil</Typography>
                </MenuItem>
                <MenuItem onClick={() => setAnchorElUser(null)}>
                  <Typography textAlign="center">Sair</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Box>
      );

    default:
      return null;
  }
}

const box = {
  display: 'flex',
  marginLeft: '230px',
  height: '130px',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 70px',
  borderBottom: '3px solid #CFCFCF',
};

const mobileBox = {
  ...box,
  marginLeft: 0,
  height: '70px',
  padding: '0 10px',
  justifyContent: 'space-around',
};

export default Toolbar;
