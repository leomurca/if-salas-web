import { Container } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';

import Login from '../screens/Login';
import Register from '../screens/Register';
import UnauthenticatedHome from '../screens/UnauthenticatedHome';

function UnauthenticatedApp() {
  return (
    <Container maxWidth="false" sx={container}>
      <Routes>
        <Route path="/" element={<UnauthenticatedHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
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

export default UnauthenticatedApp;
