export const UserServiceProvider = (function () {
  let instance;

  async function createInstance(user) {
    switch (user.role) {
      case 'STUDENT':
        const studentService = await import('./student');
        if (studentService) {
          return new studentService.default(user);
        }
        break;
      case 'PROFESSOR':
        const professorService = await import('./professor');
        if (professorService) {
          return new professorService.default(user);
        }
        break;
      default:
        throw new Error('Invalid Role!');
    }
  }

  return {
    getInstance: function (user) {
      if (!instance) {
        instance = createInstance(user);
      }
      return instance;
    },
  };
})();
