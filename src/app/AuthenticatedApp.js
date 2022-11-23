import { lazy } from 'react';
import { useUser } from '../context/user';

const ProfessorApp = lazy(() => import('./ProfessorApp'));
const StudentApp = lazy(() => import('./StudentApp'));

function AuthenticatedApp() {
  const { state } = useUser();

  return state && state.user && state.user.role === 'STUDENT' ? (
    <StudentApp user={state.user} pathname={state.pathname} />
  ) : (
    <ProfessorApp />
  );
}

export default AuthenticatedApp;
