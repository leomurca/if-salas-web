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
    console.log('Get classrooms ' + userId);
    return {
      data: allClassrooms,
    };
  });

const getClassroomById = classId =>
  sleep(3000).then(() => {
    console.log('Get classroom by id ' + classId);
    return {
      data: allClassrooms.filter(c => c.id === classId)[0],
    };
  });

const getClassroomAnnouncementsById = classId =>
  sleep(3000).then(() => {
    console.log('Get classroon announcements by id ' + classId);
    return {
      data: allClassroomAnnouncements.filter(c => c.classroom.id === classId),
    };
  });

const getUpcomingAssignmentsByClassId = classId =>
  sleep(3000).then(() => {
    console.log('Getting upcoming assignments by class id ' + classId);
    return {
      data: allUpcomingAssignments.filter(
        a => a.classrooms.filter(c => c.id === classId)[0]
      ),
    };
  });

const getAllAssignments = userId =>
  sleep(4000).then(() => {
    console.log('Getting all assignments ' + userId);
    return {
      data: allAssignments,
    };
  });

const getAssignmentsByClassId = classId =>
  sleep(4000).then(() => {
    console.log('Getting assignments by class id ' + classId);
    return {
      data: allAssignments.filter(a => a.classrooms[0].id === classId),
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
  getAllAssignments,
  getAssignmentsByClassId,
  getClassroomAnnouncementsById,
  getUpcomingAssignmentsByClassId,
  getFaq,
  getUser,
};
