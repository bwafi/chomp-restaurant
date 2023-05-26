'use client';
import { useState } from 'react';
import FoodCard from './ui/FoodCard';
import ButtonMenu from './ui/ButtonMenu';

const ListProducts = () => {
  const [showBurger, setShowBurger] = useState(true);
  const [showSides, setShowSides] = useState(false);
  const [showDrinks, setShowDrinks] = useState(false);

  const handleShowBurger = () => {
    setShowBurger(true);
    setShowSides(false);
    setShowDrinks(false);
  };

  const handleShowSides = () => {
    setShowBurger(false);
    setShowSides(true);
    setShowDrinks(false);
  };

  const handleShowDrinks = () => {
    setShowBurger(false);
    setShowSides(false);
    setShowDrinks(true);
  };

  return (
    <section className="w-full mx-auto my-14 bg-bg-content">
      <div className="w-10/12 md:w-full flex flex-col md:flex-row justify-center mx-auto md:gap-10 gap-3 my-10">
        <ButtonMenu
          onClick={handleShowBurger}
          className={`${showBurger && 'bg-primary bg-button-wave text-white border-none transition-colors'}`}>
          Burgers
        </ButtonMenu>
        <ButtonMenu
          onClick={handleShowSides}
          className={`${showSides && 'bg-primary bg-button-wave text-white border-none transition-colors'}`}>
          Sides
        </ButtonMenu>
        <ButtonMenu
          onClick={handleShowDrinks}
          className={`${showDrinks && 'bg-primary bg-button-wave text-white border-none transition-colors'}`}>
          Drinks
        </ButtonMenu>
      </div>
      <div className="py-10 flex md:gap-7 sm:gap-3 gap-7 items-center justify-center flex-wrap">
        {showBurger && <FoodCard type="burgers" />}
        {showSides && <FoodCard type="sides" />}
        {showDrinks && <FoodCard type="drinks" />}
      </div>
    </section>
  );
};

export default ListProducts;
