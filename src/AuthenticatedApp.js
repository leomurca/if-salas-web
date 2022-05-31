import { useAuthState } from './context/auth';

function AuthenticatedApp() {
  const { logout, isPending } = useAuthState();

  return (
    <div>
      <h2>You're logged in!</h2>
      <button onClick={logout}>Logout</button>
      {isPending && <h1>Loading...</h1>}
    </div>
  );
}

export default AuthenticatedApp;
