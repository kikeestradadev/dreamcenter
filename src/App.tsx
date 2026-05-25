import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import HomePage from './pages/HomePage';
import CursosPage from './pages/CursosPage';
import CursosGratisPage from './pages/CursosGratisPage';
import RutasPage from './pages/RutasPage';
import EscuelasPage from './pages/EscuelasPage';
import EmpresasPage from './pages/EmpresasPage';
import DynamicSectionPage from './pages/DynamicSectionPage';
import CursoDetailPage from './pages/CursoDetailPage';
import {
  BecasPage,
  BlogPage,
  ComunidadPage,
  FaqPage,
  LoginPage,
  NosotrosPage,
  PrivacidadPage,
  RegistroPage,
  SoportePage,
  TerminosPage,
} from './pages/SimplePages';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cursos" element={<CursosPage />} />
        <Route path="/cursos/gratis" element={<CursosGratisPage />} />
        <Route path="/cursos/:slug" element={<CursoDetailPage />} />
        <Route path="/rutas" element={<RutasPage />} />
        <Route path="/rutas/:slug" element={<DynamicSectionPage />} />
        <Route path="/escuelas" element={<EscuelasPage />} />
        <Route path="/escuelas/:slug" element={<DynamicSectionPage />} />
        <Route path="/empresas" element={<EmpresasPage />} />
        <Route path="/becas" element={<BecasPage />} />
        <Route path="/comunidad" element={<ComunidadPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/soporte" element={<SoportePage />} />
        <Route path="/privacidad" element={<PrivacidadPage />} />
        <Route path="/terminos" element={<TerminosPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
