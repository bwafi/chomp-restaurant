import React from 'react';
import HeroPage, { HeroTitle } from '../HeroPage';

const HeroFaq = () => {
  return (
    <HeroPage>
      <HeroTitle>
        Frequently Asked <span className="text-primary">Questions</span>
      </HeroTitle>
    </HeroPage>
  );
};

export default HeroFaq;
