'use client';
import React from 'react';
import { IoClose } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ProductContext } from '@/context/GlobalState';
import { formatRp } from '@/context/formatRp';
import CountCard from './ui/CountCard';

export default function Cart({ className, showCart, setShowCart }) {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = ProductContext();

  return (
    <AnimatePresence>
      {showCart && (
        <motion.div
          initial={{ display: 'hidden', opacity: 0 }}
          animate={{ display: 'block', opacity: 1 }}
          exit={{ opacity: 0, display: 'hidden' }}
          className={`${className} w-screen z-50 top-0 h-screen bg-black/70 fixed `}>
          <motion.div
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 500, opacity: 0 }}
            className={`z-50 absolute w-full shadow-cart md:w-8/12 lg:w-4/12 h-screen bg-white top-0 right-0`}>
            <div className="w-full justify-between items-center flex py-3 md:px-5 px-2 border border-b">
              <h1 className="text-2xl font-bold text-black/70">Your Order</h1>
              <button onClick={() => setShowCart(false)}>
                <IoClose className="text-2xl text-black/70 hover:scale-125 transition-transform" />
              </button>
            </div>
            <div className="md:px-5 px-2 h-auto">
              <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
                {cart.map((item) => {
                  return (
                    <CardCart
                      key={item.id}
                      item={item}
                      removeFromCart={removeFromCart}
                      increaseQuantity={increaseQuantity}
                      decreaseQuantity={decreaseQuantity}
                    />
                  );
                })}
              </div>
            </div>
            <PayButton cart={cart} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const CardCart = ({ item, removeFromCart }) => {
  return (
    <div
      key={item.id}
      className="flex w-full py-3 md:px-3 mx-auto items-center space-x-3 rounded group hover:bg-gray-200 transition-colors">
      <Image src={item.image} alt={item.name} width={70} height={70} className="shadow rounded" />
      <div className=" w-full">
        <div className="flex w-full justify-between items-center">
          <div>
            <h3 className="font-bold text-[15px] text-black/80 ">{item.name}</h3>
            <p className="text-black/80 text-[15px]">{formatRp(item.price)}</p>
            <button className="text-orange-400" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
          <div className="flex items-center rounded h-7 border group-hover:border-slate-300">
            <CountCard item={item} />
          </div>
        </div>
      </div>
    </div>
  );
};

const PayButton = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="border-t z-50 bg-white absolute w-full bottom-0 md:px-5 px-3 lg:pb-5 md:pb-10 pb-5">
      <div className="flex w-full justify-between my-3">
        <span className="text-lg font-medium text-gray-500">Subtotal</span>
        <span className="text-lg font-bold text-black">{formatRp(total)}</span>
      </div>
      <button className="w-full bg-primary text-white py-3 rounded shadow hover:opacity-80 transition-opacity">
        Continue to Checkout
      </button>
    </div>
  );
};
