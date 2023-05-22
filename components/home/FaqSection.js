import Image from 'next/image';
import React from 'react';
import Button from '../ui/Button';

const FaqSection = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full my-32 items-center">
      <div className="lg:w-6/12 w-full faq-pattern relative">
        <Image src="/img/faq-img.png" alt="FAQ Image" width={550} height={550} className="object-cover" />
      </div>
      <div className="lg:w-5/12 w-full flex flex-col items-center">
        <h1 className="text-primary text-5xl text-center lg:text-left font-bold my-5">
          Order online with our simple checkout.
        </h1>
        <p className="text-paragraf text-lg leading-normal lg:text-left text-center">
          Here, you can find the answers you need. We've collected frequently asked questions to make it easier for you
          to find the information you need.
        </p>
        <Button className="bg-button-wave w-10/12 mt-10 bg-primary text-white">See our FAQ</Button>
      </div>
    </section>
  );
};

export default FaqSection;
