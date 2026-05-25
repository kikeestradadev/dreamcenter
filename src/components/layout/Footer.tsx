import { Link } from 'react-router-dom';
import { footerNav } from '../../config/navigation';

const Footer = () => {
  const sections = [footerNav.about, footerNav.connect, footerNav.products, footerNav.resources];

  return (
    <footer className="border-t border-white/5 bg-brand-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8">
        <div className="mb-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-4 text-sm font-semibold text-white">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/50 transition hover:text-brand-cyan"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-sm text-white/40">
          <p>© 2025 DreamCenter. Educación tecnológica accesible para todos.</p>
          <p className="mt-1 text-xs">Contenido de demostración — sin conexión a APIs reales.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
