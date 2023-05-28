'use client';
import { useState } from 'react';
import FoodCard from './ui/FoodCard';
import ButtonMenu from './ui/ButtonMenu';
import { ProductContext } from '@/context/GlobalState';

const ListProducts = () => {
  const [type, setType] = useState('burgers');

  const handleShowBurger = () => {
    setType('burgers');
  };

  const handleShowSides = () => {
    setType('sides');
  };

  const handleShowDrinks = () => {
    setType('drinks');
  };

  const { products, addToCart } = ProductContext();

  let foods = products[type];

  return (
    <section className="w-full mx-auto my-14 bg-bg-content">
      <div className="w-10/12 md:w-full flex flex-col md:flex-row justify-center mx-auto md:gap-10 gap-3 my-10">
        <ButtonMenu
          onClick={handleShowBurger}
          className={`${type === 'burgers' && 'bg-primary bg-button-wave text-white border-none transition-colors'}`}>
          Burgers
        </ButtonMenu>
        <ButtonMenu
          onClick={handleShowSides}
          className={`${type === 'sides' && 'bg-primary bg-button-wave text-white border-none transition-colors'}`}>
          Sides
        </ButtonMenu>
        <ButtonMenu
          onClick={handleShowDrinks}
          className={`${type === 'drinks' && 'bg-primary bg-button-wave text-white border-none transition-colors'}`}>
          Drinks
        </ButtonMenu>
      </div>
      <div className="py-10 flex md:gap-7 sm:gap-3 gap-7 items-center justify-center flex-wrap">
        {foods.map((item) => {
          return <FoodCard key={item.id} item={item} addToCart={addToCart} />;
        })}
      </div>
    </section>
  );
};

export default ListProducts;
