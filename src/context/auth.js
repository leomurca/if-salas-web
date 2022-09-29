import { createContext, useContext, useEffect, useState } from 'react';
import { getUser, registerUser } from '../services/user-service';

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

  const register = data => {
    setState({ ...state, status: 'pending' });
    let shouldFail = false;

    return registerUser(data, shouldFail).then(data => {
      if (shouldFail) {
        return setState({ status: 'error', user: null, error: data });
      } else {
        return setState({ status: 'success', user: data, error: null });
      }
    });
  };

  const login = (email, password) => {
    setState({ ...state, status: 'pending' });
    let shouldFail = email !== 'teste@teste.com' || password !== '#teste1234';

    return getUser(shouldFail).then(data => {
      if (shouldFail) {
        return setState({ status: 'error', user: null, error: data });
      } else {
        return setState({ status: 'success', user: data, error: null });
      }
    });
  };

  const logout = () => {
    setState({ status: 'success', user: null, error: null });
    window.localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{ state, register, login, logout }}
      {...props}
    />
  );
}

function useAuthState() {
  const { state, register, login, logout } = useContext(AuthContext);
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
    register,
    login,
    logout,
  };
}

export { AuthProvider, useAuthState };
