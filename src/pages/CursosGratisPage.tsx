import Layout from '../templates/Layout';
import PageHeader from '../components/layout/PageHeader';
import CourseGrid from '../components/academy/CourseGrid';
import CourseRow from '../components/academy/CourseRow';
import { freeCourses, trendingCourses } from '../data/fakeCourses';

const CursosGratisPage = () => (
  <Layout>
    <PageHeader
      title="Cursos gratis"
      description="Acceso libre para empezar a aprender sin barreras económicas. Ideal para beneficiarios de becas DreamCenter."
      breadcrumbs={[
        { label: 'Inicio', href: '/' },
        { label: 'Cursos', href: '/cursos' },
        { label: 'Gratis' },
      ]}
    />

    <div className="overflow-x-hidden pb-8">
      <CourseRow
        title="Empieza aquí"
        subtitle="Los mejores cursos para dar tu primer paso"
        courses={freeCourses}
      />
      <CourseGrid
        title="También gratis en el catálogo"
        subtitle="Cursos de tendencia con acceso gratuito"
        courses={trendingCourses.filter((c) => c.isFree)}
      />
      <CourseGrid title="Catálogo gratuito completo" courses={freeCourses} />
    </div>
  </Layout>
);

export default CursosGratisPage;
