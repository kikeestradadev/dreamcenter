import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface SectionPageProps {
  title: string;
  description: string;
  breadcrumbs?: Breadcrumb[];
  children?: ReactNode;
}

const SectionPage = ({ title, description, breadcrumbs, children }: SectionPageProps) => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8">
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/50" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {index > 0 && <span>/</span>}
              {crumb.href ? (
                <Link to={crumb.href} className="transition hover:text-brand-cyan">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white/80">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}

      <header className="mb-10 max-w-3xl">
        <h1 className="text-3xl font-bold text-white md:text-4xl">{title}</h1>
        <p className="mt-3 text-base text-white/60 md:text-lg">{description}</p>
      </header>

      {children ?? (
        <div className="rounded-xl border border-dashed border-white/10 bg-white/[0.02] p-10 text-center">
          <p className="text-white/50">
            Sección en construcción. Contenido fake — pronto conectaremos cursos reales.
          </p>
        </div>
      )}
    </div>
  );
};

export default SectionPage;
