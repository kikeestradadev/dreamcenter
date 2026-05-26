import courseDetailsFile from './json/courseDetails.json';
import {
  defaultAudience,
  defaultLearnings,
  defaultModules,
  defaultObjective,
  defaultRequirements,
  isProjectWorkshopSlug,
  projectWorkshopDetail,
} from './courseDetailDefaults';
import type { Course } from './types';
import type { CourseDetail } from './types';

const courseDetails: CourseDetail[] = courseDetailsFile.courseDetails;

export const getCourseDetailBySlug = (slug: string): CourseDetail | undefined =>
  courseDetails.find((detail) => detail.slug === slug);

export const resolveCourseDetail = (course: Course): CourseDetail => {
  const detail = getCourseDetailBySlug(course.slug);
  const workshop = isProjectWorkshopSlug(course.slug) ? projectWorkshopDetail : null;

  return {
    slug: course.slug,
    note: detail?.note ?? workshop?.note,
    learnings: detail?.learnings.length ? detail.learnings : workshop?.learnings ?? defaultLearnings,
    objective: detail?.objective || workshop?.objective || defaultObjective,
    requirements: detail?.requirements || workshop?.requirements || defaultRequirements,
    audience: detail?.audience || workshop?.audience || defaultAudience,
    modules: detail?.modules.length ? detail.modules : workshop?.modules ?? defaultModules,
  };
};

export const allCourseDetails = courseDetails;
