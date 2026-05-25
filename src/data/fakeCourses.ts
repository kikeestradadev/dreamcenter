export type { Course, StudyPath, School, PathRecord } from './types';

export {
  allCourses,
  continueWatching,
  freeCourses,
  getCourseBySlug,
  getRandomCourses,
  newCourses,
  parseDurationHours,
  trendingCourses,
  upcomingCourses,
} from './courses';

export {
  allPaths,
  featuredPaths,
  getPathBySlug,
  getPathCourses,
  getPathDisplayImage,
  getPathRecordBySlug,
} from './paths';

import type { School } from './types';

export const featuredSchools: School[] = [
  {
    id: 'school-1',
    slug: 'programacion',
    category: 'Desarrollo web',
    title: 'Programación y desarrollo web',
    description: 'Aprende programación desde cero con las tecnologías más demandadas.',
    image: 'images/img1.jpg',
    coursesCount: 24,
  },
  {
    id: 'school-2',
    slug: 'frontend',
    category: 'Frontend',
    title: 'Desarrollo frontend',
    description: 'HTML, CSS, JavaScript, React y herramientas modernas.',
    image: 'images/img2.jpg',
    coursesCount: 18,
  },
  {
    id: 'school-3',
    slug: 'backend',
    category: 'Backend',
    title: 'Desarrollo backend',
    description: 'REST, GraphQL, bases de datos y autenticación.',
    image: 'images/img3.jpg',
    coursesCount: 15,
  },
  {
    id: 'school-4',
    slug: 'herramientas',
    category: 'Herramientas',
    title: 'DevOps y herramientas',
    description: 'Git, CI/CD, contenedores y automatización.',
    image: 'images/img4.jpg',
    coursesCount: 10,
  },
  {
    id: 'school-5',
    slug: 'diseno',
    category: 'Diseño',
    title: 'Diseño y UX',
    description: 'Figma, Photoshop, UI y fundamentos de diseño.',
    image: 'images/curso_ui.jpg',
    coursesCount: 8,
  },
];

export const getSchoolBySlug = (slug: string): School | undefined =>
  featuredSchools.find((school) => school.slug === slug);
