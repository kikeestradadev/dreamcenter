import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title?: string;
  description?: string;
  breadcrumbs?: Breadcrumb[];
  children?: ReactNode;
}

const PageHeader = ({ title, description, breadcrumbs, children }: PageHeaderProps) => (
  <div className="border-b border-white/5 px-4 py-8 md:px-8 lg:px-12">
    <div className="mx-auto max-w-7xl">
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="mb-4 flex flex-wrap items-center gap-2 text-sm text-white/50" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {index > 0 && <span>/</span>}
              {crumb.href ? (
                <Link to={crumb.href} className="transition hover:text-brand-cyan">{crumb.label}</Link>
              ) : (
                <span className="text-white/80">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      )}
      {title && <h1 className="text-2xl font-bold text-white md:text-3xl">{title}</h1>}
      {description && <p className="mt-2 max-w-3xl text-white/60">{description}</p>}
      {children}
    </div>
  </div>
);

export default PageHeader;
