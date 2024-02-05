import { Button } from '@/components/common/Button/Button';
import styles from './Portfolio.module.scss';
import { Link } from '@/navigation';

export const Portfolio = () => {
  return (
    <div className={styles.portfolioWrapper}>
      <div className={styles.portfolioQuote}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <Button to="#" content="Szczegóły" className={styles.CTA} />
      </div>
      <Link className={styles.gallery} href="#">
        <Button
          to="#"
          className={styles.galleryButton}
          content="KOMINEK"
          type="tertiary"
        />
        <img
          src="/assets/portfolio/mainPortfolioImage.png"
          className={styles.image}
          alt="kominek"
        />
      </Link>
    </div>
  );
};
