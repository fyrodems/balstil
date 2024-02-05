'use client';

import { useTranslations } from 'next-intl';
import { SectionFirst } from '@/components/about/SectionFirst/SectionFirst';
import { SectionSecond } from '@/components/about/SectionSecond/SectionSecond';
import styles from './about.module.scss';
import { Attributes } from '@/components/about/Attributes/Attributes';
import { Partners } from '@/components/about/Partners/Partners';

export const Content: React.FC = () => {
  const t = useTranslations('homepage');

  return (
    <main className={styles.main}>
      {/* <p className="text-base sm:text-xl lg:text-2xl">{t('test')}</p> */}
      <SectionFirst />
      <SectionSecond />
      <Attributes />
      <Partners />
    </main>
  );
};
