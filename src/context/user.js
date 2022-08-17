import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthState } from './auth';
import {
  getAllAssignments,
  getAssignmentsByClassId,
  getClassroomAnnouncementsById,
  getClassroomById,
  getClassrooms,
  getFaq,
  getUpcomingAssignmentsByClassId,
} from '../services/user-service';

const UserContext = createContext();

function UserProvider(props) {
  const { user } = useAuthState();
  const { pathname } = useLocation();
  const [state, setState] = useState({
    user: null,
    error: null,
    pathname: '',
  });

  useEffect(() => {
    setState({ user, pathname });
  }, [user, pathname]);

  const fetchClassrooms = () => getClassrooms(user.id);

  const fetchAllAssignments = () => getAllAssignments(user.id);

  const fetchAssignmentsByClassId = classId => getAssignmentsByClassId(classId);

  const fetchClassroomById = classId => getClassroomById(classId);

  const fetchFAQ = () => getFaq();

  const fetchClassroomAnnouncements = classId =>
    getClassroomAnnouncementsById(classId);

  const fetchUpcomingAssignmentsByClassId = classId =>
    getUpcomingAssignmentsByClassId(classId);

  return (
    <UserContext.Provider
      value={{
        state,
        fetchClassrooms,
        fetchAllAssignments,
        fetchAssignmentsByClassId,
        fetchClassroomById,
        fetchFAQ,
        fetchClassroomAnnouncements,
        fetchUpcomingAssignmentsByClassId,
      }}
      {...props}
    />
  );
}

function useUser() {
  const {
    state,
    fetchClassrooms,
    fetchAllAssignments,
    fetchAssignmentsByClassId,
    fetchClassroomById,
    fetchFAQ,
    fetchClassroomAnnouncements,
    fetchUpcomingAssignmentsByClassId,
  } = useContext(UserContext);

  return {
    state,
    fetchClassrooms,
    fetchAllAssignments,
    fetchAssignmentsByClassId,
    fetchClassroomById,
    fetchFAQ,
    fetchClassroomAnnouncements,
    fetchUpcomingAssignmentsByClassId,
  };
}

export { UserProvider, useUser };
