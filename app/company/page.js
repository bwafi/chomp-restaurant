import Layout from '@/components/Layout';
import AboutSection from '@/components/company/AboutSection';
import DetailSection from '@/components/company/DetailSection';
import HeroCompany from '@/components/company/Hero';

const Company = () => {
  return (
    <Layout>
      <HeroCompany />
      <AboutSection />
      <DetailSection />
    </Layout>
  );
};

export default Company;
