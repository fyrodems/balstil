import { NextIntlClientProvider, useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Montserrat } from 'next/font/google';
import classNames from 'classnames';
import 'normalize.css/normalize.css';
import '../globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export async function generateMetadata() {
  const t = await getTranslations('metaData.homepage');

  return {
    title: t('title'),
    description: t('description'),
    // icons: { icon: '/favicon.ico' },
    // icons: { icon: '/icon.png' },
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
      <body
        className={classNames(
          montserrat.className,
          'bg-light-bg container mx-auto p4'
          /* text-slate-100 - color */
        )}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
