import { getTranslations } from 'next-intl/server';
import { Content } from './content';

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
      <Content />
    </>
  );
}
