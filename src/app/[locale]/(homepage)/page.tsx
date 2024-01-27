import { getTranslations } from 'next-intl/server';
import { Content } from '@/app/[locale]/(homepage)/content';
import { LanguageSelector } from '@/components/layout/LanguageSelector';
import { PageTitle } from '@/components/common/PageTitle/pageTitle';

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
      <PageTitle
        pageTitle={'Cylinde'}
        supportingText={'ogrzewacz gazowy poziomy'}
        mainColor='#A48F59'
      />
      <Content />
      <LanguageSelector />
    </>
  );
}
