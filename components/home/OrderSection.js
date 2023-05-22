import Image from 'next/image';
import React from 'react';

const OrderSection = () => {
  return (
    <section className="w-full h-[800px] lg:h-[600px] flex lg:flex-row flex-col my-40 gap-5">
      <div className="lg:w-6/12 w-full h-full relative">
        <Image src="/img/group-photo.jpg" alt="Order Image" fill className="w-auto h-auto object-cover object-center" />
      </div>
      <div className="bg-primary lg:w-6/12 w-full lg:px-16 px-3 py-6 flex justify-center flex-col bg-pattern-01 bg-no-repeat bg-contain bg-left-bottom">
        <h1 className="text-white md:text-[55px] text-[44px] font-bold leading-tight">
          <span className="text-[#1b9097]">Support</span> good food and local business.
        </h1>
        <div className="w-full md:w-6/12">
          <button className="mt-10 bg-white text-primary py-5 px-16 rounded">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
