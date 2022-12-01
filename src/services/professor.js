import { ProfessorApi } from '../utils/mocks/api';

export default class ProfessorService {
  constructor(user) {
    this.user = user;
  }

  fetchClassrooms = () => ProfessorApi.getClassrooms(this.user.id);

  fetchAssignmentsToReview = () =>
    ProfessorApi.getAssignmentsToReview(this.user.id);
}
