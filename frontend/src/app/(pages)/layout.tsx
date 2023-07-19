"use client"

import '../globals.css';
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
        <header>
          <button className="nav-back" onClick={handleGoBack}>Back</button>
          <nav>
            <ul className="flex flex-row items-start gap-2 whitespace-nowrap">
              <Link className="nav-landing" href="/landingpage">LOG IN</Link>
              <Link className="nav-home" href="/home">HOME</Link>
            </ul>
          </nav>
        </header>
        {children}
      </>
  );
}
