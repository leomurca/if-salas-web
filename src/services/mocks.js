const allClassrooms = [
  {
    id: '321',
    name: 'Introdução à Ciência de Dados',
    abbreviation: 'ICD',
    color: '#006FF2',
    teachers: [
      {
        id: '2342',
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
        id: '1234',
        name: 'Míriam Lúcia Barbosa',
        avatar:
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
      },
      {
        id: '4321',
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
        id: '6781',
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
        id: '4321',
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
        id: '9999',
        name: 'Gabriel Felipe Cândido Novy',
        avatar:
          'https://lh3.googleusercontent.com/a-/AOh14GgvfrD--cl25V_3UOAR93sN_jKdYNJ9PXhUH2zXhQ=s75-c',
      },
    ],
  },
];

const allAssignments = [
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
    classrooms: allClassrooms.filter(c => c.id === '321'),
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
    classrooms: allClassrooms.filter(c => c.id === '666'),
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
    classrooms: allClassrooms.filter(c => c.id === '123'),
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
    classrooms: allClassrooms.filter(c => c.id === '765'),
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
    classrooms: allClassrooms.filter(c => c.id === '666' || c.id === '321'),
  },
];

const allClassroomAnnouncements = [
  {
    id: '850006245121695744',
    createdAt: '2022-08-01T16:00:00.000Z',
    text: 'Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent taciti sociosqu ad litora torquent.Quem num gosta di mim que vai caçá sua turmis!Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.\n\n Cevadis im ampola pa arma uma pindureta.Paisis, filhis, espiritis santis.Quem manda na minha terra sou euzis!Per aumento de cachacis, eu reclamis.',
    user: {
      id: '2342',
      name: 'Carlos Alexandre Silva',
      avatar:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
    },
    classroom: {
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
    attachments: null,
  },
  {
    id: '39450273466121695744',
    createdAt: '2022-05-26T16:00:00.000Z',
    text: 'Mussum Ipsum, cacilds vidis litro abertis. Quem manda na minha terra sou euzis!Viva Forevis aptent taciti sociosqu ad litora torquent.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Quem num gosta di mim que vai caçá sua turmis!',
    user: {
      id: '2342',
      name: 'Carlos Alexandre Silva',
      avatar:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
    },
    classroom: {
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
    attachments: null,
  },
];

const faq = [
  {
    question: 'Como faço para acessar a biblicoteca virtual?',
    answer:
      'Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est.Quem num gosta di mé, boa gentis num é.Quem num gosta di mim que vai caçá sua turmis!Leite de capivaris, leite de mula manquis sem cabeça.',
  },
  {
    question: 'Onde consigo informações de estágio?',
    answer:
      'Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis!In elementis mé pra quem é amistosis quis leo.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Si num tem leite então bota uma pinga aí cumpadi! \n Mé faiz elementum girarzis, nisi eros vermeio.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.',
  },
  {
    question: 'Como faço para solicitar uma declaração de matrícula?',
    answer:
      'Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis!In elementis mé pra quem é amistosis quis leo.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Si num tem leite então bota uma pinga aí cumpadi! \n Mé faiz elementum girarzis, nisi eros vermeio.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.',
  },
  {
    question: 'Onde encontro a matriz curricular do meu curso?',
    answer:
      'Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis!In elementis mé pra quem é amistosis quis leo.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Si num tem leite então bota uma pinga aí cumpadi! \n Mé faiz elementum girarzis, nisi eros vermeio.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.',
  },
  {
    question: 'Como faço para solicitar meu histórico escolar?',
    answer:
      'Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis!In elementis mé pra quem é amistosis quis leo.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Si num tem leite então bota uma pinga aí cumpadi! \n Mé faiz elementum girarzis, nisi eros vermeio.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Manduma pindureta quium dia nois paga.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.',
  },
];

const user = {
  id: '0021564',
  username: 'leonardomurca',
  name: 'Leonardo',
  lastName: 'Murça',
  token: 'skdfb9458hnsdfsif4w38r9234ry98423',
};

const authFailure = {
  message: 'Falha na autenticação',
};

export {
  allClassrooms,
  allAssignments,
  allClassroomAnnouncements,
  faq,
  user,
  authFailure,
};
