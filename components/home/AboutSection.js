import SectionPage from '../SectionPage';

export default function AboutSection() {
  return (
    <SectionPage
      link="/company"
      button="Learn about us"
      title="The home of fresh products"
      paragraf="
          Apart from great food, we also offer a warm and comfortable atmosphere for you and your family to enjoy time
          together. Our friendly and professional service will make your visit an unforgettable experience.
        s"
      src={'/img/about-img.png'}
    />
  );
}
