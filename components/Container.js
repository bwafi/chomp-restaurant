import React, { ReactNode } from 'react';

export default function Container({ children }) {
  return <div className="w-full mx-auto container px-5">{children}</div>;
}
