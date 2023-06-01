import React from 'react';
import { BsPlus } from 'react-icons/bs';
import { BsDash } from 'react-icons/bs';
import { ProductContext } from '@/context/GlobalState';

const CountCard = ({ item }) => {
  const { increaseQuantity, decreaseQuantity } = ProductContext();
  return (
    <>
      <button
        className="border-l p-1 group-hover:border-slate-300 transition-colors"
        onClick={() => decreaseQuantity(item.id)}>
        <BsDash className="hover:scale-150 transition-transform" />
      </button>

      <input
        type="text"
        value={item.quantity}
        min={1}
        readOnly
        className="w-10 text-center px-1 group-hover:bg-gray-200 transition-colors"
      />
      <button
        className="border-r p-1 group-hover:border-slate-300 transition-colors"
        onClick={() => increaseQuantity(item.id)}>
        <BsPlus className="hover:scale-150 transition-transform" />
      </button>
    </>
  );
};

export default CountCard;
