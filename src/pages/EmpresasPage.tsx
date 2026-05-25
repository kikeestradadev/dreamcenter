import { Link } from 'react-router-dom';
import Layout from '../templates/Layout';
import PageHeader from '../components/layout/PageHeader';

const features = [
  { title: 'Calidad de cursos', desc: 'Metodología clara en español, pensada para principiantes y personas sin recursos previos.' },
  { title: 'Supervisión de avances', desc: 'Estadísticas de estudio por equipo: horas, cursos terminados y progreso.' },
  { title: 'Licencias reasignables', desc: 'Asigna, elimina o reasigna accesos entre miembros de tu organización.' },
  { title: 'Soporte prioritario', desc: 'Atención por correo y chat para aliados y ONGs aliadas.' },
  { title: 'Certificados', desc: 'Cada participante puede obtener un certificado de culminación.' },
  { title: 'Factura unificada', desc: 'Un solo documento por el plan grupal de tu organización.' },
];

const EmpresasPage = () => (
  <Layout>
    <PageHeader
      title="DreamCenter para organizaciones"
      description="Capacita equipos, ONGs y aliados sociales. Sitio informativo — contacto demo fake, sin pasarela de pagos."
      breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Empresas' }]}
    />

    <section className="px-4 py-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 rounded-2xl border border-white/5 bg-brand-surface p-8 md:p-12">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Desarrolla equipos preparados para la tecnología
          </h2>
          <p className="mt-3 max-w-2xl text-white/60">
            Un equipo en constante capacitación está listo para asumir los retos de tu organización.
          </p>
          <Link
            id="contacto"
            to="/soporte"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue px-6 py-3 text-sm font-semibold text-brand-dark"
          >
            Solicitar información (demo)
          </Link>
        </div>

        <h2 className="mb-6 text-xl font-semibold text-white">¿Por qué capacitar con DreamCenter?</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article key={f.title} className="rounded-xl border border-white/5 bg-brand-surface p-5">
              <h3 className="font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/50">{f.desc}</p>
            </article>
          ))}
        </div>

        <blockquote className="mt-12 border-l-4 border-brand-cyan pl-6 italic text-white/70">
          Solo hay algo peor que formar a tus empleados y que se vayan… No formarlos y que se queden.
          <footer className="mt-2 text-sm not-italic text-white/40">— Henry Ford</footer>
        </blockquote>
      </div>
    </section>
  </Layout>
);

export default EmpresasPage;
