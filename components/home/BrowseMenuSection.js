'use client';
import React, { useState } from 'react';
import FoodCard from '../ui/FoodCard';
import Button from '../ui/Button';

export default function BrowseMenuSection() {
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
    <section className="w-full mx-auto my-20 bg-bg-content">
      <div className="lg:w-5/12 w-full mx-auto">
        <h1 className="md:text-[55px] text-5xl text-primary font-bold text-center ">Browse our menu</h1>
        <p className="text-lg leading-normal text-paragraf text-center py-3">
          Use our menu to place an order online, or{' '}
          <a href="#" className="text-primary underline underline-offset-4">
            phone
          </a>{' '}
          our store to place a pickup order. Fast and fresh food.
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center md:gap-10 gap-3 my-10">
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
      <div className="py-10 flex md:gap-7 sm:gap-3 gap-7 items-center justify-center flex-wrap">
        {showBurger && <FoodCard type="burger" />}
        {showSides && <FoodCard type="sides" />}
        {showDrinks && <FoodCard type="drinks" />}
      </div>
      <div className="w-full flex justify-center lg:pt-20 pt-10">
        <Button className="bg-primary w-10/12 bg-button-wave text-white">See Full Menu</Button>
      </div>
    </section>
  );
}

const ButtonMenu = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={`${className} text-paragraf md:px-[45px] py-[9px] border border-black/40 rounded-md shadow`}>
      {children}
    </button>
  );
};
