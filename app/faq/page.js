import Container from '@/components/Container';
import Layout from '@/components/Layout';
import FaqPage from '@/components/faq/FaqPage';
import HeroFaq from '@/components/faq/Hero';

const Faq = () => {
  return (
    <Layout>
      <Container>
        <HeroFaq />
        <FaqPage />
      </Container>
    </Layout>
  );
};

export default Faq;
