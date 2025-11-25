import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navigation from '@/components/Navigation';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'McKenzie White - Personal Website',
  description: 'Personal website of McKenzie White showcasing academic work, code repositories, and more.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S30KBRRT09"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S30KBRRT09');
          `}
        </Script>
        
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
} 