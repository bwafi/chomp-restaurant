import Image from 'next/image';
import React from 'react';

const DetailSection = () => {
  return (
    <section className="w-full h-screen bg-group-photo bg-cover bg-no-repeat bg-fixed min-h-[500px] flex justify-center items-center">
      <div className="w-full h-full flex justify-center items-center gap-32 backdrop-brightness-75 bg-black/20">
        <Detail count={53} />
        <Detail count={45} />
        <Detail count={76} />
        <Detail count={102} />
      </div>
    </section>
  );
};

const Detail = ({ count }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl text-white font-bold">{count}</h1>
      <Image src="/icon/wave-blue.svg" alt="wave blue" width={100} height={100} className="my-5" />
      <p className="text-white text-xl">Fiesty Menu Items</p>
    </div>
  );
};

export default DetailSection;
