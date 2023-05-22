import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuList({ className }) {
  const pathname = usePathname();

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
        const isActive = pathname === path;
        return (
          <li key={text} className={`${isActive ? 'text-primary' : 'text-[#28224b]'} font-medium`}>
            <Link href={path}>{text}</Link>
          </li>
        );
      })}
    </ul>
  );
}
