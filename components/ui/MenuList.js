import Link from 'next/link';
import React, { HTMLAttributes } from 'react';

export default function MenuList({ className }) {
  const navList = [
    {
      text: 'Home',
      path: '/',
    },
    {
      text: 'Order',
      path: '/order',
    },
    {
      text: 'Company',
      path: '/company',
    },
    {
      text: 'FAQ',
      path: '/faq',
    },
    {
      text: 'Contact',
      path: '/contact',
    },
  ];
  return (
    <ul className={className}>
      {navList.map(({ text, path }) => {
        return (
          <li key={text} className="text-[#28224b] font-medium">
            <Link href={path}>{text}</Link>
          </li>
        );
      })}
    </ul>
  );
}
