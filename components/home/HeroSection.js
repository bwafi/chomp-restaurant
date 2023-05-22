import React from 'react';
import Button from '../ui/Button';
import Image from 'next/image';
import trustPilot from '../../public/logo/trustpilot-logo.svg';
import heroImg from '../../public/img/hero-img.png';

export default function HeroSection() {
  return (
    <section className="bg-white flex flex-col lg:flex-row w-full mt-32 mb-32 md:mb-32 justify-center items-center gap-20">
      <div className="flex flex-col lg:items-start items-center lg:w-6/12 md:w-10/12 w-full lg:space-y-5 space-y-7">
        <h1 className="font-bold md:text-6xl text-5xl lg:text-left text-center">
          Beautiful food & takeaway, <span className="text-primary">delivered</span> to your door.
        </h1>
        <p className="text-paragraf text-lg lg:text-base lg:text-left text-center leading-snug">
          Welcome to our restaurant, a place where deliciousness meets comfort! Enjoy a warm and friendly atmosphere
          while enjoying delicious dishes from our kitchen.
        </p>
        <Button className="bg-button-wave bg-primary text-white">Place an Order</Button>
        <div className="mx-auto lg:mx-0">
          <Image src={trustPilot} alt="trust Pilot logo" className="mb-2 lg:mx-0 mx-auto" />
          <p className="text-heading">
            <span className="text-primary pl-1">4.8 out of 5</span> based on 2000+ reviews
          </p>
        </div>
      </div>
      <div>
        <Image src={heroImg} alt="Hero Image" />
      </div>
    </section>
  );
}
