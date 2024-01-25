import "normalize.css/normalize.css";
import { Exo_2 } from "next/font/google";
import { NextIntlClientProvider, useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";

const exo = Exo_2({ subsets: ["latin"] });

export async function generateMetadata() {
  const t = await getTranslations("metaData.homepage");

  return {
    title: t("title"),
    description: t("description"),
    icons: { icon: "/icon.png" },
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
      <body className={exo.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
