"use client"

import '../../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
      <>
        <header className='nav-header'>
          <button className="nav-back nav-button" onClick={handleGoBack}><i className="fa fa-arrow-circle-left"></i></button>
          <Link className="nav-home nav-button" href="/guest/home"><i className="fa fa-search"></i></Link>
        </header>
        {children}
      </>
  );
}
