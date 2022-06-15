import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import {
  CalendarMonth,
  CalendarMonthOutlined,
  Home as HomeIcon,
  HomeOutlined,
  Info,
  InfoOutlined,
} from '@mui/icons-material';
import MainMenu from './components/MainMenu';
import Home from './screens/Home';
import Information from './screens/Information';
import Calendar from './screens/Calendar';
import { Container } from '@mui/system';
import useLayoutType from './hooks/useLayoutType';
import Toolbar from './components/Toolbar';
import { useUser } from './context/user';

function AuthenticatedApp() {
  const { state } = useUser();
  const { pathname } = useLocation();
  const layoutType = useLayoutType();

  return (
    <>
      <Toolbar
        title={
          <p style={{ fontSize: layoutType === 'desktop' ? '30px' : '20px' }}>
            Olá, <strong>{state.user.name}</strong> 👋
          </p>
        }
        layoutType={layoutType}
      />
      <Container
        maxWidth="false"
        sx={layoutType === 'desktop' ? container : mobileContainer}
      >
        <MainMenu options={menuOptions(pathname)} layoutType={layoutType} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/info" element={<Information />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/login" element={<Navigate to="/home" />} />
        </Routes>
      </Container>
    </>
  );
}

const container = {
  height: '100vh',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'primary.mainBackground',
};

const mobileContainer = {
  ...container,
  flexDirection: 'column-reverse',
};

const menuOptions = activePath => [
  {
    id: 0,
    text: 'Página Inicial',
    selectedIcon: <HomeIcon />,
    unselectedIcon: <HomeOutlined />,
    pathname: '/home',
    isActive: activePath === '/home' || activePath === '/login',
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

export default AuthenticatedApp;
