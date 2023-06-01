import React from 'react';
import HeroPage, { HeroTitle } from '../HeroPage';

const HeroCompany = () => {
  return (
    <HeroPage>
      <HeroTitle>
        Our company focuses on <span className="text-primary">food and people.</span>
      </HeroTitle>
    </HeroPage>
  );
};

export default HeroCompany;
