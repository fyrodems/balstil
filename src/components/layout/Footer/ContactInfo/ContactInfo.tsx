import styles from '../Footer.module.scss';

const ContactInfo = () => {
  return (
    <div className={styles.contactInfoWrapper}>
      <div className={styles.hotline}>
        <span>Infolinia jest czynna:</span>
        <span>pon-pt: 8:00-17:00</span>
        <span>sob: 9:00 - 14:00</span>
      </div>

      <div className={styles.contactInfo}>
        <div>
          <img src="/assets/footer/phoneIcon.svg" alt="" />
          <a target="_blank" href="tel:310-437-2766">
            310-437-2766
          </a>
        </div>
        <div>
          <img src="/assets/footer/mapIcon.svg" alt="" />
          <a
            target="_blank"
            href="https://www.google.com/maps?q=706+Campfre+Ave.+Meriden,+CT+06450"
          >
            706 Campfre Ave. Meriden, CT 06450
          </a>
        </div>
        <div>
          <img src="/assets/footer/mailIcon.svg" alt="" />
          <a target="_blank" href="mailto:unreal@outlook.com">
            unreal@outlook.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
