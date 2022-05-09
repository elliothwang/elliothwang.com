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
    title: 'Software Engineering Internship',
    location: 'Behaivior',
    date: 'Jan 2022 - May 2022',
    description: [
      'Collaborated with a team of 4 to 6 developers and interns in the development of user-facing analytics dashboards.',
      'Assisted in the migration from Redux to React Query and the implementation of Chakra UI.',
      'Attended meetings with the development team and leadership to discuss product strategy and direction.',
    ],
    icon: 'work',
  },
  {
    id: 2,
    title: 'Full-Stack SWE Bootcamp',
    location: 'General Assembly',
    date: 'Feb 2021 - May 2021',
    description: [
      'A 12-week full-stack program that consists of 4 major projects implementing languages, frameworks, and technologies including: HTML, CSS, Sass, Javascript, jQuery, PostgreSQL, MongoDB, Django, NodeJS, ReactJS, Git, Github.',
    ],
    icon: 'school',
  },
  {
    id: 3,
    title: 'Laboratory Research Assistant',
    location: 'California State University, Northridge',
    date: 'Aug 2019 - Mar 2020',
    description: [
      'Collaborated within a team of 4 to collect and analyze biomechanics research data.',
      'Ensured adequate documentation of protocol and maintained data in a well-organized repository.',
      'Tracked and prepared study-specific information utilizing databases, spreadsheets, and software tools.',
    ],
    icon: 'work',
  },
  {
    id: 4,
    title: 'Administrative Assistant',
    location: 'All Nations Church',
    date: 'Mar 2018 - Jan 2020',
    description: [
      'Supervised operations of Sunday services by managing program schedule, delegating tasks to student volunteers, and providing appropriate follow-up with leaders.',
      'Implemented, maintained, and updated CRM software.',
      'Planned and coordinated community outings that promoted interpersonal relationship growth.',
    ],
    icon: 'work',
  },
  {
    id: 4,
    title: 'B.S. Kinesiology',
    location: 'California State University, Northridge',
    date: 'Mar 2018 - May 2020',
    description: [
      'After transferring from community college, completed 2 years to earn a Bachelor of Science in Kinesiology.',
    ],
    icon: 'school',
  },
];

export default timelines;
