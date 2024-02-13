import { NextIntlClientProvider, useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Montserrat } from 'next/font/google';
import classNames from 'classnames';
import 'normalize.css/normalize.css';
import '../tailwindGlobals.css';
import '../styles/globals.scss';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar/Navbar';

const montserrat = Montserrat({ subsets: ['latin'] });

async function generateMetadata() {
  const t = await getTranslations('metaData.homepage');

  return {
    title: t('title'),
    description: t('description'),
  };
}

interface Props {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: Props) {
  const locale = useLocale();
  let messages;
  try {
    messages = (await import(`@/libs/i18n/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={classNames(montserrat.className, 'bg-light-bg')}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
