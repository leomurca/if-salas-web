import { createContext, useContext, useState } from 'react';

const sleep = time => new Promise(resolve => setTimeout(resolve, time));
const getUser = shouldFail =>
  sleep(3000).then(() => {
    if (shouldFail) {
      return { message: 'Falha na autenticação' };
    } else {
      return { username: 'Leonardo' };
    }
  });

const AuthContext = createContext();

function AuthProvider(props) {
  const [state, setState] = useState({
    status: 'idle',
    user: null,
    error: null,
  });

  const login = (email, password) => {
    setState({ ...state, status: 'pending' });
    let shouldFail = email !== 'leo@gmail.com' && password !== '#leo1234';

    return getUser(shouldFail).then(data => {
      if (shouldFail) {
        return setState({ status: 'error', user: null, error: data });
      } else {
        return setState({ status: 'success', user: data, error: null });
      }
    });
  };

  const logout = () => {
    setState({ ...state, status: 'pending' });
    return getUser().then(() =>
      setState({ status: 'success', user: null, error: null })
    );
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
