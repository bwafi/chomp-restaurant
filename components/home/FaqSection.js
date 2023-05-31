import Image from 'next/image';
import React from 'react';
import Button from '../ui/Button';
import Link from 'next/link';

const FaqSection = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full gap-10 my-32 items-center">
      <div className="lg:w-6/12 w-full flex justify-center faq-pattern relative">
        <Image
          src="/img/faq-section.png"
          quality={60}
          alt="FAQ Image"
          width={450}
          height={450}
          className="object-cover"
        />
      </div>
      <div className="lg:w-5/12 md:w-8/12 w-full flex flex-col lg:items-start items-center">
        <h1 className="text-primary text-5xl text-center lg:text-left font-bold my-5">
          Order online with our simple checkout.
        </h1>
        <p className="text-paragraf text-lg leading-normal lg:text-left text-center">
          Here, you can find the answers you need. We've collected frequently asked questions to make it easier for you
          to find the information you need.
        </p>
        <Link href="/faq">
          <Button className="bg-button-wave mt-10 bg-primary text-white">See our FAQ</Button>
        </Link>
      </div>
    </section>
  );
};

export default FaqSection;
