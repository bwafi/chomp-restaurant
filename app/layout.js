import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chomp Restaurant',
  description: 'Restaurant Burger',
  icons: {
    icon: '/logo/fav.png',
    shortcut: '/logo/fav.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
