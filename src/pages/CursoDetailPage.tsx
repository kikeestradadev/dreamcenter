import { Link, useParams } from 'react-router-dom';
import Layout from '../templates/Layout';
import PageHeader from '../components/layout/PageHeader';
import { getCourseBySlug } from '../data/fakeCourses';
import { assetUrl } from '../utils/assetUrl';

const temarioDefault = [
  'Introducción y objetivos del curso',
  'Conceptos fundamentales',
  'Ejercicios y práctica',
  'Proyecto integrador',
  'Recursos y siguientes pasos',
];

const aprendizajesDefault = [
  'Comprender los conceptos base del tema',
  'Aplicar lo aprendido en ejercicios prácticos',
  'Desarrollar un proyecto demostrativo',
  'Conocer recursos para seguir aprendiendo',
];

const CursoDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = slug ? getCourseBySlug(slug) : undefined;

  if (!course) {
    return (
      <Layout>
        <PageHeader title="Curso no encontrado" breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Cursos', href: '/cursos' }, { label: 'No encontrado' }]} />
        <div className="px-4 py-16 text-center">
          <Link to="/cursos" className="text-brand-cyan hover:underline">← Volver al catálogo</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'Cursos', href: '/cursos' },
          { label: course.title },
        ]}
      />

      <section className="px-4 pb-16 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <img
              src={assetUrl(course.image)}
              alt={course.title}
              className="w-full rounded-xl border border-white/5 object-cover"
            />
          </div>
          <div className="lg:col-span-2">
            <div className="flex flex-wrap gap-2">
              {course.isFree && <span className="rounded bg-green-500/20 px-2 py-1 text-xs text-green-400">Gratis</span>}
              {course.isNew && <span className="rounded bg-brand-cyan/20 px-2 py-1 text-xs text-brand-cyan">Nuevo</span>}
              {course.isUpcoming && <span className="rounded bg-purple-500/20 px-2 py-1 text-xs text-purple-300">Próximo</span>}
              <span className="rounded bg-white/5 px-2 py-1 text-xs text-white/60">{course.level}</span>
              <span className="rounded bg-white/5 px-2 py-1 text-xs text-white/60">{course.category}</span>
            </div>
            <h1 className="mt-4 text-2xl font-bold text-white md:text-3xl">{course.title}</h1>
            <p className="mt-3 text-white/60">{course.subtitle}</p>
            <ul className="mt-6 space-y-2 text-sm text-white/50">
              <li>Duración estimada: {course.duration}</li>
              {course.students !== undefined && course.students > 0 && (
                <li>{course.students.toLocaleString()} personas interesadas</li>
              )}
              <li>Modalidad: Online</li>
            </ul>
            {course.isFree && (
              <p className="mt-4 text-sm text-green-400/90">Curso con acceso gratuito</p>
            )}
            <Link
              to="/becas"
              className="mt-8 inline-block rounded-full border border-white/15 px-6 py-3 text-sm text-white transition hover:bg-white/5"
            >
              Información sobre becas
            </Link>
            <p className="mt-6 text-xs text-white/40">
              Página informativa. Sin reproducción de video ni inscripción en línea por ahora.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-xl font-semibold text-white">Qué aprenderás</h2>
            <ul className="space-y-2 rounded-xl border border-white/5 bg-brand-surface p-6">
              {aprendizajesDefault.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-white/70">
                  <span className="text-brand-cyan">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-xl font-semibold text-white">Temario</h2>
            <ol className="space-y-2 rounded-xl border border-white/5 bg-brand-surface p-6">
              {temarioDefault.map((item, i) => (
                <li key={item} className="flex gap-3 text-sm text-white/70">
                  <span className="font-mono text-brand-cyan">{String(i + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl">
          <h2 className="mb-4 text-xl font-semibold text-white">Descripción</h2>
          <p className="rounded-xl border border-white/5 bg-brand-surface p-6 text-sm leading-relaxed text-white/60">
            {course.subtitle}. Este curso forma parte del catálogo informativo de DreamCenter,
            una academia enfocada en personas de bajos recursos. El contenido detallado se
            conectará a la plataforma educativa cuando esté disponible.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default CursoDetailPage;
