import { useUser } from '../../context/user';

function Home() {
  const { isPending, classrooms } = useUser();

  return (
    <div>
      <h2>Página inicial</h2>
      <button onClick={classrooms}>Get classrooms</button>
      {isPending && <h1>Loading...</h1>}
    </div>
  );
}

export default Home;
