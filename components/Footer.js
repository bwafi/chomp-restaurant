'use client';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const Footer = () => {
  const [quotes, setQuotes] = useState({});
  useEffect(() => {
    const generateQuotes = () => {
      axios.get('https://api.quotable.io/random').then((res) => {
        setQuotes(res.data);
      });
    };
    generateQuotes();
  }, []);

  console.log(quotes);

  return (
    <footer className="w-full bg-alice bg-pattern-footer bg-contain bg-left bg-no-repeat pt-16 lg:px-10 md:px-7 px-2">
      <div className="flex justify-between w-full">
        <div className="w-3/12">
          <div className="flex items-center gap-3">
            <Image src="/logo/logo.svg" alt="Logo Footer" width={40} height={40} priority />
            <h1 className="text-3xl font-bold text-heading">
              Chomp <span className="text-primary">Restaurant</span>
            </h1>
          </div>
          <p className="text-paragraf text-lg mt-6">
            Welcome to our burger restaurant! We are a diner committed to serving unique and satisfying burgers.
          </p>
        </div>
        <div className="w-3/12 flex items-center flex-col space-y-3">
          <h4 className="text-heading font-bold tracking-[0.3em]">Quotes Random</h4>
          {Object.keys(quotes).length === 0 ? (
            <i>Loading...</i>
          ) : (
            <>
              <blockquote className="text-center text-paragraf">"{quotes.content}"</blockquote>
              <i className="font-semibold text-lg">{quotes.author}</i>
            </>
          )}
        </div>
        <div className="w-5/12 flex gap-24 justify-center">
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
        </div>
      </div>
      <div className="w-full border-t mt-24 py-7 flex justify-between">
        <p className="text-paragraf">
          Built by{' '}
          <Link href="https://github.com/bwafi" target="_blank" className="text-primary">
            Syahroni Bawafi
          </Link>{' '}
          · Powered by{' '}
          <Link href="https://nextjs.org/" target="_blank" className="text-primary">
            Next JS
          </Link>
        </p>
        <div className="flex gap-5">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
