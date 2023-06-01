import React from 'react';
import HeroPage, { HeroTitle } from '../HeroPage';

const HeroDetail = ({ item }) => {
  return (
    <HeroPage className="bg-yumyum bg-no-repeat bg-center lg:h-[700px] h-[500px]">
      <HeroTitle className="capitalize">{item && item.name}</HeroTitle>
    </HeroPage>
  );
};

export default HeroDetail;
