import Layout from '../templates/Layout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ContentSection from '../components/ContentSection';

const Page1 = () => {
  return (
    <Layout>
      <Header />
      <Hero />
      <ContentSection />
    </Layout>
  );
};

export default Page1;

