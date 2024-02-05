import Image from 'next/image';
import styles from './Partners.module.scss';

export const Partners = () => {
  return (
    <>
      <h2 className={styles.sectionTitle}>Współpracujemy również z firmami:</h2>
      <div className={styles.partnersWrapper}>
        <div className={styles.partner}>
          <Image
            src="/assets/about/abb.png"
            alt={''}
            width={250}
            height={100}
          />
        </div>
        <div className={styles.partner}>
          <Image
            src="/assets/about/abb.png"
            alt={''}
            width={250}
            height={100}
          />
        </div>
        <div className={styles.partner}>
          <Image
            src="/assets/about/abb.png"
            alt={''}
            width={250}
            height={100}
          />
        </div>
        <div className={styles.partner}>
          <Image
            src="/assets/about/abb.png"
            alt={''}
            width={250}
            height={100}
          />
        </div>
      </div>
    </>
  );
};
