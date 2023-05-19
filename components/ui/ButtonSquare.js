import React from 'react';

export default function ButtonSquare({ children, className, ...props }) {
  return (
    <button {...props} className={`${className} w-[50px] h-[50px] rounded flex justify-center items-center`}>
      {children}
    </button>
  );
}
