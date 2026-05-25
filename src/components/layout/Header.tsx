import { Link } from 'react-router-dom';
import { assetUrl } from '../../utils/assetUrl';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-brand-dark/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2.5">
          <img
            src={assetUrl('images/logo-academy.png')}
            alt="DreamCenter"
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="hidden text-lg font-bold text-white sm:inline">
            Dream<span className="text-brand-cyan">Center</span>
          </span>
        </Link>

        <Link
          to="/soporte"
          className="rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue px-4 py-2 text-sm font-semibold text-brand-dark transition hover:opacity-90"
        >
          Contáctanos
        </Link>
      </div>
    </header>
  );
};

export default Header;
