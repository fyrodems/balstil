'use client';

import { SomeFiller } from '@/components/homepage/SomeFiller/SomeFiller';
import { useTranslations } from 'next-intl';

export const Content: React.FC = () => {
  const t = useTranslations('homepage');

  return (
    <main>
      {/* <p className="text-base sm:text-xl lg:text-2xl">{t('test')}</p> */}
      <SomeFiller />
      <SomeFiller />
    </main>
  );
};
