import Image from 'next/image';
import styles from './Attributes.module.scss';

export const Attributes = () => {
  return (
    <>
      <h2 className={styles.sectionTitle}>Dlaczego my?</h2>
      <div className={styles.attributesWrapper}>
        <div className={styles.attribute}>
          <Image
            src="/assets/about/attributes1.svg"
            width={80}
            height={80}
            alt=""
          />
          <span>Dokładność</span>
        </div>
        <div className={styles.attribute}>
          <Image
            src="/assets/about/attributes2.svg"
            width={80}
            height={80}
            alt=""
          />
          <span>Dokładność</span>
        </div>
        <div className={styles.attribute}>
          <Image
            src="/assets/about/attributes3.svg"
            width={80}
            height={80}
            alt=""
          />
          <span>Dokładność</span>
        </div>
        <div className={styles.attribute}>
          <Image
            src="/assets/about/attributes4.svg"
            width={80}
            height={80}
            alt=""
          />
          <span>Dokładność</span>
        </div>
      </div>
    </>
  );
};
