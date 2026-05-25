import { Link } from 'react-router-dom';
import type { Course } from '../../data/fakeCourses';
import { assetUrl } from '../../utils/assetUrl';

interface FeaturedCourseHeroProps {
  course: Course;
  badge?: string;
}

const FeaturedCourseHero = ({ course, badge = 'Próximo lanzamiento' }: FeaturedCourseHeroProps) => (
  <section className="border-b border-white/5 px-4 py-10 md:px-8 lg:px-12">
    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
      <div>
        {badge && (
          <span className="mb-3 inline-block rounded-full bg-brand-cyan/10 px-3 py-1 text-xs font-medium text-brand-cyan">
            {badge}
          </span>
        )}
        <h1 className="text-2xl font-bold text-white md:text-4xl">{course.title}</h1>
        <p className="mt-3 text-base text-white/60 md:text-lg">{course.subtitle}</p>
        <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/50">
          <span>{course.level}</span>
          <span>·</span>
          <span>{course.duration}</span>
          {course.students !== undefined && course.students > 0 && (
            <>
              <span>·</span>
              <span>{course.students.toLocaleString()} estudiantes</span>
            </>
          )}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to={`/cursos/${course.slug}`}
            className="rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue px-6 py-3 text-sm font-semibold text-brand-dark"
          >
            Ver detalles del curso
          </Link>
          {course.isFree && (
            <span className="rounded-full border border-green-500/30 px-6 py-3 text-sm text-green-400">
              Acceso gratuito
            </span>
          )}
        </div>
      </div>
      <Link to={`/cursos/${course.slug}`} className="block overflow-hidden rounded-xl border border-white/5">
        <img
          src={assetUrl(course.image)}
          alt={course.title}
          className="aspect-video w-full object-cover transition hover:scale-[1.02]"
        />
      </Link>
    </div>
  </section>
);

export default FeaturedCourseHero;
