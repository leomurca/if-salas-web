import { useAuthState } from './context/auth';

function UnauthenticatedApp() {
  const { login, isPending } = useAuthState();

  return (
    <div>
      <h2>Please, log in!</h2>
      <button onClick={login}>Log in</button>
      {isPending && <h1>Loading...</h1>}
    </div>
  );
}

export default UnauthenticatedApp;
