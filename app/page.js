import Container from '@/components/Container';
import AboutSection from '@/components/home/AboutSection';
import BrowseMenuSection from '@/components/home/BrowseMenuSection';
import ContactSection from '@/components/home/ContactSection';
import FaqSection from '@/components/home/FaqSection';
import HeroSection from '@/components/home/HeroSection';
import OrderSection from '@/components/home/OrderSection';
import StepSection from '@/components/home/StepSection';
import Layout from '@/components/Layout';
import { GlobalProvider } from '@/context/GlobalState';

export default function Home() {
  return (
    <GlobalProvider>
      <Layout>
        <Container>
          <HeroSection />
          <AboutSection />
          <StepSection />
          <BrowseMenuSection />
          <FaqSection />
          <ContactSection />
          <OrderSection />
        </Container>
      </Layout>
    </GlobalProvider>
  );
}
