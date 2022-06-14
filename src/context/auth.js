import { createContext, useContext, useEffect, useState } from 'react';
import { sleep } from '../utils/sleep';

const getUser = shouldFail =>
  sleep(3000).then(() => {
    if (shouldFail) {
      return { message: 'Falha na autenticação' };
    } else {
      return {
        id: '0021564',
        username: 'leonardomurca',
        name: 'Leonardo',
        lastName: 'Murça',
        token: 'skdfb9458hnsdfsif4w38r9234ry98423',
      };
    }
  });

const AuthContext = createContext();

function AuthProvider(props) {
  const [state, setState] = useState({
    status: 'idle',
    user: null,
    error: null,
  });

  useEffect(() => {
    async function bootstrapUser() {
      const user = window.localStorage.getItem('$USER');
      if (user) {
        setState({ status: 'success', user: JSON.parse(user), error: null });
      }
    }
    bootstrapUser();
  }, []);

  const login = (email, password) => {
    setState({ ...state, status: 'pending' });
    let shouldFail = email !== 'leo@gmail.com' && password !== '#leo1234';

    return getUser(shouldFail).then(data => {
      if (shouldFail) {
        return setState({ status: 'error', user: null, error: data });
      } else {
        window.localStorage.setItem('$USER', JSON.stringify(data));
        return setState({ status: 'success', user: data, error: null });
      }
    });
  };

  const logout = () => {
    setState({ status: 'success', user: null, error: null });
    window.localStorage.clear();
  };

  return <AuthContext.Provider value={{ state, login, logout }} {...props} />;
}

function useAuthState() {
  const { state, login, logout } = useContext(AuthContext);
  const isPending = state.status === 'pending';
  const isError = state.status === 'error';
  const isSuccess = state.status === 'success';
  const isAuthenticated = state.user && isSuccess;

  return {
    user: state.user,
    error: state.error,
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
    login,
    logout,
  };
}

export { AuthProvider, useAuthState };
