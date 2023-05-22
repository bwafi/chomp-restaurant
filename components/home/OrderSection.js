import Image from 'next/image';
import React from 'react';
import Button from '../ui/Button';

const OrderSection = () => {
  return (
    <section className="w-full h-screen flex my-40 gap-5">
      <div className="w-6/12 h-full relative">
        <Image src="/img/group-photo.jpg" alt="Order Image" fill className="w-auto h-auto object-cover object-center" />
      </div>
      <div className="bg-primary w-6/12 px-16 py-6 flex justify-center flex-col bg-pattern-01 bg-no-repeat bg-contain bg-bottom">
        <h1 className="text-white text-[55px] font-bold leading-tight">
          <span className="text-[#1b9097]">Support</span> good food and local business.
        </h1>
        <Button className="my-10 w-5/12 bg-white text-primary">Order Now</Button>
      </div>
    </section>
  );
};

export default OrderSection;
