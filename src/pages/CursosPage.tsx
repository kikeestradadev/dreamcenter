import Layout from '../templates/Layout';
import PageHeader from '../components/layout/PageHeader';
import FeaturedCourseHero from '../components/academy/FeaturedCourseHero';
import CourseRow from '../components/academy/CourseRow';
import CourseGrid from '../components/academy/CourseGrid';
import {
  newCourses,
  trendingCourses,
  upcomingCourses,
  allCourses,
} from '../data/fakeCourses';

const CursosPage = () => {
  const featured = newCourses[0];

  return (
    <Layout>
      <PageHeader
        title="Cursos de programación, diseño y emprendimiento"
        description="Catálogo informativo de demostración. Sin pagos ni inscripción real."
        breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Cursos' }]}
      />

      <FeaturedCourseHero course={featured} badge="Destacado" />

      <div id="proximos" className="overflow-x-hidden pb-8">
        <CourseRow
          title="Próximos lanzamientos"
          subtitle="Cursos que llegarán pronto a la plataforma"
          courses={upcomingCourses}
        />
      </div>

      <div id="tendencia">
        <CourseRow
          title="Cursos en tendencia"
          subtitle="Los más vistos esta semana"
          courses={trendingCourses}
        />
      </div>

      <CourseRow title="Nuevos cursos" subtitle="Recién agregados al catálogo" courses={newCourses} />

      <CourseGrid
        title="Todos los cursos"
        subtitle="Explora el catálogo completo de demostración"
        courses={allCourses}
      />
    </Layout>
  );
};

export default CursosPage;
