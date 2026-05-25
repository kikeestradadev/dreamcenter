import { Link } from 'react-router-dom';
import { authNav, mainNav, secondaryNav } from '../../config/navigation';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-label="Cerrar menú"
      />

      <aside className="absolute right-0 top-0 flex h-full w-[min(100%,20rem)] flex-col bg-brand-surface shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
          <span className="font-semibold text-white">Menú</span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 hover:bg-white/5"
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-4" aria-label="Menú móvil">
          <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-white/40">
            Explorar
          </p>
          {mainNav.map((item) => (
            <div key={item.label} className="mb-4">
              <Link
                to={item.href ?? '/'}
                onClick={onClose}
                className="block rounded-lg px-3 py-2 text-base font-medium text-white"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-3 space-y-1 border-l border-white/10 pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      onClick={onClose}
                      className="block rounded-lg px-3 py-2 text-sm text-white/60 hover:text-white"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <p className="px-3 pb-2 pt-4 text-xs font-semibold uppercase tracking-wider text-white/40">
            Más
          </p>
          {secondaryNav.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={onClose}
              className="block rounded-lg px-3 py-2 text-sm text-white/70 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-2 border-t border-white/10 p-4">
          <Link
            to={authNav.login.href}
            onClick={onClose}
            className="block rounded-lg border border-white/10 px-4 py-2.5 text-center text-sm text-white"
          >
            {authNav.login.label}
          </Link>
          <Link
            to={authNav.signup.href}
            onClick={onClose}
            className="block rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue px-4 py-2.5 text-center text-sm font-semibold text-brand-dark"
          >
            {authNav.signup.label}
          </Link>
        </div>
      </aside>
    </div>
  );
};

export default MobileMenu;
