'use client';

import { Button } from '@/components/common/Button/Button';
import styles from './MainBanner.module.scss';
import { MainBannerSlider } from '../MainBannerSlider/MainBannerSlider';

export const MainBanner = () => {
  return (
    <div className={styles.mainBanner__wrapper}>
      <h1>Hearth of your Home</h1>
      <Button
        className={styles.CTA}
        content="Dowiedz się więcej"
        showArrow={false}
      />
      <MainBannerSlider />
    </div>
  );
};
