import { lazy, Suspense } from 'react';
import { Container } from '@mui/material';
import { useAuthState } from './context/auth';

import LoadingIndicator from './components/LoadingIndicator';

const AuthenticatedApp = lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = lazy(() => import('./UnauthenticatedApp'));

function App() {
  const { isAuthenticated } = useAuthState();

  return (
    <Suspense fallback={<LoadingIndicator isLoading />}>
      <Container maxWidth="false" sx={container}>
        {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </Container>
    </Suspense>
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
