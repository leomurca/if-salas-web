import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useParams } from 'react-router-dom';
import { useUser } from '../../context/user';
import useLayoutType from '../../hooks/useLayoutType';
import View from './View';

function Assignment() {
  const params = useParams();
  const layoutType = useLayoutType();
  const { fetchAssignmentById } = useUser();
  const [assignment, setAssignment] = useState(null);
  const dropzone = useDropzone({ maxFiles: 5 });

  useEffect(() => {
    async function getAssignmentById(assignmentId) {
      document.title = 'Carregando...';
      const result = await fetchAssignmentById(assignmentId);
      setAssignment(result.data);
    }

    function updateDocumentTitle() {
      if (assignment !== null) {
        document.title = assignment.title;
      }
    }

    getAssignmentById(params.id);
    updateDocumentTitle();
  }, [params, fetchAssignmentById, assignment]);

  return (
    <View assignment={assignment} dropzone={dropzone} layoutType={layoutType} />
  );
}

export default Assignment;
