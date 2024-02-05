'use client';

import { Button } from '@/components/common/Button/Button';
import styles from './MainBanner.module.scss';
import { MainBannerSlider } from '../MainBannerSlider/MainBannerSlider';

export const MainBanner = () => {
  return (
    <div className={styles.mainBannerWrapper}>
      <div>
        <h1>Heart of your Home</h1>
        <Button
          to="/home"
          className={styles.CTA}
          content="Dowiedz się więcej"
          showArrow={false}
        />
        <MainBannerSlider />
      </div>
    </div>
  );
};
