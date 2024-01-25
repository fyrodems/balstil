import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import classNames from 'classnames';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'BALSTIL',
  description: 'Kominki najwyższej jakości',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(
          montserrat.className,
          'bg-light-bg container mx-auto p4'

          /* text-slate-100 - color
           */
        )}
      >
        {children}
      </body>
    </html>
  );
}
