'use client';

import { useLocale, useTranslations } from 'next-intl';
import styles from './footer.module.scss';
import Image from 'next/image';

export const Footer = () => {
  // const t = useTranslations("layout.footer");
  const locale = useLocale();

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.logoWrapper}>
        <img src={'/assets/common/logo.svg'} alt={''} />
        <img
          className={styles.logotype}
          src={'/assets/common/logotype.svg'}
          alt={''}
        />
      </div>

      <div>
        <div>
          <span>Infolinia jest czynna:</span>
          <span>pon-pt: 8:00-17:00</span>
          <span>sob: 9:00 - 14:00</span>
        </div>

        <div>
          <div>
            <img src="/assets/footer/phoneIcon.svg" alt="" />
            <span>310-437-2766</span>
          </div>
          <div>
            <img src="/assets/footer/mapIcon.svg" alt="" />
            <span>706 Campfre Ave. Meriden, CT 06450</span>
          </div>
          <div>
            <img src="/assets/footer/mailIcon.svg" alt="" />
            <span>unreal@outlook.com</span>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div>About</div>
          <div>
            <div>About us</div>
            <div>Blog</div>
            <div>Careers</div>
            <div>Jobs</div>
            <div>In Press</div>
          </div>
        </div>
        <div>
          <div>About</div>
          <div>
            <div>About us</div>
            <div>Blog</div>
            <div>Careers</div>
            <div>Jobs</div>
            <div>In Press</div>
          </div>
        </div>
        <div>
          <div>About</div>
          <div>
            <div>About us</div>
            <div>Blog</div>
            <div>Careers</div>
            <div>Jobs</div>
            <div>In Press</div>
          </div>
        </div>
      </div>

      <div className={styles.bottomWrapper}>
        <div>
          <small>About us</small>
          <small>Contact</small>
          <small>Privacy policy</small>
          <small>Sitemap</small>
          <small>Terms of Use</small>
        </div>

        <small>© 2024 All Rights Reserved</small>
      </div>
    </footer>
  );
};
