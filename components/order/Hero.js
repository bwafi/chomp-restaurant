import HeroPage, { HeroTitle } from '../HeroPage';

const HeroOrder = () => {
  return (
    <HeroPage>
      <HeroTitle>
        Get your food <span className="text-primary">delivered</span>, or <span className="text-primary">pick-up</span>{' '}
        in store.
      </HeroTitle>
    </HeroPage>
  );
};

export default HeroOrder;
