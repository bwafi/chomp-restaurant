'use client';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="w-full bg-alice bg-pattern-footer bg-contain bg-left bg-no-repeat pt-16 lg:px-10 md:px-7 px-2">
      <div className="flex justify-between w-full">
        <div className="w-3/12">
          <Image src="/logo/logo.svg" alt="Logo Footer" width={40} height={40} priority />
          <p className="text-paragraf text-lg mt-6">
            Welcome to our burger restaurant! We are a diner committed to serving unique and satisfying burgers.
          </p>
        </div>
        <div className="w-3/12 flex items-center flex-col space-y-5">
          <h4 className="text-heading font-bold tracking-[0.3em]">Quotes Random</h4>
          <blockquote className="text-center text-paragraf">
            "Work as though you would live forever, and live as though you would die today. Go another mile."
          </blockquote>
          <i className="font-semibold text-lg">Lilas Ikuta</i>
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
