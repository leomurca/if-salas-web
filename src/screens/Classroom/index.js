import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../../context/user';

function Classroom() {
  const params = useParams();
  const { fetchClassroomById } = useUser();
  const [classroom, setClassroom] = useState(null);

  useEffect(() => {
    async function getClassroomById(classId) {
      document.title = 'Carregando...';
      const result = await fetchClassroomById(classId);
      setClassroom(result.data);
    }

    getClassroomById(params.id);
  }, [fetchClassroomById, params]);

  useEffect(() => {
    if (classroom !== null) {
      document.title = classroom.name;
    }
  }, [classroom]);

  return (
    <div>
      {classroom === null ? <h1>Loading...</h1> : <h1>{classroom.name}</h1>}
    </div>
  );
}

export default Classroom;
