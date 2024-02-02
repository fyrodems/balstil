import { getTranslations } from 'next-intl/server';
import { Content } from './content';
import { PageTitle } from '@/components/common/PageTitle/PageTitle';
import Image from 'next/image';

export async function generateMetadata() {
  const t = await getTranslations('metaData.contact');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function About() {
  return (
    <>
      <PageTitle
        pageTitle="O Nas"
        supportingText="Skontaktuj się z nami"
        mainColor="#AF8E6D"
      />

  

      <Content />
    </>
  );
}
