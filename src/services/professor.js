import { ProfessorApi } from '../utils/mocks/api';

export default class ProfessorService {
  constructor(user) {
    this.user = user;
  }

  fetchClassrooms = () => ProfessorApi.getClassrooms(this.user.id);

  fetchClassroomById = classId => ProfessorApi.getClassroomById(classId);

  fetchAssignmentsByClassId = classId =>
    ProfessorApi.getAssignmentsByClassId(classId);

  fetchAssignmentsToReview = () =>
    ProfessorApi.getAssignmentsToReview(this.user.id);

  fetchClassroomAnnouncements = classId =>
    ProfessorApi.getClassroomAnnouncementsById(classId);

  fetchPeopleByClassId = classId => ProfessorApi.getPeopleByClassId(classId);

  fetchGradesByClassId = classId => ProfessorApi.getGradesByClassId(classId);
}
