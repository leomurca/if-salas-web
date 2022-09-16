import { Container } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';

import Login from '../screens/Login';
import Register from '../screens/Register';
import UnauthenticatedHome from '../screens/UnauthenticatedHome';

import styles from './styles';

function UnauthenticatedApp() {
  const { container } = styles['desktop'];
  return (
    <Container disableGutters maxWidth="false" sx={container}>
      <Routes>
        <Route path="/" element={<UnauthenticatedHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default UnauthenticatedApp;
