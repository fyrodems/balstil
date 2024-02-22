import { Button } from '@/components/common/Button/Button';
import { PageTitle } from '@/components/common/PageTitle/PageTitle';
import styles from '../styles/NotFound.module.scss';

export default function NotFoundPage() {
  return (
    <div className={styles.notFoundPage}>
      <PageTitle
        pageTitle={'404'}
        supportingText={'Nie znaleziono strony'}
        mainColor={'#1B1F2D'}
        gradient="to-right"
      />
      <div className={styles.content}>
        <h2>Ups!</h2>
        <p>
          Wygląda na to, że zgubiłeś się w płomieniach i dymie.
          <br />
          Strona, której szukasz, niestety gdzieś się ulotniła!
        </p>
        <div className={styles.buttonWrapper}>
          <Button to="/" content="Wróć na stronę główną" />
        </div>
      </div>
    </div>
  );
}
