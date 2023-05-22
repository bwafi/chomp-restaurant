import React from 'react';

export default function Button({ className, children }) {
  return (
    <button
      className={`${className} py-5 px-12 md:px-10 lg:px-7 rounded-md hover:contrast-125 transition-all duration-300`}>
      {children}
    </button>
  );
}
