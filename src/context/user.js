import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthState } from './auth';
import {
  getAssignments,
  getClassroomAnnouncementsById,
  getClassroomById,
  getClassrooms,
  getFaq,
  getUpcomingAssignmentsById,
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

  const fetchAssignments = () => getAssignments(user.id);

  const fetchClassroomById = classId => getClassroomById(classId);

  const fetchFAQ = () => getFaq();

  const fetchClassroomAnnouncements = classId =>
    getClassroomAnnouncementsById(classId);

  const fetchUpcomingAssignments = classId =>
    getUpcomingAssignmentsById(classId);

  return (
    <UserContext.Provider
      value={{
        state,
        fetchClassrooms,
        fetchAssignments,
        fetchClassroomById,
        fetchFAQ,
        fetchClassroomAnnouncements,
        fetchUpcomingAssignments,
      }}
      {...props}
    />
  );
}

function useUser() {
  const {
    state,
    fetchClassrooms,
    fetchAssignments,
    fetchClassroomById,
    fetchFAQ,
    fetchClassroomAnnouncements,
    fetchUpcomingAssignments,
  } = useContext(UserContext);

  return {
    state,
    fetchClassrooms,
    fetchAssignments,
    fetchClassroomById,
    fetchFAQ,
    fetchClassroomAnnouncements,
    fetchUpcomingAssignments,
  };
}

export { UserProvider, useUser };
