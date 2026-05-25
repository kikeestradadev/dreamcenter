import Layout from '../templates/Layout';
import HomeHeroBanner from '../components/academy/HomeHeroBanner';
import FeaturedPaths from '../components/academy/FeaturedPaths';
import { allPaths } from '../data/paths';

const HomePage = () => {
  return (
    <Layout>
      <div className="relative overflow-x-hidden pb-8 pt-6 md:pt-8">
        <HomeHeroBanner />
        <FeaturedPaths
          paths={allPaths}
          title="Rutas de estudio"
          subtitle="Elige un plan guiado y explora los cursos de cada ruta"
        />
      </div>
    </Layout>
  );
};

export default HomePage;
