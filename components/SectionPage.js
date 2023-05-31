import Image from 'next/image';
import Button from './ui/Button';
import Link from 'next/link';

export default function SectionPage({ target, link, button, src, className, title, paragraf }) {
  return (
    <section
      className={` ${className} flex bg-bg-content lg:flex-row flex-col w-full items-center gap-12 lg:gap-48 lg:mt-48 my-16`}>
      <div className="lg:w-6/12 md:w-8/12 w-full lg:block flex flex-col justify-center items-center">
        <h1 className="lg:w-10/12 w-full lg:text-left text-center my-5 leading-none font-bold text-primary text-5xl md:text-[55px]">
          {title}
        </h1>
        <p className="text-paragraf text-lg leading-normal lg:text-left text-center">{paragraf}</p>
        <Link href={`${link}`} target={target}>
          <Button className="my-10 bg-button-wave bg-primary text-white">{button}</Button>
        </Link>
      </div>
      <div>
        <Image src={src} alt="about" width={450} height={450} />
      </div>
    </section>
  );
}
