import styles from './Footer.module.scss';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

export const ContactInfo = () => {
  return (
    <div className={styles.contactInfoWrapper}>
      <h2>Kontakt</h2>

      <div className={styles.container}>
        <h3 className={styles.contactInfo}>
          <span>0048 48 389 99 14</span>
          <Phone />
        </h3>
        <div className={styles.hotline}>
          Infolinia jest czynna:
          <br />
          pon-pt: 8:00-17:00
          <br />
          sob: 9:00 - 14:00
        </div>
      </div>

      <div className={styles.container}>
        <h3 className={styles.contactInfo}>
          <span>detal@balstil@com</span>
          <Mail />
        </h3>
      </div>

      <div className={styles.container}>
        <h2>Obserwuj nas</h2>
        <div className={styles.socialIcons}>
          <Facebook />
          <Instagram />
        </div>
      </div>
    </div>
  );
};
