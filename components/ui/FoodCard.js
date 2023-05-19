import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { ProductContext } from '@/context/GlobalState';

export default function FoodCard({ type }) {
  const { products, addToCart } = ProductContext();

  let foods = [];

  if (type === 'burger') {
    foods = products.burgers;
  } else if (type === 'sides') {
    foods = products.sides;
  } else if (type === 'drinks') {
    foods = products.drinks;
  }

  return (
    <>
      {foods.map(({ id, name, image, description, price }) => {
        return (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            key={id}
            className="flex items-center justify-center bg-white rounded-md w-5/12 p-5 space-x-5 border border-[#35b8be]/20 hover:border-[#35b8be] shadow-sm">
            <div className="h-auto w-auto">
              <Image src={image} alt={name} width={120} height={120} className="rounded-lg" />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-primary">IDR {price}</p>
              </div>
              <p className="text-paragraf leading-normal text-[15px]">{description}</p>
              <div className="flex gap-5 mt-2 justify-end w-full">
                <button
                  className="py-2 rounded text-sm text-white px-4 bg-primary shadow-sm hover:contrast-125 transition-all duration-300"
                  onClick={() => addToCart(id)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
}
