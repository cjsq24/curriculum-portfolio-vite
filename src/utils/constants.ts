import { ESkillsType, IExperienceList, IPortfolio, ISkillList } from './types';

const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

export const skillList: ISkillList[] = [
  {
    image: ['php'],
    name: 'PHP',
    description: lorem,
    type: ESkillsType.Hard,
  },
  {
    image: ['javascript'],
    name: 'JavaScript',
    description: lorem,
    type: ESkillsType.Hard,
  },
  {
    image: ['html5', 'css3'],
    name: 'HTML5/CSS3',
    description: lorem,
    type: ESkillsType.Hard,
  },
  {
    image: ['reactJs'],
    name: 'React JS',
    description: lorem,
    type: ESkillsType.Hard,
  },
  {
    image: ['reactNative'],
    name: 'React Native',
    description: lorem,
    type: ESkillsType.Hard,
  },
  {
    image: ['nodeJs'],
    name: 'Node JS',
    description: lorem,
    type: ESkillsType.Hard,
  },
  {
    image: ['laravel'],
    name: 'Laravel',
    description: lorem,
    type: ESkillsType.Hard,
  },
  {
    image: ['nodeJs'],
    name: 'English B2',
    description: lorem,
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
    title: 'Where does it come from',
    rol: 'Frontend Developer',
    date: '2020 | Present',
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    title: 'Where does it come from',
    rol: 'Frontend Developer',
    date: '2016 | 2018',
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    title: 'Where does it come from',
    rol: 'Frontend Developer',
    date: '2016 | 2018',
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    title: 'Where does it come from',
    rol: 'Frontend Developer',
    date: '2016 | 2018',
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    title: 'Where does it come from',
    rol: 'Frontend Developer',
    date: '2016 | 2018',
    details:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
];
