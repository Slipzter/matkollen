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
          <nav>
            <ul>
              <Link className="nav-home nav-button" href="/home"><i className="fa fa-search"></i></Link>
              <Link className="nav-landing nav-button" href="/landingpage"><i className="fa fa-user-circle"></i></Link>
            </ul>
          </nav>
        </header>
        {children}
      </>
  );
}
