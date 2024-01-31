'use client';

import { News } from '@/components/homepage/News/News';
import { Newsletter } from '@/components/homepage/Newsletter/Newsletter';
import { Portfolio } from '@/components/homepage/Portfolio/Portfolio';
import { ProductsSlider } from '@/components/homepage/ProductsSlider/ProductsSlider';
import { SomeFiller } from '@/components/homepage/SomeFiller/SomeFiller';
import { useTranslations } from 'next-intl';

export const Content: React.FC = () => {
  const t = useTranslations('homepage');

  return (
    <main>
      {/* <p className="text-base sm:text-xl lg:text-2xl">{t('test')}</p> */}
      <SomeFiller />
      <News />
      <ProductsSlider />
      <SomeFiller />
      <Portfolio />
      <Newsletter />
    </main>
  );
};
