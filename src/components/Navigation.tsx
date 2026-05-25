import { Link, useLocation } from 'react-router-dom';
import { assetUrl } from '../utils/assetUrl';

const navLinks = [
  { label: 'Cursos', to: '/' },
  { label: 'Rutas', to: '/' },
  { label: 'Escuelas', to: '/' },
  { label: 'Empresas', to: '/page2' },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-brand-dark via-brand-dark/80 to-transparent">
      <div className="mx-auto flex h-16 max-w-[1920px] items-center justify-between px-4 md:px-8 lg:px-12">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={assetUrl('images/logo-academy.png')}
              alt="DreamCenter"
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="hidden text-lg font-bold tracking-tight text-white sm:inline">
              Dream<span className="text-brand-cyan">Center</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`rounded-md px-3 py-2 text-sm transition ${
                  location.pathname === link.to && link.label === 'Cursos'
                    ? 'font-semibold text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white sm:block"
            aria-label="Buscar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
          <button
            type="button"
            className="rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue px-4 py-2 text-sm font-semibold text-brand-dark transition hover:opacity-90"
          >
            Ingresar
          </button>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-surface text-xs font-bold text-brand-cyan ring-2 ring-brand-cyan/30">
            E
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
