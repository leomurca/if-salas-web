import { useParams } from 'react-router-dom';

function Assignment() {
  const params = useParams();

  return <h1>Assignment id: {params.id}</h1>;
}

export default Assignment;
