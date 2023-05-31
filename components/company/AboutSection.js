import AboutPage from '../SectionPage';
import Container from '../Container';

const AboutSection = () => {
  return (
    <Container>
      <AboutPage
        link="/company"
        button="Learn about us"
        title="The home of fresh products"
        paragraf="Apart from great food, we also offer a warm and comfortable atmosphere for you and your family to enjoy time together. Our friendly and professional service will make your visit an unforgettable experience"
        src="/img/team-img.png"
        className="bg-none mb-32"
      />
    </Container>
  );
};

export default AboutSection;
