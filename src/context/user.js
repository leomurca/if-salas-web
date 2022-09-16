import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthState } from './auth';
import {
  getAllAssignments,
  getAssignmentById,
  getAssignmentsByClassId,
  getClassroomAnnouncementsById,
  getClassroomById,
  getClassrooms,
  getFaq,
  getPeopleByClassId,
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

  const fetchAssignmentById = assignmentId => getAssignmentById(assignmentId);

  const fetchAssignmentsByClassId = classId => getAssignmentsByClassId(classId);

  const fetchClassroomById = classId => getClassroomById(classId);

  const fetchFAQ = () => getFaq();

  const fetchClassroomAnnouncements = classId =>
    getClassroomAnnouncementsById(classId);

  const fetchUpcomingAssignmentsByClassId = classId =>
    getUpcomingAssignmentsByClassId(classId);

  const fetchPeopleByClassId = classId => getPeopleByClassId(classId);

  return (
    <UserContext.Provider
      value={{
        state,
        fetchClassrooms,
        fetchAllAssignments,
        fetchAssignmentById,
        fetchAssignmentsByClassId,
        fetchClassroomById,
        fetchFAQ,
        fetchClassroomAnnouncements,
        fetchUpcomingAssignmentsByClassId,
        fetchPeopleByClassId,
      }}
      {...props}
    />
  );
}

function useUser() {
  const {
    state,
    fetchClassrooms,
    fetchAssignmentById,
    fetchAllAssignments,
    fetchAssignmentsByClassId,
    fetchClassroomById,
    fetchFAQ,
    fetchClassroomAnnouncements,
    fetchUpcomingAssignmentsByClassId,
    fetchPeopleByClassId,
  } = useContext(UserContext);

  return {
    state,
    fetchClassrooms,
    fetchAllAssignments,
    fetchAssignmentById,
    fetchAssignmentsByClassId,
    fetchClassroomById,
    fetchFAQ,
    fetchClassroomAnnouncements,
    fetchUpcomingAssignmentsByClassId,
    fetchPeopleByClassId,
  };
}

export { UserProvider, useUser };
