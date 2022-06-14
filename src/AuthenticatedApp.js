import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import {
  CalendarMonth,
  CalendarMonthOutlined,
  Home as HomeIcon,
  HomeOutlined,
  Info,
  InfoOutlined,
} from '@mui/icons-material';
import MainDrawer from './components/MainDrawer';
import Home from './screens/Home';
import Information from './screens/Information';
import Calendar from './screens/Calendar';

function AuthenticatedApp() {
  const { pathname } = useLocation();
  return (
    <>
      <MainDrawer options={menuOptions(pathname)} />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/info" element={<Information />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/login" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}

const menuOptions = activePath => [
  {
    text: 'Página Inicial',
    selectedIcon: <HomeIcon />,
    unselectedIcon: <HomeOutlined />,
    pathname: '/home',
    isActive: activePath === '/home',
  },
  {
    text: 'Informações',
    selectedIcon: <Info />,
    unselectedIcon: <InfoOutlined />,
    pathname: '/info',
    isActive: activePath === '/info',
  },
  {
    text: 'Calendário',
    selectedIcon: <CalendarMonth />,
    unselectedIcon: <CalendarMonthOutlined />,
    pathname: '/calendar',
    isActive: activePath === '/calendar',
  },
];

export default AuthenticatedApp;
