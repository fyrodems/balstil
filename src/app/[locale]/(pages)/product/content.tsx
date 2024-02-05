'use client';

import { useTranslations } from 'next-intl';
import styles from './product.module.scss';
import { MainBanner } from '@/components/product/MainBanner/MainBanner';
import { BenefitsSlider } from '@/components/product/BenefitsSlider/BenefitsSlider';

export const Content: React.FC = () => {
  const t = useTranslations('homepage');

  return (
    <main className={styles.main}>
      <MainBanner />
      <BenefitsSlider />
    </main>
  );
};
