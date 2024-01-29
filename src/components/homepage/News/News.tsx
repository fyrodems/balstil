import classNames from 'classnames';
import styles from './news.module.scss';
import { Button } from '@/components/common/Button/Button';

export const News = () => {
  return (
    <section className={classNames(styles.newsWrapper, styles.mainNewsWrapper)}>
      <div className={classNames(styles.singleNews, styles.singleNews__1)}>
        <div>
          <h2>Nowe zastosowania</h2>
          <div className={styles.text}>
            Supporting line text lorem ipsum dolor sit amet, consectetur.
          </div>
          <Button content={'Sprawdź'} type={'secondary'} />
        </div>
      </div>
      <div className={classNames(styles.newsInnerWrapper)}>
        <div className={classNames(styles.singleNews, styles.singleNews__2)}>
          <div >
            <h2>Nowe zastosowania</h2>
            <div className={styles.text}>
              Supporting line text lorem ipsum dolor sit amet, consectetur.
            </div>
            <Button content={'Sprawdź'} type={'secondary'} />
          </div>
        </div>
        <div className={classNames(styles.singleNews, styles.singleNews__3)}>
          <div>
            <h2>Nowe zastosowania</h2>
            <div className={styles.text}>
              Supporting line text lorem ipsum dolor sit amet, consectetur.
            </div>
            <Button content={'Sprawdź'} type={'secondary'} />
          </div>
        </div>
      </div>
      <div className={classNames(styles.singleNews, styles.singleNews__4)}>
        <div>
          <h2>Nowe zastosowania</h2>
          <div className={styles.text}>
            Supporting line text lorem ipsum dolor sit amet, consectetur.
          </div>
          <Button content={'Sprawdź'} type={'secondary'} />
        </div>
      </div>
    </section>
  );
};
