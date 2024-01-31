import { Button } from '@/components/common/Button/Button';
import styles from './Newsletter.module.scss';

export const Newsletter = () => {
  return (
    <div className={styles.newsletterWrapper}>
      <h2>Newsletter</h2>
      <div className={styles.secondaryHeading}>Bądź na bieżąco</div>
      <form className={styles.formWrapper}>
        <div className={styles.inputsWrapper}>
          <input type="email" placeholder="E-mail" />
          <input type="tel" placeholder="Numer telefonu" />
        </div>

        <Button
          type="secondary"
          content="Zapisz się"
          className={styles.formButton}
        />
      </form>
    </div>
  );
};
