'use client';
import { useState } from 'react';
import Button from '../ui/Button';
import ListProducts from '../ListProducts';

export default function BrowseMenuSection() {
  return (
    <section className="w-full mx-auto my-14 bg-bg-content">
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
      <ListProducts />
      <div className="w-full flex justify-center lg:pt-14 pt-10">
        <Button className="bg-primary bg-button-wave text-white">See Full Menu</Button>
      </div>
    </section>
  );
}
