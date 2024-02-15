import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('metaData.404');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function CatchAllPage() {
  notFound();
}
