import Container from '@/components/Container';
import About from '@/components/home/About';
import BrowseMenu from '@/components/home/BrowseMenu';
import Hero from '@/components/home/Hero';
import SectionFaq from '@/components/home/SectionFaq';
import StepSection from '@/components/home/StepSection';
import Layout from '@/components/Layout';
import { GlobalProvider } from '@/context/GlobalState';

export default function Home() {
  return (
    <GlobalProvider>
      <Layout>
        <Container>
          <Hero />
          <About />
          <StepSection />
          <BrowseMenu />
          <SectionFaq />
        </Container>
      </Layout>
    </GlobalProvider>
  );
}
