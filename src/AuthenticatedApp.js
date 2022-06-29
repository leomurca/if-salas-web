import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
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
import { useAuthState } from './context/auth';
import Classroom from './screens/Classroom';

function AuthenticatedApp() {
  const navigate = useNavigate();
  const { state } = useUser();
  const { logout } = useAuthState();
  const layoutType = useLayoutType();

  const avatarMenuOptions = [
    {
      text: 'Meu Perfil',
      action: () => navigate('/profile', { replace: true }),
    },
    {
      text: 'Sair',
      action: logout,
    },
  ];

  return (
    state &&
    state.user && (
      <>
        <Toolbar
          title={
            <p style={{ fontSize: layoutType === 'desktop' ? '30px' : '20px' }}>
              Olá, <strong>{state.user.name}</strong> 👋
            </p>
          }
          layoutType={layoutType}
          avatarMenuOptions={avatarMenuOptions}
        />
        <Container
          maxWidth="false"
          sx={layoutType === 'desktop' ? container : mobileContainer}
        >
          <MainMenu
            options={menuOptions(state.pathname)}
            layoutType={layoutType}
          />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/info" element={<Information />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/class">
              <Route path=":id" element={<Classroom />} />
            </Route>
            <Route path="/login" element={<Navigate to="/home" />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </Container>
      </>
    )
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
  flexDirection: 'column',
  justifyContent: 'start',
};

const menuOptions = activePath => [
  {
    id: 0,
    text: 'Página Inicial',
    selectedIcon: <HomeIcon />,
    unselectedIcon: <HomeOutlined />,
    pathname: '/home',
    isActive:
      activePath === '/home' ||
      activePath === '/login' ||
      activePath === '/' ||
      activePath.indexOf('class') !== -1,
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
