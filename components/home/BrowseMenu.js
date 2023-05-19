'use client';
import React, { useState } from 'react';
import FoodCard from '../ui/FoodCard';
import Button from '../ui/Button';

export default function BrowseMenu() {
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
    <section className="w-full mx-auto my-32 bg-bg-content">
      <div className="w-5/12 mx-auto">
        <h1 className="text-[55px] text-primary font-bold text-center ">Browse our menu</h1>
        <p className="text-lg leading-normal text-paragraf text-center py-3">
          Use our menu to place an order online, or{' '}
          <a href="#" className="text-primary underline underline-offset-4">
            phone
          </a>{' '}
          our store to place a pickup order. Fast and fresh food.
        </p>
      </div>
      <div className="w-full flex justify-center gap-10 my-10">
        <ButtonMenu
          onClick={() => handleShowBurger()}
          className={`${showBurger && 'bg-primary bg-button-wave text-white border-none transition-colors'}`}>
          Burgers
        </ButtonMenu>
        <ButtonMenu
          onClick={() => handleShowSides()}
          className={`${showSides && 'bg-primary bg-button-wave text-white border-none transition-colors'}`}>
          Sides
        </ButtonMenu>
        <ButtonMenu
          onClick={() => handleShowDrinks()}
          className={`${showDrinks && 'bg-primary bg-button-wave text-white border-none transition-colors'}`}>
          Drinks
        </ButtonMenu>
      </div>
      <div className="px-3 py-10 flex gap-7 items-center justify-center flex-wrap">
        {showBurger && <FoodCard type="burger" />}
        {showSides && <FoodCard type="sides" />}
        {showDrinks && <FoodCard type="drinks" />}
      </div>
      <div className="w-full flex justify-center pt-20">
        <Button className="bg-primary bg-button-wave text-white">See Full Menu</Button>
      </div>
    </section>
  );
}

const ButtonMenu = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={`${className} text-paragraf px-[45px] py-[9px] border border-black/40 rounded-md shadow`}>
      {children}
    </button>
  );
};
