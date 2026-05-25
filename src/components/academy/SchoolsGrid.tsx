import { Link } from 'react-router-dom';
import type { School } from '../../data/fakeCourses';
import { assetUrl } from '../../utils/assetUrl';

interface SchoolsGridProps {
  schools: School[];
  title?: string;
  subtitle?: string;
  showBrowseAll?: boolean;
}

const SchoolsGrid = ({
  schools,
  title = 'Escuelas destacadas',
  subtitle = 'Especialízate por área con contenido curado para tu crecimiento profesional.',
  showBrowseAll = true,
}: SchoolsGridProps) => {
  return (
    <section className="mb-16 px-4 md:px-8 lg:px-12">
      <div className="mb-8 max-w-2xl">
        <h2 className="text-lg font-semibold text-white md:text-xl">{title}</h2>
        <p className="mt-2 text-sm text-white/50 md:text-base">{subtitle}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {schools.map((school) => (
          <Link
            key={school.id}
            to={`/escuelas/${school.slug}`}
            className="group/school relative overflow-hidden rounded-xl border border-white/5 bg-brand-surface transition hover:border-brand-cyan/30 hover:shadow-xl hover:shadow-brand-cyan/10"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={assetUrl(school.image)}
                alt={school.title}
                className="h-full w-full object-cover transition duration-500 group-hover/school:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <span className="mb-2 inline-block rounded bg-brand-cyan/20 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-brand-cyan">
                {school.category}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-white">{school.title}</h3>
              <p className="line-clamp-2 text-sm text-white/60">{school.description}</p>
              <p className="mt-2 text-xs text-white/40">{school.coursesCount} cursos</p>
            </div>
          </Link>
        ))}

        {showBrowseAll && (
          <Link
            to="/escuelas"
            className="flex min-h-[280px] flex-col items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/[0.02] p-8 text-center transition hover:border-brand-cyan/40 hover:bg-brand-cyan/5"
          >
            <span className="mb-3 text-3xl">→</span>
            <h3 className="mb-2 font-semibold text-white">Todas las escuelas</h3>
            <p className="text-sm text-white/50">Explora el catálogo completo</p>
          </Link>
        )}
      </div>
    </section>
  );
};

export default SchoolsGrid;
