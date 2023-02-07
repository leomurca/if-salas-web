import { StudentApi } from '../utils/mocks/api';

export default class StudentService {
  constructor(user) {
    this.user = user;
  }

  fetchClassrooms = () => StudentApi.getClassrooms(this.user.id);

  fetchAllAssignments = () => StudentApi.getAllAssignments(this.user.id);

  fetchAssignmentById = assignmentId =>
    StudentApi.getAssignmentById(assignmentId);

  fetchAssignmentsByClassId = classId =>
    StudentApi.getAssignmentsByClassId(classId);

  fetchClassroomById = classId => StudentApi.getClassroomById(classId);

  fetchFAQ = () => StudentApi.getFaq();

  fetchClassroomAnnouncements = classId =>
    StudentApi.getClassroomAnnouncementsById(classId);

  fetchUpcomingAssignmentsByClassId = classId =>
    StudentApi.getUpcomingAssignmentsByClassId(classId);

  fetchPeopleByClassId = classId => StudentApi.getPeopleByClassId(classId);
}
