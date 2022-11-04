type Props = {
  id: number;
  title: string;
  location: string;
  date: string;
  description: Array<string>;
  icon: string;
};

const timelines: Array<Props> = [
  {
    id: 1,
    title: 'Software Engineer',
    location: 'KTExpress',
    date: '2019 - Current',
    description: [
      'Collaborated with product management and design teams to translate wireframes into working prototypes and features to refine user interface behaviors.',
      'Monitored and improved API performance by utilizing synchronous micro services and partial resources, increasing overall application efficiency.',
      'Built extensive test coverage for all new features to ensure performance and superior visual quality.',
      'Most recently, involved in the process of migration from Vanilla JavaScript to TypeScript and React.',
    ],
    icon: 'work',
  },
  {
    id: 2,
    title: 'Contract Software Engineer',
    location: 'Behaivior',
    date: '2021 - 2022',
    description: [
      'Member of a team of developers responsible for development, design, implementation and migration for application, database, interfaces and etc.',
      'Day to day responsibilities included but not limited to administration, support and proactive analysis, and timely communication with relevant technical and non-technical teams, management, and third- party vendors.',
      'Specific project handled include but not limited to migration from Redux to React Query and implementation of Chakra UI.',
    ],
    icon: 'work',
  },
  {
    id: 3,
    title: 'Full-Stack SWE Bootcamp',
    location: 'General Assembly',
    date: '2020 - 2021',
    description: [
      'A 12-week full-stack program that consists of 4 major projects implementing languages, frameworks, and technologies including: HTML, CSS, Sass, Javascript, jQuery, PostgreSQL, MongoDB, Django, NodeJS, ReactJS, Git, Github.',
    ],
    icon: 'school',
  },
  {
    id: 4,
    title: 'Laboratory Research Assistant',
    location: 'California State University, Northridge',
    date: '2018 - 2019',
    description: [
      'Collaborated within a team of 4 to collect and analyze biomechanics research data.',
      'Ensured adequate documentation of protocol and maintained data in a well-organized repository.',
      'Tracked and prepared study-specific information utilizing databases, spreadsheets, and software tools.',
    ],
    icon: 'work',
  },
  {
    id: 5,
    title: 'Administrative Assistant',
    location: 'All Nations Church',
    date: '2017 - 2019',
    description: [
      'Supervised operations of Sunday services by managing program schedule, delegating tasks to student volunteers, and providing appropriate follow-up with leaders.',
      'Implemented, maintained, and updated CRM software.',
      'Planned and coordinated community outings that promoted interpersonal relationship growth.',
    ],
    icon: 'work',
  },
  {
    id: 6,
    title: 'Bachelor of Science',
    location: 'California State University, Northridge',
    date: '2019',
    description: [],
    icon: 'school',
  },
];

export default timelines;
