import {
  CalendarMonth,
  CalendarMonthOutlined,
  Home,
  HomeOutlined,
  Info,
  InfoOutlined,
} from '@mui/icons-material';

const avatarMenuOptions = (navigate, logout) => [
  {
    text: 'Meu Perfil',
    action: () => navigate('/profile'),
  },
  {
    text: 'Sair',
    action: logout,
  },
];

const menuOptions = activePath => [
  {
    id: 0,
    text: 'Página Inicial',
    selectedIcon: <Home />,
    unselectedIcon: <HomeOutlined />,
    pathname: '/home',
    isActive:
      activePath === '/home' ||
      activePath === '/login' ||
      activePath === '/register' ||
      activePath === '/profile' ||
      activePath === '/' ||
      activePath.indexOf('class') !== -1 ||
      activePath.indexOf('assignment') !== -1,
  },
  {
    id: 1,
    text: 'Informações',
    selectedIcon: <Info />,
    unselectedIcon: <InfoOutlined />,
    pathname: '/info',
    isActive: activePath === '/info',
  },
  {
    id: 2,
    text: 'Calendário',
    selectedIcon: <CalendarMonth />,
    unselectedIcon: <CalendarMonthOutlined />,
    pathname: '/calendar',
    isActive: activePath === '/calendar',
  },
];

export { menuOptions, avatarMenuOptions };
