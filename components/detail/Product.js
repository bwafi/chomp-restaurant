import { formatRp } from '@/context/formatRp';
import Image from 'next/image';
import React from 'react';

const Product = ({ item, addToCart }) => {
  return (
    <>
      {item && (
        <section className="py-20 lg:flex-row flex-col flex gap-10 items-center">
          <Image src={item.image} alt={item.name} width={480} height={480} className="rounded-2xl shrink-0" />
          <div className="px-3">
            <h1 className="font-bold text-[40px] capitalize">{item.name}</h1>
            <span className="text-primary font-semibold text-2xl">{formatRp(item.price)}</span>
            <div className="my-5 py-5 border-y border-y-primary/70">
              <p className="text-lg text-paragraf leading-normal">{item.description1}</p>
              <br />
              <p className="text-lg text-paragraf leading-normal">{item.description2}</p>
            </div>
            <button
              onClick={() => addToCart(item.id)}
              className="py-3 px-5 bg-primary rounded-md text-white hover:bg-primary/80 transition-opacity">
              Add To Cart
            </button>
          </div>
        </section>
      )}
    </>
  );
};

export default Product;
