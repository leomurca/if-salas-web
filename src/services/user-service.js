import { sleep } from '../utils/sleep';
import {
  allClassrooms,
  allAssignments,
  faq,
  user,
  authFailure,
  allClassroomAnnouncements,
  allUpcomingAssignments,
} from './mocks';

const getClassrooms = userId =>
  sleep(3000).then(() => {
    console.log('userId: ' + userId);
    return {
      data: allClassrooms,
    };
  });

const getClassroomById = classId =>
  sleep(3000).then(() => {
    console.log('classId ' + classId);
    return {
      data: allClassrooms.filter(c => c.id === classId)[0],
    };
  });

const getClassroomAnnouncementsById = classId =>
  sleep(3000).then(() => {
    console.log('classId ' + classId);
    return {
      data: allClassroomAnnouncements.filter(c => c.classroom.id === classId),
    };
  });

const getUpcomingAssignmentsById = classId =>
  sleep(3000).then(() => {
    console.log('classId ' + classId);
    return {
      data: allUpcomingAssignments.filter(a =>
        a.classrooms.filter(c => c.id === classId)
      ),
    };
  });

const getAssignments = userId =>
  sleep(4000).then(() => {
    console.log('userId: ' + userId);
    return {
      data: allAssignments,
    };
  });

const getFaq = () =>
  sleep(2000).then(() => {
    console.log('Fetching FAQ...');
    return {
      data: faq,
    };
  });

const getUser = shouldFail =>
  sleep(3000).then(() => {
    if (shouldFail) {
      return authFailure;
    } else {
      window.localStorage.setItem('$USER', JSON.stringify(user));
      return user;
    }
  });

export {
  getClassrooms,
  getClassroomById,
  getAssignments,
  getClassroomAnnouncementsById,
  getUpcomingAssignmentsById,
  getFaq,
  getUser,
};
