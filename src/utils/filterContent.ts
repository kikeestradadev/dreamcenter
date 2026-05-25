import type { Course, School, StudyPath } from '../data/types';

const normalize = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

export const matchesQuery = (query: string, ...fields: string[]) => {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return true;

  return fields.some((field) => normalize(field).includes(normalizedQuery));
};

export const filterCourses = (courses: Course[], query: string) =>
  courses.filter((course) =>
    matchesQuery(query, course.title, course.subtitle, course.category, course.level),
  );

export const filterPaths = (paths: StudyPath[], query: string) =>
  paths.filter((path) => matchesQuery(query, path.title, path.description));

export const filterSchools = (schools: School[], query: string) =>
  schools.filter((school) =>
    matchesQuery(query, school.title, school.description, school.category),
  );
