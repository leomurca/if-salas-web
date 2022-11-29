export const UserServiceProvider = (function () {
  let instance;

  async function createInstance(user) {
    if (user.role === 'STUDENT') {
      const service = await import('../services/student-service');
      if (service) {
        return new service.default(user);
      }
    } else if (user.role === 'PROFESSOR') {
      const service = await import('../services/professor-service');
      if (service) {
        return new service.default(user);
      }
    } else {
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
