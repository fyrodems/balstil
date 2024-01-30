'use client';

import { useLocale, useTranslations } from 'next-intl';
import styles from './Footer.module.scss';
import Image from 'next/image';
import Logotype from './Logotype/Logotype';
import ContactInfo from './ContactInfo/ContactInfo';
import Sitemap from './Sitemap/Sitemap';
import BottomLinks from './BottomLinks/BottomLinks';

export const Footer = () => {
  // const t = useTranslations("layout.footer");
  const locale = useLocale();

  return (
    <footer className={styles.footerWrapper}>
      <Logotype />
      <ContactInfo />
      <Sitemap />
      <BottomLinks />
    </footer>
  );
};
