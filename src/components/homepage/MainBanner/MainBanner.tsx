'use client';

import { Button } from '@/components/common/Button/Button';
import styles from './MainBanner.module.scss';
import { Slider } from '../Slider/Slider';

export const MainBanner = () => {
  return (
    <div className={styles.mainBanner__wrapper}>
      <h1>Hearth of your Home</h1>
      <Button
        className={styles.CTA}
        content="Dowiedz się więcej"
        showArrow={false}
      />
      <Slider />
    </div>
  );
};
