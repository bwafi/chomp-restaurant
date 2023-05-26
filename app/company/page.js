import Container from '@/components/Container';
import Layout from '@/components/Layout';
import AboutSection from '@/components/company/AboutSection';
import HeroCompany from '@/components/company/Hero';

const Company = () => {
  return (
    <Layout>
      <Container>
        <HeroCompany />
        <AboutSection />
      </Container>
    </Layout>
  );
};

export default Company;
