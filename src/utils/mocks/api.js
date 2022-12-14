import { sleep } from '../sleep';
import {
  allClassrooms,
  allAssignments,
  faq,
  studentUser,
  professorUser,
  authFailure,
  allClassroomAnnouncements,
  allUpcomingAssignments,
  allPeople,
  professorClassrooms,
  assignmentsToReview,
} from './responses';

const CommonApi = {
  getUser: (email, password) =>
    sleep(300).then(() => {
      let user;
      if (email === 'p@test.com' && password === 'p123') {
        user = professorUser;
      } else if (email === 's@test.com' && password === 's123') {
        user = studentUser;
      } else {
        return authFailure;
      }
      window.localStorage.setItem('$USER', JSON.stringify(user));
      return user;
    }),

  registerUser: data =>
    sleep(300).then(() => {
      let userData;
      if (data.email === 'p@test.com') {
        userData = { ...data, role: 'PROFESSOR' };
      } else if (data.email === 's@test.com') {
        userData = { ...data, role: 'STUDENT' };
      } else {
        return authFailure;
      }
      window.localStorage.setItem('$USER', JSON.stringify(data));
      return userData;
    }),

  getClassroomAnnouncementsById: classId =>
    sleep(300).then(() => {
      console.log('Get classroon announcements by id ' + classId);
      return {
        data: allClassroomAnnouncements.filter(c => c.classroom.id === classId),
      };
    }),
  getClassroomById: classId =>
    sleep(300).then(() => {
      console.log('Get classroom by id ' + classId);
      return {
        data: allClassrooms.filter(c => c.id === classId)[0],
      };
    }),
  getAssignmentsByClassId: classId =>
    sleep(300).then(() => {
      console.log('Getting assignments by class id ' + classId);
      return {
        data: allAssignments.filter(a => a.classrooms[0].id === classId),
      };
    }),

  getPeopleByClassId: classId =>
    sleep(400).then(() => {
      console.log('Getting people by class id ' + classId);
      return {
        data: allPeople.filter(p => p.classes[0].id === classId),
      };
    }),
};

const StudentApi = {
  ...CommonApi,
  getClassrooms: userId =>
    sleep(300).then(() => {
      console.log('Get classrooms ' + userId);
      return {
        data: allClassrooms,
      };
    }),

  getUpcomingAssignmentsByClassId: classId =>
    sleep(300).then(() => {
      console.log('Getting upcoming assignments by class id ' + classId);
      return {
        data: allUpcomingAssignments.filter(
          a => a.classrooms.filter(c => c.id === classId)[0]
        ),
      };
    }),

  getAllAssignments: userId =>
    sleep(400).then(() => {
      console.log('Getting all assignments ' + userId);
      return {
        data: allAssignments,
      };
    }),

  getAssignmentById: assignmentId =>
    sleep(400).then(() => {
      console.log('Getting assignment by id ' + assignmentId);
      return {
        data: allAssignments.filter(a => a.id === assignmentId)[0],
      };
    }),

  getFaq: () =>
    sleep(300).then(() => {
      console.log('Fetching FAQ...');
      return {
        data: faq,
      };
    }),
};

const ProfessorApi = {
  ...CommonApi,
  getClassrooms: userId =>
    sleep(300).then(() => {
      console.log('Get classrooms ' + userId);
      return {
        data: professorClassrooms,
      };
    }),
  getAssignmentsToReview: userId =>
    sleep(400).then(() => {
      console.log('Getting assignments to review' + userId);
      return {
        data: assignmentsToReview,
      };
    }),
};

export { StudentApi, ProfessorApi, CommonApi };
