import React from 'react';
import Button from '../ui/Button';
import Image from 'next/image';
import trustPilot from '../../public/logo/trustpilot-logo.svg';
import heroImg from '../../public/img/hero-img.png';

export default function Hero() {
  return (
    <section className="bg-white flex w-full mt-32 mb-56 relative items-center gap-20">
      <div className="flex flex-col w-6/12 space-y-5">
        <h1 className="font-bold text-6xl ">
          Beautiful food & takeaway, <span className="text-primary">delivered</span> to your door.
        </h1>
        <p className="text-paragraf">
          Selamat datang di restoran kami, tempat di mana kelezatan bertemu kenyamanan! Nikmati suasana yang hangat dan
          ramah sambil menikmati hidangan lezat dari dapur kami.
        </p>
        <div className="py-5">
          <Button className="bg-button-wave bg-primary text-white hover:contrast-125 transition-all duration-300">
            Place an Order
          </Button>
        </div>
        <div>
          <Image src={trustPilot} alt="trust Pilot logo" className="mb-2" />
          <p className="text-text">
            <span className="text-primary pl-1">4.8 out of 5</span> based on 2000+ reviews
          </p>
        </div>
      </div>
      <div className="relative">
        <Image src={heroImg} alt="Hero Image" className="" />
      </div>
    </section>
  );
}
