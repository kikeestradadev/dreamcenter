import { Link } from 'react-router-dom';
import type { NavGroup } from '../../config/navigation';

interface NavDropdownProps {
  item: NavGroup;
}

const NavDropdown = ({ item }: NavDropdownProps) => {
  if (!item.children?.length) {
    return (
      <Link
        to={item.href ?? '/'}
        className="rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        to={item.href ?? '/'}
        className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
      >
        {item.label}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 opacity-60">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
        </svg>
      </Link>

      <div className="pointer-events-none absolute left-0 top-full z-50 min-w-[16rem] pt-2 opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-brand-surface shadow-xl">
          {item.children.map((child) => (
            <Link
              key={child.href}
              to={child.href}
              className="block border-b border-white/5 px-4 py-3 transition last:border-0 hover:bg-white/5"
            >
              <span className="block text-sm font-medium text-white">{child.label}</span>
              {child.description && (
                <span className="mt-0.5 block text-xs text-white/50">{child.description}</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavDropdown;
