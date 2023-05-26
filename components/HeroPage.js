const HeroPage = ({ children }) => {
  return (
    <div className="w-full lg:h-[700px] h-[600px] flex items-center justify-center bg-alice lg:mt-0 mt-16">
      <h1 className="lg:w-[55%] w-full md:text-6xl text-5xl font-extrabold text-heading text-center">{children}</h1>
    </div>
  );
};

export default HeroPage;
