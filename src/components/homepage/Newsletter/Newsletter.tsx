import { Button } from "@/components/common/Button/Button";
import styles from "./Newsletter.module.scss";

export const Newsletter = () => {
  return (
    <div className={styles.newsletterWrapper}>
      <div className={styles.description}>
        <h2>
          Zapisz się do
          <br />
          newslettera BÅLSTIL
        </h2>
        <p>
          Dołącz do naszego newslettera i otrzymuj ekskluzywne|aktualizacje,
          atrakcyjne oferty oraz cenne informacje bezpośrednio na swoją skrzynkę
          mailową!
        </p>
      </div>

      <form className={styles.form}>
        <div className={styles.inputWrapper}>
          <div className={styles.input}>
            <label htmlFor="email">E-mail</label>
            <input type="email" placeholder="E-mail" id="email" />
          </div>
          <Button
            to="#"
            type="primary"
            content="Zapisz się"
            className={styles.formButton}
          />
        </div>

        <div className={styles.agreementsWrapper}>
          Zapisując się do Newslettera wyrażam zgodę na otrzymywanie drogą
          elektroniczną na wskazany przeze mnie adres email informacji
          handlowej. Zapoznałem się z Regulaminem Sklepu internetowego oraz
          akceptuję jego postanowienia.
        </div>
      </form>
    </div>
  );
};
