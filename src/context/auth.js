import { createContext, useContext, useState } from 'react';

const sleep = time => new Promise(resolve => setTimeout(resolve, time));
const getUser = () => sleep(1000).then(() => ({ username: 'Leonardo' }));

const AuthContext = createContext();

function AuthProvider(props) {
  const [state, setState] = useState({
    status: 'idle',
    user: null,
    error: null,
  });

  if (state.status === 'error' && state.error) {
    return (
      <div>
        <h1>Something went wrong!</h1>
        <pre>{state.error.message ?? 'Unhandled error!'}</pre>
      </div>
    );
  }

  const login = () => {
    setState({ ...state, status: 'pending' });
    return getUser().then(user =>
      setState({ status: 'success', user: user, error: null })
    );
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
    isPending,
    isError,
    isSuccess,
    isAuthenticated,
    login,
    logout,
  };
}

export { AuthProvider, useAuthState };
