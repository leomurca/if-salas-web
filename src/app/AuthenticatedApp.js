import { lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/system';
import { useAuthState } from '../context/auth';
import { useUser } from '../context/user';

import MainMenu from '../components/MainMenu';
import useLayoutType from '../hooks/useLayoutType';
import Toolbar from '../components/Toolbar';

import { avatarMenuOptions, menuOptions } from './data';

import styles from './styles';

const StudentRoutes = lazy(() => import('./StudentRoutes'));
const ProfessorRoutes = lazy(() => import('./ProfessorRoutes'));

function AuthenticatedApp() {
  const navigate = useNavigate();
  const { state } = useUser();
  const { logout } = useAuthState();
  const layoutType = useLayoutType();
  const { container, toolbar } = styles[layoutType];

  const routeResolver = role => {
    switch (role) {
      case 'STUDENT':
        return <StudentRoutes />;
      case 'PROFESSOR':
        return <ProfessorRoutes />;
      default:
        return null;
    }
  };

  return (
    state &&
    state.user && (
      <>
        <Toolbar
          title={
            <p style={toolbar}>
              Olá, <strong>{state.user.firstName}</strong> 👋
            </p>
          }
          layoutType={layoutType}
          avatarMenuOptions={avatarMenuOptions(navigate, logout)}
          user={state.user}
        />
        <Container maxWidth="false" sx={container}>
          <MainMenu
            options={menuOptions(state.pathname)}
            layoutType={layoutType}
          />
          {routeResolver(state.user.role)}
        </Container>
      </>
    )
  );
}

export default AuthenticatedApp;
