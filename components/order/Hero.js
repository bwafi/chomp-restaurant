import React from 'react';

const HeroOrder = () => {
  return (
    <div className="w-full lg:h-[700px] h-[600px] flex items-center justify-center bg-alice lg:mt-0 mt-16">
      <h1 className="lg:w-[55%] w-full md:text-6xl text-5xl font-extrabold text-heading text-center">
        Get your food <span className="text-primary">delivered</span>, or <span className="text-primary">pick-up</span>{' '}
        in store.
      </h1>
    </div>
  );
};

export default HeroOrder;
