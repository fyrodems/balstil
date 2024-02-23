import { Button } from '@/components/common/Button/Button';
import styles from './Newsletter.module.scss';

export const Newsletter = () => {
  return (
    <div className={styles.newsletterWrapper}>
      <h2>Newsletter</h2>
      <div className={styles.secondaryHeading}>Bądź na bieżąco</div>
      <form className={styles.formWrapper}>
        <div className={styles.inputsWrapper}>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" placeholder="E-mail" id="email" />
          </div>
          <div>
            <label htmlFor="tel">Numer telefonu</label>
            <input type="tel" placeholder="Numer telefonu" id="tel" />
          </div>
        </div>

        <div className={styles.agreementsWrapper}></div>

        <Button
          to="#"
          type="secondary"
          content="Zapisz się"
          className={styles.formButton}
        />
      </form>
    </div>
  );
};
