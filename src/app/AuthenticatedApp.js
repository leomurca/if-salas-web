import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { Container } from '@mui/system';
import { useUser } from '../context/user';
import { useAuthState } from '../context/auth';

import MainMenu from '../components/MainMenu';
import Home from '../screens/Home';
import Information from '../screens/Information';
import Calendar from '../screens/Calendar';
import useLayoutType from '../hooks/useLayoutType';
import Toolbar from '../components/Toolbar';
import Classroom from '../screens/Classroom';
import Assignment from '../screens/Assignment';
import Profile from '../screens/Profile';

import { avatarMenuOptions, menuOptions } from './data';

import styles from './styles';

function AuthenticatedApp() {
  const navigate = useNavigate();
  const { state } = useUser();
  const { logout } = useAuthState();
  const layoutType = useLayoutType();
  const { container, toolbar } = styles[layoutType];

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
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/info" element={<Information />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/class">
              <Route path=":id" element={<Classroom />} />
            </Route>
            <Route path="/assignment">
              <Route path=":id" element={<Assignment />} />
            </Route>
            <Route path="/login" element={<Navigate to="/home" />} />
            <Route path="/register" element={<Navigate to="/home" />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </Container>
      </>
    )
  );
}

export default AuthenticatedApp;
