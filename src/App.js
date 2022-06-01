import { lazy } from 'react';
import { Container } from '@mui/material';
import { useUser } from './context/user';

const AuthenticatedApp = lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = lazy(() => import('./UnauthenticatedApp'));

function App() {
  const user = useUser();

  return (
    <Container maxWidth="false" sx={container}>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
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

export default App;
