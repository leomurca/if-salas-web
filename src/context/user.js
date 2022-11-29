import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { UserServiceProvider } from '../services/user-service-provider';
import { useAuthState } from './auth';

const UserContext = createContext();

function UserProvider(props) {
  const { user } = useAuthState();
  const { pathname } = useLocation();
  const [userService, setUserService] = useState(null);
  const [state, setState] = useState({
    user: null,
    error: null,
    pathname: '',
  });

  useEffect(() => {
    setState({ user, pathname });

    async function initUserService() {
      if (user) {
        const instance = await UserServiceProvider.getInstance(user);
        setUserService(instance);
      }
    }
    initUserService();
  }, [user, pathname]);

  return <UserContext.Provider value={{ state, userService }} {...props} />;
}

function useUser() {
  const { state, userService } = useContext(UserContext);

  return { state, userService };
}

export { UserProvider, useUser };
