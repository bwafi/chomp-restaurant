import Image from 'next/image';
import React from 'react';
import Button from '../ui/Button';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section className="bg-bg-content py-5 px-3 w-full flex lg:flex-row flex-col lg:items-center justify-center gap-20 text-center lg:text-left">
      <div className="lg:w-6/12 w-full">
        <h1 className="font-bold text-5xl text-primary my-5">Call our store and takeaway when it suits you best.</h1>
        <p className="text-paragraf text-lg leading-normal lg:text-left text-center">
          Please feel free to call our store and arrange for a convenient time to pick up your order. We understand the
          importance of flexibility and want to ensure that you can collect your items at a time that best fits your
          schedule.
        </p>
        <Link href="https://wa.me/6282335955903" target="_blank">
          <Button className="my-10 bg-button-wave bg-primary text-white">ID +62 823-3595-5903</Button>
        </Link>
      </div>
      <div className="lg:w-5/12 w-full flex justify-center">
        <Image src="/img/section-contact.png" alt="food takeway" width={500} height={500} />
      </div>
    </section>
  );
};

export default ContactSection;
