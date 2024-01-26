import { getTranslations } from 'next-intl/server';
import { Content } from '@/app/[locale]/(homepage)/content';
import { LanguageSelector } from '@/components/layout/LanguageSelector';

export async function generateMetadata() {
  const t = await getTranslations('metaData.homepage');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function Homepage() {
  return (
    <>
      <Content />
      <LanguageSelector />
    </>
  );
}
