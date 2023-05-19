import Image from 'next/image';
import React from 'react';
import aboutImg from '../../public/img/about.png';
import Button from '../ui/Button';

export default function About() {
  return (
    <section className="flex bg-bg-content w-full items-center gap-32 my-32">
      <div className="w-5/12">
        <h1 className="w-10/12 my-5 text-[55px] leading-none font-bold text-primary">The home of fresh products</h1>
        <p className="text-paragraf text-lg leading-normal">
          Welcome to our restaurant, a culinary destination that combines delicious food with an unforgettable
          experience. We proudly present to you a menu rich in flavors and culinary creations that will tantalize your
          taste buds.
        </p>
        <Button className="my-10 bg-button-wave bg-primary text-white">Learn about us</Button>
      </div>
      <div>
        <Image src={aboutImg} alt="about" />
      </div>
    </section>
  );
}
