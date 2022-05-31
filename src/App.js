import { lazy } from 'react';
import { useUser } from './context/user';

const AuthenticatedApp = lazy(() => import('./AuthenticatedApp'));
const UnauthenticatedApp = lazy(() => import('./UnauthenticatedApp'));

function App() {
  const user = useUser();

  return <div>{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</div>;
}

export default App;
