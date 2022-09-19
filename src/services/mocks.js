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
    appointmentSlots: [
      { weekDay: 'Quarta-feira', start: '10:00', end: '11:40' },
      { weekDay: 'Sexta-feira', start: '10:00', end: '11:40' },
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
    appointmentSlots: [
      { weekDay: 'Segunda-feira', start: '09:00', end: '10:40' },
      { weekDay: 'Quinta-feira', start: '08:00', end: '09:00' },
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
    appointmentSlots: [
      { weekDay: 'Segunda-feira', start: '09:00', end: '10:40' },
      { weekDay: 'Terça-feira', start: '08:00', end: '09:00' },
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
    appointmentSlots: [
      { weekDay: 'Sexta-feira', start: '20:00', end: '21:00' },
      { weekDay: 'Terça-feira', start: '19:00', end: '20:10' },
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
    appointmentSlots: [
      { weekDay: 'Terça-feira', start: '08:00', end: '09:20' },
      { weekDay: 'Quarta-feira', start: '11:00', end: '12:20' },
    ],
  },
];

const allAssignments = [
  {
    id: '5435',
    type: 'assessment',
    title:
      'Prova 1 - Armazenamento de Dados. Python em CD. Armazenamento Analítico',
    description:
      '<p>Mussum Ipsum, cacilds vidis litro abertis. N&atilde;o sou faixa preta cumpadi, sou preto inteiris, inteiris.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Sapien in monti palavris qui num significa nadis i pareci latim.Suco de cevadiss deixa as pessoas mais interessantis.</p><p>Suco de cevadiss, &eacute; um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Interagi no m&eacute;, cursus quis, vehicula ac nisi.A ordem dos tratores n&atilde;o altera o p&atilde;o duris.Per aumento de cachacis, eu reclamis.</p><p>Quem manda na minha terra sou euzis!Paisis, filhis, espiritis santis.A ordem dos tratores n&atilde;o altera o p&atilde;o duris.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.</p>',
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
    id: '0128',
    type: 'assessment',
    title:
      'Prova 2 - Visualização de Dados. Matemática e Estatística em CD. Análise de Dados',
    description:
      '<p>Mussum Ipsum, cacilds vidis litro abertis. N&atilde;o sou faixa preta cumpadi, sou preto inteiris, inteiris.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Sapien in monti palavris qui num significa nadis i pareci latim.Suco de cevadiss deixa as pessoas mais interessantis.</p><p>Suco de cevadiss, &eacute; um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Interagi no m&eacute;, cursus quis, vehicula ac nisi.A ordem dos tratores n&atilde;o altera o p&atilde;o duris.Per aumento de cachacis, eu reclamis.</p><p>Quem manda na minha terra sou euzis!Paisis, filhis, espiritis santis.A ordem dos tratores n&atilde;o altera o p&atilde;o duris.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.</p>',
    dueDate: '2022-09-01 23:59',
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
    type: 'project',
    title: 'Trabalho NoSQL',
    description:
      '<p>Mussum Ipsum, cacilds vidis litro abertis. N&atilde;o sou faixa preta cumpadi, sou preto inteiris, inteiris.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Sapien in monti palavris qui num significa nadis i pareci latim.Suco de cevadiss deixa as pessoas mais interessantis.</p><p>Suco de cevadiss, &eacute; um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Interagi no m&eacute;, cursus quis, vehicula ac nisi.A ordem dos tratores n&atilde;o altera o p&atilde;o duris.Per aumento de cachacis, eu reclamis.</p><p>Quem manda na minha terra sou euzis!Paisis, filhis, espiritis santis.A ordem dos tratores n&atilde;o altera o p&atilde;o duris.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.</p>',
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
    id: '9283764',
    type: 'assessment',
    title: 'Atividade 2 - Estudo de caso Sapiens Informática',
    description:
      '<p>Mussum Ipsum, cacilds vidis litro abertis. N&atilde;o sou faixa preta cumpadi, sou preto inteiris, inteiris.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Sapien in monti palavris qui num significa nadis i pareci latim.Suco de cevadiss deixa as pessoas mais interessantis.</p><p>Suco de cevadiss, &eacute; um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Interagi no m&eacute;, cursus quis, vehicula ac nisi.A ordem dos tratores n&atilde;o altera o p&atilde;o duris.Per aumento de cachacis, eu reclamis.</p><p>Quem manda na minha terra sou euzis!Paisis, filhis, espiritis santis.A ordem dos tratores n&atilde;o altera o p&atilde;o duris.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.</p>',
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
    type: 'assessment',
    title:
      'AA08 - Atividade de Aprendizagem 08 - Componentes de rateio de custos',
    description:
      '<p>Mussum Ipsum, cacilds vidis litro abertis. N&atilde;o sou faixa preta cumpadi, sou preto inteiris, inteiris.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Sapien in monti palavris qui num significa nadis i pareci latim.Suco de cevadiss deixa as pessoas mais interessantis.</p><p>Suco de cevadiss, &eacute; um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Interagi no m&eacute;, cursus quis, vehicula ac nisi.A ordem dos tratores n&atilde;o altera o p&atilde;o duris.Per aumento de cachacis, eu reclamis.</p><p>Quem manda na minha terra sou euzis!Paisis, filhis, espiritis santis.A ordem dos tratores n&atilde;o altera o p&atilde;o duris.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.</p>',
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
    type: 'project',
    title: 'Trabalho interdisciplinar',
    description:
      '<p>Mussum Ipsum, cacilds vidis litro abertis. N&atilde;o sou faixa preta cumpadi, sou preto inteiris, inteiris.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Sapien in monti palavris qui num significa nadis i pareci latim.Suco de cevadiss deixa as pessoas mais interessantis.</p><p>Suco de cevadiss, &eacute; um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Interagi no m&eacute;, cursus quis, vehicula ac nisi.A ordem dos tratores n&atilde;o altera o p&atilde;o duris.Per aumento de cachacis, eu reclamis.</p><p>Quem manda na minha terra sou euzis!Paisis, filhis, espiritis santis.A ordem dos tratores n&atilde;o altera o p&atilde;o duris.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.</p>',
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
  {
    id: '34752034624396',
    createdAt: '2021-09-30T09:26:00.000Z',
    text: 'Mussum Ipsum, cacilds vidis litro abertis. Quem manda na minha terra sou euzis!Viva Forevis aptent taciti sociosqu ad litora torquent.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Quem num gosta di mim que vai caçá sua turmis!',
    user: {
      id: '4321',
      name: 'Alexandre Couto Cardoso',
      avatar: '/assets/alex.jpg',
    },
    classroom: {
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
    attachments: null,
  },
  {
    id: '34752034624396',
    createdAt: '2021-08-10T10:10:00.000Z',
    text: 'Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Atirei o pau no gatis, per gatis num morreus.Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.Interagi no mé, cursus quis, vehicula ac nisi.Aenean aliquam molestie leo, vitae iaculis nisl.Paisis, filhis, espiritis santis. Viva Forevis aptent taciti sociosqu ad litora torquent.Manduma pindureta quium dia nois paga.Cevadis im ampola pa arma uma pindureta.Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.',
    user: {
      id: '1234',
      name: 'Míriam Lúcia Barbosa',
      avatar:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
    },
    classroom: {
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
    attachments: null,
  },
];

const allUpcomingAssignments = [
  {
    id: '5435',
    type: 'assessment',
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
    id: '0128',
    type: 'assessment',
    title:
      'Prova 2 - Visualização de Dados. Matemática e Estatística em CD. Análise de Dados',
    dueDate: '2022-09-01 23:59',
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
    type: 'project',
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

const allPeople = [
  {
    id: '1234',
    name: 'Míriam Lúcia Barbosa',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
    role: 'PROFESSOR',
    classes: [
      {
        id: '123',
        name: 'Gestão de Projetos',
        abbreviation: 'GP',
        color: '#7900F2',
      },
    ],
  },
  {
    id: '4321',
    name: 'Alexandre Couto Cardoso',
    avatar: '/assets/alex.jpg',
    role: 'PROFESSOR',
    classes: [
      {
        id: '123',
        name: 'Gestão de Projetos',
        abbreviation: 'GP',
        color: '#7900F2',
      },
      {
        id: '765',
        name: 'Contabilidade Básica',
        abbreviation: 'CB',
        color: '#BB0000',
      },
    ],
  },
  {
    id: '2342',
    name: 'Carlos Alexandre Silva',
    avatar:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=50&q=80',
    role: 'PROFESSOR',
    classes: [
      {
        id: '321',
        name: 'Introdução à Ciência de Dados',
        abbreviation: 'ICD',
        color: '#006FF2',
      },
    ],
  },
  {
    id: '6781',
    name: 'Cristiane Norbiato Targa',
    avatar:
      'https://lh3.googleusercontent.com/a-/AOh14GhwNeQ0h2eKl2WXGuwyDzvLWtrvyrG2kJtZ7A1EBw=s75-c',
    role: 'PROFESSOR',
    classes: [
      {
        id: '666',
        name: 'Banco de Dados II',
        abbreviation: 'BDII',
        color: '#FF7A00',
      },
    ],
  },
  {
    id: '9999',
    name: 'Gabriel Felipe Cândido Novy',
    avatar:
      'https://lh3.googleusercontent.com/a-/AOh14GgvfrD--cl25V_3UOAR93sN_jKdYNJ9PXhUH2zXhQ=s75-c',
    role: 'PROFESSOR',
    classes: [
      {
        id: '333',
        name: 'Linguagens de Programação',
        abbreviation: 'LP',
        color: '#039200',
      },
    ],
  },
  {
    id: '193458673',
    name: 'Gabriel West',
    avatar: 'https://i.pravatar.cc/400?img=57',
    role: 'STUDENT',
    classes: [
      {
        id: '321',
        name: 'Introdução à Ciência de Dados',
        abbreviation: 'ICD',
        color: '#006FF2',
      },
    ],
  },
  {
    id: '365967145',
    name: 'John Pager',
    avatar: 'https://i.pravatar.cc/400?img=52',
    role: 'STUDENT',
    classes: [
      {
        id: '321',
        name: 'Introdução à Ciência de Dados',
        abbreviation: 'ICD',
        color: '#006FF2',
      },
    ],
  },
  {
    id: '92346574',
    name: 'Lauren Comber',
    avatar: 'https://i.pravatar.cc/400?img=44',
    role: 'STUDENT',
    classes: [
      {
        id: '321',
        name: 'Introdução à Ciência de Dados',
        abbreviation: 'ICD',
        color: '#006FF2',
      },
    ],
  },
  {
    id: '239462345',
    name: 'Marina dos Santos',
    avatar: 'https://i.pravatar.cc/400?img=41',
    role: 'STUDENT',
    classes: [
      {
        id: '321',
        name: 'Introdução à Ciência de Dados',
        abbreviation: 'ICD',
        color: '#006FF2',
      },
    ],
  },
  {
    id: '3454956749',
    name: 'Lee Wong',
    avatar: 'https://i.pravatar.cc/400?img=33',
    role: 'STUDENT',
    classes: [
      {
        id: '321',
        name: 'Introdução à Ciência de Dados',
        abbreviation: 'ICD',
        color: '#006FF2',
      },
    ],
  },
];

const user = {
  id: '123',
  ra: '0021123',
  username: 'josedasilva',
  email: 'jose@gmail.com',
  password: '#jose1234', // TODO: Remove this!
  firstName: 'José',
  lastName: 'Silva',
  token: 'skdfb9458hnsdfsif4w38r9234ry98423',
  phone: '31999999999',
  avatar: 'https://i.pravatar.cc/300?img=61',
  course: 0,
  termsAgreed: true,
  year: 2018,
};

const authFailure = {
  message: 'Falha na autenticação',
};

export {
  allClassrooms,
  allAssignments,
  allClassroomAnnouncements,
  allPeople,
  faq,
  user,
  authFailure,
  allUpcomingAssignments,
};
