import { Link } from 'react-router-dom';
import type { Course } from '../../data/fakeCourses';
import { assetUrl } from '../../utils/assetUrl';

interface CourseGridProps {
  courses: Course[];
  title?: string;
  subtitle?: string;
}

const CourseGrid = ({ courses, title, subtitle }: CourseGridProps) => (
  <section className="mb-16 px-4 md:px-8 lg:px-12">
    {(title || subtitle) && (
      <div className="mb-8 max-w-2xl">
        {title && <h2 className="text-lg font-semibold text-white md:text-xl">{title}</h2>}
        {subtitle && <p className="mt-2 text-sm text-white/50">{subtitle}</p>}
      </div>
    )}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {courses.map((course) => (
        <Link
          key={course.id}
          to={`/cursos/${course.slug}`}
          className="group overflow-hidden rounded-xl border border-white/5 bg-brand-surface transition hover:border-brand-cyan/30"
        >
          <div className="aspect-video overflow-hidden">
            <img
              src={assetUrl(course.image)}
              alt={course.title}
              className="h-full w-full object-cover transition group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {course.isFree && (
                <span className="rounded bg-green-500/20 px-2 py-0.5 text-[10px] font-medium text-green-400">Gratis</span>
              )}
              <span className="rounded bg-white/5 px-2 py-0.5 text-[10px] text-white/60">{course.level}</span>
            </div>
            <h3 className="font-semibold text-white group-hover:text-brand-cyan">{course.title}</h3>
            <p className="mt-1 line-clamp-2 text-sm text-white/50">{course.subtitle}</p>
            <p className="mt-2 text-xs text-white/40">{course.duration}{course.students ? ` · ${course.students.toLocaleString()} estudiantes` : ''}</p>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default CourseGrid;
