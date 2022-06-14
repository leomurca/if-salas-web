import { useAuthState } from '../../context/auth';
import { useUser } from '../../context/user';

function Home() {
  const { isPending, classrooms } = useUser();
  const { logout } = useAuthState();

  return (
    <div>
      <h2>Página inicial</h2>
      <button onClick={classrooms}>Get classrooms</button>
      <button onClick={logout}>Logout</button>
      {isPending && <h1>Loading...</h1>}
    </div>
  );
}

export default Home;
