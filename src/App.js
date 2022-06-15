import { lazy, Suspense } from 'react';
import { useAuthState } from './context/auth';

import LoadingIndicator from './components/LoadingIndicator';

const AuthenticatedApp = lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = lazy(() => import('./UnauthenticatedApp'));

function App() {
  const { isAuthenticated } = useAuthState();

  return (
    <Suspense fallback={<LoadingIndicator isLoading />}>
      {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </Suspense>
  );
}

export default App;
