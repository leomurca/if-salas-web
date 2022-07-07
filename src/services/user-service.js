import { sleep } from '../utils/sleep';
import { allClassrooms, allAssignments, faq } from './mocks';

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

export { getClassrooms, getClassroomById, getAssignments, getFaq };
