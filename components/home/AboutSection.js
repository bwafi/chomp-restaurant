import Image from 'next/image';
import React from 'react';
import aboutImg from '../../public/img/about.png';
import Button from '../ui/Button';

export default function AboutSection() {
  return (
    <section className="flex bg-bg-content lg:flex-row flex-col w-full items-center gap-12 lg:gap-32 my-32">
      <div className="lg:w-5/12 md:w-8/12 w-full lg:block flex flex-col justify-center items-center">
        <h1 className="lg:w-10/12 w-full lg:text-left text-center my-5 leading-none font-bold text-primary text-5xl md:text-[55px]">
          The home of fresh products
        </h1>
        <p className="text-paragraf text-lg leading-normal lg:text-left text-center">
          Apart from great food, we also offer a warm and comfortable atmosphere for you and your family to enjoy time
          together. Our friendly and professional service will make your visit an unforgettable experience.
        </p>
        <Button className="my-10 w-10/12 md:w-auto bg-button-wave bg-primary text-white">Learn about us</Button>
      </div>
      <div>
        <Image src={aboutImg} alt="about" />
      </div>
    </section>
  );
}
