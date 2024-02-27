'use client';

import { useLocale, useTranslations } from 'next-intl';
import styles from './Footer.module.scss';
import { ContactInfo } from './ContactInfo';
import { Sitemap } from './Sitemap';

export const Footer = () => {
  // const t = useTranslations("layout.footer");
  const locale = useLocale();

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.content}>
        <ContactInfo />
        <div className={styles.decoration}></div>
        <Sitemap />
      </div>

      <div className={styles.bottomWrapper}>
        <div className={styles.links}>
          <span>Polityka prywatności</span>
          <span>Nota prawna</span>
          <span>Regulamin</span>
        </div>
        <div>© 2024 Wszelkie prawa zastrzeżone</div>
      </div>
    </footer>
  );
};
