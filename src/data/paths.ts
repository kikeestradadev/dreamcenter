import pathsFile from './json/paths.json';
import { getCourseBySlug, parseDurationHours } from './courses';
import type { Course, PathRecord, StudyPath } from './types';

const pathRecords: PathRecord[] = pathsFile.paths;

const enrichPath = (record: PathRecord): StudyPath => {
  const courses = record.courseSlugs
    .map((slug) => getCourseBySlug(slug))
    .filter((course): course is Course => Boolean(course));

  return {
    id: record.id,
    slug: record.slug,
    title: record.title,
    description: record.description,
    level: record.level,
    image: record.image,
    bannerImage: record.bannerImage,
    featured: record.featured,
    coursesCount: courses.length,
    hours: courses.reduce((total, course) => total + parseDurationHours(course.duration), 0),
  };
};

export const allPaths: StudyPath[] = pathRecords.map(enrichPath);

export const featuredPaths: StudyPath[] = allPaths.filter((path) => path.featured);

export const getPathBySlug = (slug: string): StudyPath | undefined =>
  allPaths.find((path) => path.slug === slug);

export const getPathCourses = (pathSlug: string): Course[] => {
  const record = pathRecords.find((path) => path.slug === pathSlug);
  if (!record) return [];

  return record.courseSlugs
    .map((slug) => getCourseBySlug(slug))
    .filter((course): course is Course => Boolean(course));
};

export const getPathRecordBySlug = (slug: string): PathRecord | undefined =>
  pathRecords.find((path) => path.slug === slug);

/** Imagen principal de la ruta — prioriza banner del JSON local */
export const getPathDisplayImage = (path: Pick<StudyPath, 'bannerImage' | 'image'>): string =>
  path.bannerImage ?? path.image;
