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
          id: '321',
          name: 'Introdução à Ciência de Dados',
          abbreviation: 'ICD',
          color: '#006FF2',
          teachers: [
            {
              name: 'Carlos Alexandre Silva',
              avatar:
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
            },
          ],
        },
        {
          id: '123',
          name: 'Gestão de Projetos',
          abbreviation: 'GP',
          color: '#7900F2',
          teachers: [
            {
              name: 'Míriam Lúcia Barbosa',
              avatar:
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
            },
            {
              name: 'Alexandre Couto Cardoso',
              avatar: '/assets/alex.jpg',
            },
          ],
        },
        {
          id: '666',
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
          id: '765',
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
          id: '333',
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

const getAssignments = userId =>
  sleep(4000).then(() => {
    console.log('userId: ' + userId);
    return {
      data: [
        {
          id: '5435',
          title:
            'Prova 1 - Armazenamento de Dados. Python em CD. Armazenamento Analítico',
          dueDate: '2022-07-01 23:59',
          scores: [
            {
              classroomId: '321',
              value: 30,
            },
          ],
          classrooms: [
            {
              id: '321',
              name: 'Introdução à Ciência de Dados',
              abbreviation: 'ICD',
              color: '#006FF2',
              teachers: [
                {
                  name: 'Carlos Alexandre Silva',
                  avatar:
                    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
                },
              ],
            },
          ],
        },
        {
          id: '1234',
          title: 'Trabalho NoSQL',
          dueDate: '2022-06-29 22:00',
          scores: [
            {
              classroomId: '666',
              value: 35,
            },
          ],
          classrooms: [
            {
              id: '666',
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
          ],
        },
        {
          id: '1234',
          title: 'Atividade 2 - Estudo de caso Sapiens Informática',
          dueDate: '2022-06-25 23:59',
          scores: [
            {
              classroomId: '123',
              value: 10,
            },
          ],
          classrooms: [
            {
              id: '123',
              name: 'Gestão de Projetos',
              abbreviation: 'GP',
              color: '#7900F2',
              teachers: [
                {
                  name: 'Míriam Lúcia Barbosa',
                  avatar:
                    'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
                },
                {
                  name: 'Alexandre Couto Cardoso',
                  avatar: '/assets/alex.jpg',
                },
              ],
            },
          ],
        },
        {
          id: '3671',
          title:
            'AA08 - Atividade de Aprendizagem 08 - Componentes de rateio de custos',
          dueDate: '2022-07-23 10:00',
          scores: [
            {
              classroomId: '765',
              value: 1,
            },
          ],
          classrooms: [
            {
              id: '765',
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
          ],
        },
        {
          id: '1717',
          title: 'Trabalho interdisciplinar',
          dueDate: '2022-08-20 23:59',
          scores: [
            {
              classroomId: '666',
              value: 20,
            },
            {
              classroomId: '321',
              value: 30,
            },
          ],
          classrooms: [
            {
              id: '666',
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
              id: '321',
              name: 'Introdução à Ciência de Dados',
              abbreviation: 'ICD',
              color: '#006FF2',
              teachers: [
                {
                  name: 'Carlos Alexandre Silva',
                  avatar:
                    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
                },
              ],
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

  const fetchAssignments = () => {
    return getAssignments(user.id);
  };

  return (
    <UserContext.Provider
      value={{ state, fetchClassrooms, fetchAssignments }}
      {...props}
    />
  );
}

function useUser() {
  const { state, fetchClassrooms, fetchAssignments } = useContext(UserContext);
  const isPending = state.status === 'pending';

  return {
    state,
    isPending,
    fetchClassrooms,
    fetchAssignments,
  };
}

export { UserProvider, useUser };
