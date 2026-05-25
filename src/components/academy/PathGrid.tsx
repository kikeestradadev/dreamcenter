import { Link } from 'react-router-dom';
import type { StudyPath } from '../../data/types';
import { getPathDisplayImage } from '../../data/paths';
import { assetUrl } from '../../utils/assetUrl';

interface PathGridProps {
  paths: StudyPath[];
  title?: string;
  subtitle?: string;
}

const PathGrid = ({
  paths,
  title = 'Todas nuestras rutas',
  subtitle = 'Elige un plan de estudio completo según tu objetivo profesional.',
}: PathGridProps) => (
  <section className="mb-16 px-4 md:px-8 lg:px-12">
    <div className="mb-8 max-w-2xl">
      <h2 className="text-lg font-semibold text-white md:text-xl">{title}</h2>
      <p className="mt-2 text-sm text-white/50 md:text-base">{subtitle}</p>
    </div>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {paths.map((path) => {
        const displayImage = getPathDisplayImage(path);
        const hasBanner = Boolean(path.bannerImage);

        return (
          <Link
            key={path.id}
            to={`/rutas/${path.slug}`}
            className="group overflow-hidden rounded-xl border border-white/5 bg-brand-surface transition hover:border-brand-cyan/30 hover:shadow-lg hover:shadow-brand-cyan/10"
          >
            <div className="overflow-hidden bg-brand-dark">
              <img
                src={assetUrl(displayImage)}
                alt={path.title}
                className="block h-auto w-full object-contain transition duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            {!hasBanner && (
              <div className="p-4">
                <h3 className="font-semibold text-white group-hover:text-brand-cyan">{path.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-white/50">{path.description}</p>
                <p className="mt-3 text-xs text-brand-cyan">
                  {path.coursesCount} cursos · {path.hours} horas
                </p>
              </div>
            )}
          </Link>
        );
      })}
    </div>
  </section>
);

export default PathGrid;
