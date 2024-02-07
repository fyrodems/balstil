'use client';

import { useLocale, useTranslations } from 'next-intl';
import styles from './Footer.module.scss';
import Logotype from './Logotype/Logotype';
import ContactInfo from './ContactInfo/ContactInfo';
import Sitemap from './Sitemap/Sitemap';
import BottomLinks from './BottomLinks/BottomLinks';

export const Footer = () => {
  // const t = useTranslations("layout.footer");
  const locale = useLocale();

  return (
    <footer className={styles.footerWrapper}>
      <div>
        <Logotype />
        <div className={styles.mainContent}>
          <ContactInfo />
          <div className={styles.decoration} />
          <Sitemap />
        </div>
        <BottomLinks />
      </div>
    </footer>
  );
};
