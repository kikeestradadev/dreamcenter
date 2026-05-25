import { Link, useLocation, useParams } from 'react-router-dom';
import Layout from '../templates/Layout';
import PageHeader from '../components/layout/PageHeader';
import CourseRow from '../components/academy/CourseRow';
import { getPathBySlug, getPathCourses, getPathDisplayImage } from '../data/paths';
import { getSchoolBySlug } from '../data/fakeCourses';
import { assetUrl } from '../utils/assetUrl';

const DynamicSectionPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { pathname } = useLocation();
  const isEscuelas = pathname.startsWith('/escuelas');

  const path = !isEscuelas && slug ? getPathBySlug(slug) : undefined;
  const school = isEscuelas && slug ? getSchoolBySlug(slug) : undefined;
  const pathCourses = path ? getPathCourses(path.slug) : [];
  const pathBanner = path ? getPathDisplayImage(path) : '';

  if (!path && !school) {
    return (
      <Layout>
        <PageHeader title="Sección no encontrada" breadcrumbs={[{ label: 'Inicio', href: '/' }]} />
        <div className="px-4 py-16 text-center">
          <Link to={isEscuelas ? '/escuelas' : '/rutas'} className="text-brand-cyan hover:underline">
            ← Volver
          </Link>
        </div>
      </Layout>
    );
  }

  if (path) {
    const hasBanner = Boolean(path.bannerImage);

    return (
      <Layout>
        <PageHeader
          title={hasBanner ? undefined : path.title}
          description={hasBanner ? undefined : path.description}
          breadcrumbs={[
            { label: 'Inicio', href: '/' },
            { label: 'Rutas', href: '/rutas' },
            { label: path.title },
          ]}
        />
        <section className="px-4 pb-8 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-xl border border-white/5 bg-brand-surface">
            <img
              src={assetUrl(pathBanner)}
              alt={path.title}
              className="block w-full h-auto object-contain"
            />
          </div>
          <div className="mx-auto mt-6 flex max-w-7xl flex-wrap gap-4 text-sm text-white/50">
            <span>{path.coursesCount} cursos</span>
            <span>·</span>
            <span>{path.hours} horas estimadas</span>
            <span>·</span>
            <span>Nivel: {path.level}</span>
          </div>
        </section>
        <CourseRow
          title="Cursos de esta ruta"
          subtitle="Contenido local — se conectará a Strapi"
          courses={pathCourses}
        />
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader
        title={school!.title}
        description={school!.description}
        breadcrumbs={[
          { label: 'Inicio', href: '/' },
          { label: 'Escuelas', href: '/escuelas' },
          { label: school!.title },
        ]}
      />
      <section className="px-4 pb-16 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <img
            src={assetUrl(school!.image)}
            alt={school!.title}
            className="rounded-xl border border-white/5 object-cover"
          />
          <div>
            <span className="rounded bg-brand-cyan/20 px-2 py-1 text-xs text-brand-cyan">{school!.category}</span>
            <p className="mt-4 text-white/60">{school!.description}</p>
            <p className="mt-4 text-sm text-white/50">{school!.coursesCount} cursos en esta escuela</p>
            <Link
              to="/cursos"
              className="mt-6 inline-block rounded-full bg-gradient-to-r from-brand-cyan to-brand-blue px-6 py-3 text-sm font-semibold text-brand-dark"
            >
              Ver cursos de la escuela
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DynamicSectionPage;
