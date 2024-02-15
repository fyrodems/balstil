import { getTranslations } from 'next-intl/server';
import { Content } from './content';
import { PageTitle } from '@/components/common/PageTitle/PageTitle';

export async function generateMetadata() {
  const t = await getTranslations('metaData.product');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function Product() {
  return (
    <>
      <PageTitle
        pageTitle="Cylinde"
        supportingText="Ogrzewacz Gazowy Poziomy"
        mainColor="#AF8E6D"
      />

      <Content />
    </>
  );
}
