import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { formatRp } from '@/context/formatRp';
import Link from 'next/link';

export default function FoodCard({ item, addToCart }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col md:flex-row items-center justify-center bg-white rounded-md lg:w-[45%] md:w-10/12 sm:w-[48%] w-full p-5 md:space-x-5 space-y-10 md:space-y-0 border border-[#35b8be]/20 hover:border-[#35b8be] shadow-sm">
        <Link href={`/product/${item.id}`} className="shrink-0">
          <Image
            src={item.image}
            alt={item.name}
            width={300}
            height={300}
            quality={60}
            className="rounded-lg lg:w-28 lg:h-auto md:w-32 md:h-auto w-auto h-auto aspect-square object-cover"
          />
        </Link>
        <div className="flex flex-col md:gap-1 gap-3 justify-start">
          <Link href={`/product/${item.id}`} className="flex justify-between flex-col md:flex-row">
            <h2 className="text-xl font-bold capitalize">{item.name}</h2>
            <p className="text-primary">{formatRp(item.price)}</p>
          </Link>
          <Link href={`/product/${item.id}`}>
            <p className="text-paragraf leading-normal line-clamp-3">{item.shortDesc}</p>
          </Link>
          <div className="flex mt-2 w-full justify-end">
            <button
              className="py-2 rounded text-base md:text-sm text-white px-4 bg-primary shadow-sm hover:contrast-125 transition-all duration-300"
              onClick={() => addToCart(item.id)}>
              Add to Cart
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
