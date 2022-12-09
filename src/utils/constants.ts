import { ESkillsType, IExperienceList, IPortfolio, ISkillList } from './types';

export const skillList: ISkillList[] = [
  {
    id: Math.floor(Math.random() * 100),
    image: ['javascript'],
    name: 'JavaScript',
    description:
      'Es mi fuerte, ya que es el lenguaje en el que más me he desempeñado. Desde inicios trabajé vainilla y con librerías como JQuery. En los últimos 3 años lo he trabajado en React, React Native y Node js, por lo que he podido expandir mi conocimiento en el mismo.',
    type: ESkillsType.Hard,
  },
  {
    id: Math.floor(Math.random() * 100),
    image: ['typescript'],
    name: 'Typescript',
    description:
      'Realicé un proyecto recientemente en este lenguaje, y personalmente me gustó mucho por la idea de tener tipado estricto y autocompletado. Conozco los aspectos básicos como crear types o interfaces, además de enums o genéricos.',
    type: ESkillsType.Hard,
  },
  {
    id: Math.floor(Math.random() * 100),
    image: ['html5', 'css3'],
    name: 'HTML5/CSS3',
    description:
      'Desde mis inicios trabajé como desarrollador web, por lo que manejar estas tecnologías fue lo principal en mi formación. Actualmente he estado ampliando un poco más mis conocimientos en css lo cual siempre ha sido mi debilidad.',
    type: ESkillsType.Hard,
  },
  {
    id: Math.floor(Math.random() * 100),
    image: ['reactJs'],
    name: 'React JS',
    description:
      'Es mi tecnología favorita a la hora de realizar páginas web. He trabajo principalmente con redux o zustand para manejar estados.',
    type: ESkillsType.Hard,
  },
  {
    id: Math.floor(Math.random() * 100),
    image: ['reactNative'],
    name: 'React Native',
    description:
      'Es la tecnología en la que más me he desempeñado estos últimos años. He trabajo con redux y zustand para la gestión de estados, también he trabajo con styled components, redux saga, entre otros.',
    type: ESkillsType.Hard,
  },
  {
    id: Math.floor(Math.random() * 100),
    image: ['nodeJs'],
    name: 'Node JS',
    description:
      'No tengo amplia experiencia pero mis conocimientos en javascript me ayudaron a trabajar como backend un tiempo, principalmente manejando node con express, mongo db, sequelize con mysql y postgresql.',
    type: ESkillsType.Hard,
  },
  {
    id: Math.floor(Math.random() * 100),
    image: ['git'],
    name: 'Git',
    description:
      'Como requisito fundamental en los trabajos, he aprendido a usarlo en los aspectos básicos e intermedios, como la creación de ramas, pull request, merge, entre otros.',
    type: ESkillsType.Hard,
  },
  {
    id: Math.floor(Math.random() * 100),
    image: ['php'],
    name: 'PHP',
    description:
      'Es el lenguaje con el cual me inicié. Actualmente no trabajo en este lenguaje aunque de vez en cuando he tocado proyectos con esta tecnología, pero no tengo mayor interés en usarlo a futuro.',
    type: ESkillsType.Hard,
  },
  {
    id: Math.floor(Math.random() * 100),
    image: ['language'],
    name: 'Inglés B1',
    description:
      'Es lo que considero como nivel actual a través de tests online, nada oficial. Puedo leer documentación en inglés y entender la mayoría o por lo menos el contexto. Me gusta ver tutoriales en inglés con subtitulos y puedo entender perfectamente la mayoría, también puedo ver series en inglés con subtitulos. Puedo tener conversaciones pero con dificultad.',
    type: ESkillsType.Soft,
  },
];

export const portfolioList: IPortfolio[] = [
  {
    title: 'Calculadora con TypeScript',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio voluptates velit assumenda itaque rerum mollitia iure, aperiam necessitatibus natus maxime, eaque ea ipsam commodi nisi consequuntur alias at omnis',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg',
      'https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg',
      'https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg',
    ],
  },
  {
    title: 'Panel Administrativo en React',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam distinctio obcaecati aliquid commodi qui, similique cum saepe fugit cumque dolorum voluptate maxime inventore itaque laboriosam deserunt aperiam recusandae earum corrupti.',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg',
      'https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg',
      'https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg',
    ],
  },
  {
    title: 'Panel Administrativo en React',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam distinctio obcaecati aliquid commodi qui, similique cum saepe fugit cumque dolorum voluptate maxime inventore itaque laboriosam deserunt aperiam recusandae earum corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam distinctio obcaecati aliquid commodi qui, similique cum saepe fugit cumque dolorum voluptate maxime inventore itaque laboriosam deserunt aperiam recusandae earum corrupti.',
    images: [
      'https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg',
      'https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg',
    ],
  },
  {
    title: 'Calculadora con TypeScript',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur optio voluptates velit assumenda itaque rerum mollitia iure, aperiam necessitatibus natus maxime, eaque ea ipsam commodi nisi consequuntur alias at omnis',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg',
      'https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg',
      'https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg',
    ],
  },
  {
    title: 'Panel Administrativo en React',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam distinctio obcaecati aliquid commodi qui, similique cum saepe fugit cumque dolorum voluptate maxime inventore itaque laboriosam deserunt aperiam recusandae earum corrupti.',
    images: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg',
      'https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg',
      'https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg',
    ],
  },
];

export const experienceList: IExperienceList[] = [
  {
    title: 'Cashship',
    rol: 'Frontend Developer',
    date: '2021 | Present',
    details: `<p>- Desarrollo de aplicación móvil para realizar transferencias bancarias, recargas de celular, entre otras operaciones bancarias.<br />
    <b>***</b> React Native con Typescript, Zustand como gestor de estado, consumo de api con Axios.<br /><br />
    
    - Desarrollo de una startup, una aplicación móvil para el manejo de criptomonedas.<br />
    <b>***</b> React Native con Redux, Redux Saga, Styled Components, consumo de api con Axios.<br /><br />
    
    <b>¿Qué he aprendido?</b><br />
    - He adquirido mucha más experiencia en React Native, dando mis primeros pasos con Typescript, he aprendido a usar mejor los hooks y a crear componentes reusables con más facilidad. He aprendido un poco más sobre el mundo de las criptomonedas.<br />
    Aptitudes: <b>JavaScript · TypeScript · React Native · Redux · Git</b></p>`,
  },
  {
    title: 'Freelance',
    rol: 'Full Stack Developer',
    date: '2020 | 2021',
    details: `<p>
      Mis primeros pasos en React, React Native, Node JS y MongoDB.<br /><br />

      - Trabajé como subcontratado, realizando tareas específicas sobre distintos proyectos.<br />
      - Mantenimiento de aplicaciones en React Native con Redux, GraphQL.<br />
      - Mensajería con Twilio en Node JS.<br />
      - Gestión de base de datos relaciones y no relacionales, con MySql, PostgreSql y MongoDB, con Sequelize y Mongoose.<br />
      - Soporte técnico en plugin de WordPress WPeMatico.<br /><br />
      
      <b>¿Qué aprendí?</b><br />
      - Este trabajo fue un antes y un después en mi carrera profesional, ya que aprendí una nuevas tecnologías y no sólo eso, sino que pude mejorar mi lógica y mi habilidad para solucionar problemas.<br />
      Aptitudes: <b>React.js · React Native · Node.js · MongoDB · Redux · MySQL · Git</b>
      </p>`,
  },
  {
    title: 'Ministerio de Petróleo',
    rol: 'Full Stack Developer',
    date: '2018 | 2019',
    details: `<p>
      - Soporte a aplicaciones ya hechas de índole administrativo.<br />
      - Administración de base de datos en MySql.<br /><br />
      
      <b>¿Qué aprendí?</b><br />
      - Al ser mi segundo trabajo, mi experiencia era poca pero pude avanzar en mis conocimientos en PHP y MySql.<br />
      - Soporte a aplicaciones ya hechas de índole administrativo.<br />
      - Administración de base de datos en MySql.<br />
      Aptitudes: <b>PHP · JavaScript · MySQL · jQuery · Bootstrap</b>
      </p>`,
  },
  {
    title: 'Ministerio de Vivienda y Hábitat',
    rol: 'Full Stack Developer',
    date: '2016 | 2017',
    details: `<p>
      - Trabajé como empleado público desarrollando aplicaciones de índole administrativo, enfocado más a PHP.<br />
      - Entre mis roles más relevantes estuvo dar soporte a los sistemas ya existentes.<br /><br />

      <b>¿Qué aprendí?</b><br />
      - Al ser mi primer trabajo fue difícil, pero pude adquirir experiencia laboral rápidamente. En esa época PHP era mi fuerte con MySql
      Aptitudes: <b>PHP · MySQL · jQuery · Bootstrap · JavaScript</b>
      </p>`,
  },
];
