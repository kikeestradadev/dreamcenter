import type { CourseModule } from './types';

export const defaultLearnings = [
  'Comprender los conceptos base del tema',
  'Aplicar lo aprendido en ejercicios prácticos',
  'Desarrollar un proyecto demostrativo',
  'Conocer recursos para seguir aprendiendo',
];

export const defaultModules: CourseModule[] = [
  {
    title: 'Introducción y objetivos del curso',
    topics: ['Contenido en preparación'],
  },
  {
    title: 'Conceptos fundamentales',
    topics: ['Contenido en preparación'],
  },
  {
    title: 'Ejercicios y práctica',
    topics: ['Contenido en preparación'],
  },
  {
    title: 'Proyecto integrador',
    topics: ['Contenido en preparación'],
  },
  {
    title: 'Recursos y siguientes pasos',
    topics: ['Contenido en preparación'],
  },
];

export const defaultObjective =
  'El contenido detallado de este curso se publicará próximamente en DreamCenter.';

export const defaultRequirements = 'Por definir.';

export const defaultAudience = 'Por definir.';

export const isProjectWorkshopSlug = (slug: string): boolean =>
  slug.startsWith('proyecto-final-');

export const projectWorkshopDetail = {
  note:
    'Nota importante: este no es un curso adicional del módulo. Es un espacio reservado para desarrollar un proyecto integrador, donde aplicarás los conocimientos adquiridos en los cursos de la ruta bajo la supervisión del profesor.',
  objective:
    'Dar la oportunidad de participar en un proyecto que emula un entorno laboral real, aplicando los conocimientos adquiridos en los cursos del módulo.',
  requirements:
    'Contar con conocimientos de los cursos que componen la ruta, según los temas que vayas a utilizar en tu proyecto. No es necesario haber completado todos los cursos antes de participar.',
  audience:
    'Dirigido a quien desee consolidar su aprendizaje aplicando en la práctica los contenidos vistos en los cursos del módulo.',
  learnings: [
    'Aplicar los conocimientos adquiridos en los cursos del módulo.',
    'Adquirir experiencia al trabajar en un proyecto real.',
    'Simular lo que ocurre en un entorno laboral.',
  ],
  modules: [
    {
      title: 'Temario',
      topics: [
        'Enunciado del proyecto',
        'Toma de requerimientos',
        'Seguimiento del proyecto',
        'Presentación del proyecto',
      ],
    },
  ],
};
