import { createContext, useContext, useEffect, useState } from 'react';
import { sleep } from '../utils/sleep';
import { useAuthState } from './auth';

const getClassrooms = userId =>
  sleep(3000).then(() => {
    console.log('userId: ' + userId);
    return {
      data: [
        {
          name: 'Introdução à Ciência de Dados',
          abbreviation: 'ICD',
          teacher: 'Carlos Alexandre Silva',
        },
        {
          name: 'Gestão de Projetos',
          abbreviation: 'GP',
          teacher: 'Míriam Lúcia Barbosa',
        },
        {
          name: 'Banco de Dados II',
          abbreviation: 'BDII',
          teacher: 'Cristiane Norbiato Targa',
        },
        {
          name: 'Contabilidade Básica',
          abbreviation: 'CB',
          teacher: 'Alexandre Couto Cardoso',
        },
        {
          name: 'Linguagens de Programação',
          abbreviation: 'LP',
          teacher: 'Gabriel Felipe Cândido Novy',
        },
      ],
    };
  });

const UserContext = createContext();

function UserProvider(props) {
  const { user } = useAuthState();
  const [state, setState] = useState({
    status: 'idle',
    user: null,
    classrooms: [],
    error: null,
  });

  useEffect(() => {
    setState({ user });
  }, [user]);

  const classrooms = () => {
    setState({ ...state, status: 'pending' });
    getClassrooms(user.id).then(data =>
      setState({ status: 'success', user, classrooms: data.data, error: null })
    );
  };

  return <UserContext.Provider value={{ state, classrooms }} {...props} />;
}

function useUser() {
  const { state, classrooms } = useContext(UserContext);
  const isPending = state.status === 'pending';

  return {
    isPending,
    classrooms,
  };
}

export { UserProvider, useUser };
