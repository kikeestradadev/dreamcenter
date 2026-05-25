import Layout from '../templates/Layout';
import SectionPage from '../components/layout/SectionPage';

interface SimplePageProps {
  title: string;
  description: string;
}

const SimplePage = ({ title, description }: SimplePageProps) => (
  <Layout>
    <SectionPage title={title} description={description} breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: title }]} />
  </Layout>
);

export const BecasPage = () => (
  <SimplePage
    title="Becas para estudiantes"
    description="Programa de acceso gratuito o subsidado para personas de bajos recursos. Formulario y proceso fake."
  />
);

export const ComunidadPage = () => (
  <SimplePage title="Comunidad" description="Espacio para conectar estudiantes, mentores y graduados. Próximamente." />
);

export const BlogPage = () => (
  <SimplePage title="Blog" description="Artículos, guías y noticias sobre formación tecnológica accesible." />
);

export const LoginPage = () => (
  <SimplePage title="Inicia sesión" description="Autenticación fake — sin backend conectado." />
);

export const RegistroPage = () => (
  <SimplePage title="Comienza gratis" description="Registro de demostración para nuevos estudiantes." />
);

export const NosotrosPage = () => (
  <SimplePage
    title="¿Qué es DreamCenter?"
    description="Academia con misión social: formación tecnológica de calidad para quienes tienen menos oportunidades."
  />
);

export const SoportePage = () => (
  <SimplePage title="Soporte" description="Centro de ayuda y contacto con el equipo de DreamCenter." />
);

export const PrivacidadPage = () => (
  <SimplePage title="Política de privacidad" description="Documento legal placeholder." />
);

export const TerminosPage = () => (
  <SimplePage title="Términos y condiciones" description="Documento legal placeholder." />
);

export const FaqPage = () => (
  <SimplePage title="Preguntas frecuentes" description="Respuestas comunes sobre becas, cursos y acceso." />
);
