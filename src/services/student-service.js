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
} from './user-service';

export default class StudentService {
  constructor(user) {
    this.user = user;
  }

  fetchClassrooms = () => getClassrooms(this.user.id);

  fetchAllAssignments = () => getAllAssignments(this.user.id);

  fetchAssignmentById = assignmentId => getAssignmentById(assignmentId);

  fetchAssignmentsByClassId = classId => getAssignmentsByClassId(classId);

  fetchClassroomById = classId => getClassroomById(classId);

  fetchFAQ = () => getFaq();

  fetchClassroomAnnouncements = classId =>
    getClassroomAnnouncementsById(classId);

  fetchUpcomingAssignmentsByClassId = classId =>
    getUpcomingAssignmentsByClassId(classId);

  fetchPeopleByClassId = classId => getPeopleByClassId(classId);
}
