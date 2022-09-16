import { sleep } from '../utils/sleep';
import {
  allClassrooms,
  allAssignments,
  faq,
  user,
  authFailure,
  allClassroomAnnouncements,
  allUpcomingAssignments,
  allPeople,
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
      data: allUpcomingAssignments.filter(a =>
        a.classrooms.filter(c => c.id === classId)
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

const getAssignmentById = assignmentId =>
  sleep(4000).then(() => {
    console.log('Getting assignment by id ' + assignmentId);
    return {
      data: allAssignments.filter(a => a.id === assignmentId)[0],
    };
  });

const getAssignmentsByClassId = classId =>
  sleep(3000).then(() => {
    console.log('Getting assignments by class id ' + classId);
    return {
      data: allAssignments.filter(a => a.classrooms[0].id === classId),
    };
  });

const getPeopleByClassId = classId =>
  sleep(4000).then(() => {
    console.log('Getting people by class id ' + classId);
    return {
      data: allPeople.filter(p => p.classes[0].id === classId),
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

const registerUser = (data, shouldFail) =>
  sleep(3000).then(() => {
    if (shouldFail) {
      return authFailure;
    } else {
      console.log(data);
      window.localStorage.setItem('$USER', JSON.stringify(data));
      return data;
    }
  });

export {
  getClassrooms,
  getClassroomById,
  getAllAssignments,
  getAssignmentById,
  getAssignmentsByClassId,
  getClassroomAnnouncementsById,
  getUpcomingAssignmentsByClassId,
  getPeopleByClassId,
  getFaq,
  getUser,
  registerUser,
};
