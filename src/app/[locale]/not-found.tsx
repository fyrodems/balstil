import { Button } from '@/components/common/Button/Button';
import { PageTitle } from '@/components/common/PageTitle/PageTitle';
import styles from '../styles/NotFound.module.scss';
import { useTranslations } from 'next-intl';

export default function NotFoundPage() {
  const t = useTranslations('404');

  return (
    <div className={styles.notFoundPage}>
      <PageTitle
        pageTitle={'404'}
        supportingText={t('supportingText')}
        mainColor={'#1B1F2D'}
        gradient="to-right"
      />
      <div className={styles.content}>
        <h2>Ups!</h2>
        <p>{t('text')}</p>
        <div className={styles.buttonWrapper}>
          <Button to="/" content={t('buttonContent')} />
        </div>
      </div>
    </div>
  );
}
