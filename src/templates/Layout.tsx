import type { ReactNode } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-brand-dark text-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
