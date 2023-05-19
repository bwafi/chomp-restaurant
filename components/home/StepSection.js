import Image from 'next/image';
import React from 'react';

export default function StepSection() {
  const step = [
    {
      src: '/img/step/step-01.png',
      title: 'Adapt your menu items',
      text: 'Easily adapt your menu using your device and allow customers to browse your items.',
    },
    {
      src: '/img/step/step-02.png',
      title: 'Accept online orders & takeout',
      text: 'Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.',
    },
    {
      src: '/img/step/step-03.png',
      title: 'Manage delivery or takeout',
      text: 'Manage your own logistics and take orders simply through the ecommerce system.',
    },
  ];

  return (
    <section className="w-full py-20">
      <div className="w-full mx-auto my-10">
        <h1 className="text-center text-[55px] text-primary font-bold">How it works.</h1>
      </div>
      <div className="flex gap-3">
        {step.map(({ src, title, text }) => {
          return (
            <div key={title} className="flex w-4/12 flex-col items-center">
              <Image src={src} alt="Step 1" width={350} height={350} className="w-auto h-auto" />
              <div>
                <h2 className="font-bold my-3 text-[22px] text-text text-center">{title}</h2>
                <p className="text-paragraf w-9/12 mx-auto text-lg leading-normal text-center">{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
