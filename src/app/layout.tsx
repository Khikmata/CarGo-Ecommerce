import { Footer, LoadingIcon, Navbar } from '@/shared';
import { Suspense } from 'react';
import './globals.css';

export const metadata = {
  title: 'CarGo',
  description: 'Cars app mockup'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<LoadingIcon />}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
