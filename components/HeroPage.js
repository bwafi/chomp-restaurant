'use client';
import { motion } from 'framer-motion';

const HeroPage = ({ children }) => {
  return (
    <motion.div
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full lg:h-[700px] h-[600px] flex items-center justify-center bg-alice lg:mt-0 mt-16">
      <h1 className="lg:w-[55%] w-full md:text-6xl text-5xl font-extrabold text-heading text-center">{children}</h1>
    </motion.div>
  );
};

export default HeroPage;
