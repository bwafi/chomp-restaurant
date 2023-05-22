'use client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';

const Footer = () => {
  return (
    <footer className="w-full bg-alice bg-pattern-footer bg-contain bg-left bg-no-repeat pt-16 lg:px-10 md:px-7 px-2">
      <div className="flex md:flex-row flex-col space-y-10 md:space-x-0 lg:items-center justify-between w-full">
        <div className="md:w-8/12 w-full flex lg:flex-row flex-col gap-10">
          <div className="md:w-6/12 w-full flex flex-col">
            <div className="flex gap-3 items-center justify-center">
              <Image src="/logo/logo.svg" alt="Logo Footer" width={40} height={40} priority />
              <h1 className="sm:text-3xl text-xl font-bold text-heading ">
                Chomp <span className="text-primary">Restaurant</span>
              </h1>
            </div>
            <p className="text-paragraf text-lg mt-6 md:text-left text-center">
              Welcome to our burger restaurant! We are a diner committed to serving unique and satisfying burgers.
            </p>
          </div>
          <Quotes />
        </div>
        <div className="md:w-4/12 w-full flex md:flex-row flex-col md:gap-24 gap-14 justify-center">
          <FooterList />
        </div>
      </div>
      <div className="w-full border-t mt-24 py-7 flex md:flex-row flex-col items-center justify-between space-y-5">
        <p className="text-paragraf ">
          Built by{' '}
          <Link href="https://github.com/bwafi" target="_blank" className="text-primary">
            Syharoni
          </Link>{' '}
          · Powered by{' '}
          <Link href="https://nextjs.org/" target="_blank" className="text-primary">
            Next JS
          </Link>
        </p>
        <div className="flex gap-5 justify-center">
          <SosmedIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const Quotes = () => {
  const [quotes, setQuotes] = useState({});
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const generateQuotes = () => {
      axios.get('https://api.quotable.io/random').then((res) => {
        setQuotes(res.data);
        setAnimationKey((prevKey) => prevKey + 1);
      });
    };
    generateQuotes();

    const intervalId = setInterval(generateQuotes, 20000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-fit md:w-8/12 w-full py-3 px-3 flex items-center flex-col space-y-3 border border-heading/30 rounded-md shadow-sm">
      <h4 className="text-heading font-bold ">QUOTES RANDOM</h4>
      {Object.keys(quotes).length === 0 ? (
        <i>Loading...</i>
      ) : (
        <>
          <TypeAnimation
            key={animationKey}
            sequence={[`"${quotes.content}"`, 20000]}
            wrapper="blockquote"
            cursor={true}
            repeat={Infinity}
            className="text-center text-lg text-paragraf"
          />
          <i className="font-light text-lg font-serif">~{quotes.author}~</i>
        </>
      )}
    </div>
  );
};

const FooterList = () => {
  return (
    <>
      <div className="flex flex-col space-y-6">
        <h4 className="text-heading font-bold tracking-[0.3em]">MENU</h4>
        <p className="text-paragraf">Home</p>
        <p className="text-paragraf">Order</p>
        <p className="text-paragraf">FAQ</p>
        <p className="text-paragraf">Contact</p>
      </div>
      <div className="flex flex-col space-y-6">
        <h4 className="text-heading font-bold tracking-[0.3em]">STUDIO</h4>
        <p className="text-paragraf">Company</p>
        <p className="text-paragraf">Changelog</p>
        <p className="text-paragraf">Licence</p>
      </div>
    </>
  );
};

const SosmedIcon = () => {
  return (
    <>
      <Link
        href="https://www.instagram.com/itssyahroni/w"
        target="_blank"
        className="border border-paragraf/40 rounded-full p-2 hover:border-paragraf transition-opacity">
        <AiOutlineInstagram className="text-2xl text-paragraf" />
      </Link>
      <Link
        href="https://twitter.com/itssyahroni"
        target="_blank"
        className="border border-paragraf/40 rounded-full p-2 hover:border-paragraf transition-opacity">
        <AiOutlineTwitter className="text-2xl text-paragraf" />
      </Link>
      <Link
        href="https://github.com/bwafi"
        target="_blank"
        className="border border-paragraf/40 rounded-full p-2 hover:border-paragraf transition-opacity">
        <AiFillGithub className="text-2xl text-paragraf" />
      </Link>
      <Link
        href="https://wa.me/6282335955903"
        target="_blank"
        className="border border-paragraf/40 rounded-full p-2 hover:border-paragraf transition-opacity">
        <AiOutlineWhatsApp className="text-2xl text-paragraf" />
      </Link>
    </>
  );
};
