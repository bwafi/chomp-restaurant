import React from 'react';

export default function ButtonSquare({ children, className, ...props }) {
  return (
    <button {...props} className={`${className} w-14 h-14 rounded flex justify-center items-center`}>
      {children}
    </button>
  );
}
