import Layout from '../templates/Layout';
import PageHeader from '../components/layout/PageHeader';
import PathGrid from '../components/academy/PathGrid';
import { allPaths } from '../data/paths';

const RutasPage = () => (
  <Layout>
    <PageHeader
      title="Rutas de estudio"
      description="Planes guiados de desarrollo web, de nivel introductorio a experto."
      breadcrumbs={[{ label: 'Inicio', href: '/' }, { label: 'Rutas' }]}
    />

    <div className="overflow-x-hidden pb-8">
      <PathGrid
        paths={allPaths}
        title="Todas las rutas"
        subtitle="Cuatro niveles para formarte como desarrollador web"
      />
    </div>
  </Layout>
);

export default RutasPage;
