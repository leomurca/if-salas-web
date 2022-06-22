import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
          color: '#006FF2',
          teachers: [
            {
              name: 'Carlos Alexandre Silva',
              avatar:
                'https://lh3.googleusercontent.com/a-/AOh14GgmBInEbkv1D4FuLyz64phoyOfI4Y8kql8LYVy0_w=s75-c',
            },
          ],
        },
        {
          name: 'Gestão de Projetos',
          abbreviation: 'GP',
          color: '#7900F2',
          teachers: [
            {
              name: 'Míriam Lúcia Barbosa',
              avatar: '/assets/miriam.jpg',
            },
          ],
        },
        {
          name: 'Banco de Dados II',
          abbreviation: 'BDII',
          color: '#FF7A00',
          teachers: [
            {
              name: 'Cristiane Norbiato Targa',
              avatar:
                'https://lh3.googleusercontent.com/a-/AOh14GhwNeQ0h2eKl2WXGuwyDzvLWtrvyrG2kJtZ7A1EBw=s75-c',
            },
          ],
        },
        {
          name: 'Contabilidade Básica',
          abbreviation: 'CB',
          color: '#BB0000',
          teachers: [
            {
              name: 'Alexandre Couto Cardoso',
              avatar: '/assets/alex.jpg',
            },
          ],
        },
        {
          name: 'Linguagens de Programação',
          abbreviation: 'LP',
          color: '#039200',
          teachers: [
            {
              name: 'Gabriel Felipe Cândido Novy',
              avatar:
                'https://lh3.googleusercontent.com/a-/AOh14GgvfrD--cl25V_3UOAR93sN_jKdYNJ9PXhUH2zXhQ=s75-c',
            },
          ],
        },
      ],
    };
  });

const UserContext = createContext();

function UserProvider(props) {
  const { user } = useAuthState();
  const { pathname } = useLocation();
  const [state, setState] = useState({
    status: 'idle',
    user: null,
    error: null,
    pathname: '',
  });

  useEffect(() => {
    setState({ user, pathname });
  }, [user, pathname]);

  const fetchClassrooms = () => {
    return getClassrooms(user.id);
  };

  return <UserContext.Provider value={{ state, fetchClassrooms }} {...props} />;
}

function useUser() {
  const { state, fetchClassrooms } = useContext(UserContext);
  const isPending = state.status === 'pending';

  return {
    state,
    isPending,
    fetchClassrooms,
  };
}

export { UserProvider, useUser };
