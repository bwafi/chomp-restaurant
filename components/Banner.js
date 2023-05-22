import React from 'react';

export default function Banner() {
  return (
    <div className="w-full hidden lg:block bg-banner-wave mx-auto py-2 bg-primary">
      <p className="text-white text-center">
        We're open and available for takeaway & delivery.{' '}
        <a href="/order" className="underline underline-offset-4 font-semibold">
          Order Now
        </a>
      </p>
    </div>
  );
}
