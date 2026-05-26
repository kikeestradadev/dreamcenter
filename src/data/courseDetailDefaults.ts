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
    'Nota importante: este no es un curso adicional del módulo. Es un tiempo reservado para la realización de un proyecto integrador, donde aplicarás todos los conocimientos aprendidos bajo la supervisión del profesor.',
  objective:
    'Dar la oportunidad a los estudiantes de participar en un proyecto que emula un entorno laboral real, para integrar todos los conocimientos adquiridos en el módulo.',
  requirements:
    'Haber terminado todos los cursos correspondientes al módulo, ya que esos conocimientos son los que se integrarán en el proyecto.',
  audience:
    'Dirigido a quien desee consolidar su aprendizaje en el mundo de la tecnología web y haya completado los cursos correspondientes al módulo.',
  learnings: [
    'Integrar todos los conocimientos adquiridos.',
    'Adquirir experiencia al trabajar en un proyecto.',
    'Simular lo que ocurre en un entorno laboral real.',
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
