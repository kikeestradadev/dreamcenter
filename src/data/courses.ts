import coursesFile from './json/courses.json';
import type { Course } from './types';

export const parseDurationHours = (duration: string): number => {
  const match = duration.match(/(\d+)/);
  return match ? Number(match[1]) : 0;
};

export const allCourses: Course[] = coursesFile.courses;

export const getCourseBySlug = (slug: string): Course | undefined => {
  const matches = allCourses.filter((course) => course.slug === slug);
  if (matches.length === 0) return undefined;
  if (matches.length === 1) return matches[0];

  return (
    matches.find((course) => course.id.startsWith('dw-')) ??
    matches.find((course) => course.category === 'Desarrollo Web') ??
    matches[0]
  );
};

export const freeCourses = allCourses.filter((course) => course.isFree);

export const newCourses = allCourses.filter((course) => course.isNew);

export const trendingCourses = allCourses.filter(
  (course) => !course.isFree && !course.isNew && !course.isUpcoming,
);

export const upcomingCourses = allCourses.filter((course) => course.isUpcoming);

export const continueWatching = allCourses.slice(0, 5);

export const getRandomCourses = (count = 12): Course[] => {
  const shuffled = [...allCourses];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
};
