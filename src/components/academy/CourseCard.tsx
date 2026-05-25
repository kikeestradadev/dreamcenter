import { Link } from 'react-router-dom';
import type { Course } from '../../data/fakeCourses';
import { assetUrl } from '../../utils/assetUrl';

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link to={`/cursos/${course.slug}`} className="course-card group relative block w-full">
      <div className="course-card__inner relative w-full rounded-md bg-brand-surface shadow-lg transition-[transform,box-shadow] duration-300 ease-out">
        <div className="course-card__media relative overflow-hidden rounded-md bg-brand-dark">
          <img
            src={assetUrl(course.image)}
            alt={course.title}
            className="block w-full h-auto object-contain p-1"
            loading="lazy"
          />

          {course.isFree && (
            <span className="absolute left-2 top-2 rounded bg-green-500/90 px-2 py-0.5 text-[10px] font-bold uppercase text-white">
              Gratis
            </span>
          )}
          {course.isNew && !course.isFree && (
            <span className="absolute left-2 top-2 rounded bg-brand-cyan px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-dark">
              Nuevo
            </span>
          )}
          {course.isUpcoming && (
            <span className="absolute left-2 top-2 rounded bg-purple-500/90 px-2 py-0.5 text-[10px] font-bold uppercase text-white">
              Próximo
            </span>
          )}
        </div>

        <div className="course-card__expand absolute left-0 right-0 top-full z-10 rounded-b-md bg-brand-surface opacity-0 shadow-xl transition-[opacity,transform] duration-300 group-hover:opacity-100">
          <div className="space-y-2 p-3">
            <p className="text-xs text-white/60">{course.duration}</p>
            <h3 className="text-sm font-semibold text-white">{course.title}</h3>
            <p className="text-xs text-white/60">{course.subtitle}</p>
            <div className="flex flex-wrap gap-1.5">
              <span className="rounded border border-white/20 px-1.5 py-0.5 text-[10px] text-brand-cyan">
                {course.level}
              </span>
              <span className="rounded border border-white/20 px-1.5 py-0.5 text-[10px] text-white/70">
                {course.category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
