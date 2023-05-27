'use client';
import React, { useState } from 'react';
import faqUtils from '../../utils/faqUtils.json';
import { IoClose } from 'react-icons/io5';
import ButtonMenu from '../ui/ButtonMenu';
import { motion } from 'framer-motion';

const FaqPage = () => {
  const [faqFood, setFaqFood] = useState(true);
  const [faqDelivery, setFaqDelivery] = useState(false);
  const [faqCompany, setFaqCompany] = useState(false);

  const handleFaqFood = () => {
    setFaqFood(true);
    setFaqDelivery(false);
    setFaqCompany(false);
  };

  const handleFaqDelivery = () => {
    setFaqFood(false);
    setFaqDelivery(true);
    setFaqCompany(false);
  };

  const handleFaqCompany = () => {
    setFaqFood(false);
    setFaqDelivery(false);
    setFaqCompany(true);
  };

  return (
    <section className="w-full mx-auto my-14">
      <div className="w-10/12 md:w-full flex flex-col md:flex-row justify-center mx-auto md:gap-10 gap-3 my-10">
        <ButtonMenu
          onClick={handleFaqFood}
          className={`${faqFood && 'bg-primary bg-button-wave text-white border-none transition-colors'}`}>
          Our Food
        </ButtonMenu>
        <ButtonMenu
          onClick={handleFaqDelivery}
          className={`${faqDelivery && 'bg-primary bg-button-wave text-white border-none transition-colors'}`}>
          Our Delivery
        </ButtonMenu>
        <ButtonMenu
          onClick={handleFaqCompany}
          className={`${faqCompany && 'bg-primary bg-button-wave text-white border-none transition-colors'}`}>
          Our Company
        </ButtonMenu>
      </div>
      {faqFood && <FAQ type="food" />}
      {faqDelivery && <FAQ type="delivery" />}
      {faqCompany && <FAQ type="company" />}
    </section>
  );
};

const FAQ = ({ type }) => {
  const [expandedId, setExpandedId] = useState(null);
  const faqs = faqUtils[type];

  const handleFaqClick = (id) => {
    setExpandedId(id === expandedId ? null : id);
  };

  return (
    <div className="w-full mx-auto">
      {faqs.map((faq) => {
        const isExpanded = faq.id === expandedId;
        return (
          <motion.div
            initial={{ opcity: 0, x: 20 }}
            animate={{ opcity: 1, x: 0 }}
            key={faq.id}
            className="w-10/12 mx-auto bg-white cursor-pointer"
            onClick={() => handleFaqClick(faq.id)}>
            <div className="flex justify-between items-center border-b">
              <h1 className="text-primary font-semibold text-xl py-7">{faq.question}</h1>
              <IoClose
                className={`text-2xl text-paragraf transition-transform duration-300 ease-in ${
                  isExpanded ? '' : 'rotate-45'
                }`}
              />
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in ${
                isExpanded ? 'max-h-40' : 'max-h-0'
              }`}>
              <p className="text-lg text-paragraf py-5 ">{faq.answer}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FaqPage;
