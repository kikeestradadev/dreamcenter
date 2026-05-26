import type { Breadcrumb } from '../components/layout/PageHeader';
import { getPathForCourseSlug } from '../data/paths';
import type { Course } from '../data/types';

export const getCourseBreadcrumbs = (course: Course): Breadcrumb[] => {
  const path = getPathForCourseSlug(course.slug);

  if (path) {
    return [
      { label: 'Inicio', href: '/' },
      { label: 'Rutas', href: '/rutas' },
      { label: path.title, href: `/rutas/${path.slug}` },
      { label: course.title },
    ];
  }

  return [
    { label: 'Inicio', href: '/' },
    { label: course.title },
  ];
};

export const getCourseNotFoundBreadcrumbs = (): Breadcrumb[] => [
  { label: 'Inicio', href: '/' },
  { label: 'No encontrado' },
];
