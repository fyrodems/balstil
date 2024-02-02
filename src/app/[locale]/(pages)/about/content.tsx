'use client';

import { Button } from '@/components/common/Button/Button';
import { useTranslations } from 'next-intl';

export const Content: React.FC = () => {
  const t = useTranslations('homepage');

  return (
    <main>
      {/* <p className="text-base sm:text-xl lg:text-2xl">{t('test')}</p> */}
      <Button>Sprawdź</Button>
    </main>
  );
};
