"use client"

import './globals.css';
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
    <html lang="en">
      <body>
        <header>
        <div className="container">
          <button className="nav-back" onClick={handleGoBack}>Back</button>
        </div>
          <nav className="sticy top-0 px-2 py-4">
            <ul className="flex flex-row items-start gap-2 whitespace-nowrap">
              <Link href="/landingpage">LOG IN</Link>
              <Link href="/home">HOME</Link>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
