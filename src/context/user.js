import { createContext, useContext } from 'react';
import { useAuthState } from './auth';

const UserContext = createContext();

function UserProvider(props) {
  return <UserContext.Provider value={useAuthState().user} {...props} />;
}

function useUser() {
  return useContext(UserContext);
}

export { UserProvider, useUser };
