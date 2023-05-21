import React from 'react';

export default function Container({ children }) {
  return <div className="w-full mx-auto container lg:px-10 md:px-5 sm:px-1 px-3">{children}</div>;
}
