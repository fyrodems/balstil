import { Button } from '@/components/common/Button/Button';
import styles from './Portfolio.module.scss';
import { Link } from '@/navigation';
import Image from 'next/image';

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
      <div className={styles.gallery}>
        <Button
          to="#"
          className={styles.galleryButton}
          content="KOMINEK"
          type="tertiary"
        />
        <Link href="#">
          <Image
            width={3000}
            height={0}
            src="/assets/portfolio/mainPortfolioImage.png"
            className={styles.image}
            alt="kominek"
          />
        </Link>
      </div>
    </div>
  );
};
