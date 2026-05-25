import Layout from '../templates/Layout';
import PageHeader from '../components/layout/PageHeader';
import SchoolsGrid from '../components/academy/SchoolsGrid';
import { featuredSchools } from '../data/fakeCourses';

const EscuelasPage = () => (
  <Layout>
    <PageHeader
      title="Escuelas destacadas"
      description="Especialízate por área con contenido curado. Cada escuela agrupa cursos y rutas de un mismo campo."
      breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Escuelas' }]}
    />
    <SchoolsGrid schools={featuredSchools} showBrowseAll={false} />
  </Layout>
);

export default EscuelasPage;
