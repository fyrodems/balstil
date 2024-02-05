import React, { useState } from 'react';
import Image from 'next/image';
import styles from './MainBanner.module.scss';
import classNames from 'classnames';
import { Button } from '@/components/common/Button/Button';

type Color = 'black' | 'brown' | 'red';

interface SliderProps {
  color: Color;
  transitioning: boolean;
  selectedButton: Color;
  handlePaginationButtonClick: (color: Color) => void;
  handleFancyPaginationButtonClick: (color: Color) => void;
}

const SliderImage: React.FC<{
  currentColor: Color;
  transitioning: boolean;
}> = ({ currentColor, transitioning }) => (
  <div className={styles.imageContainer}>
    <Image
      className={classNames(styles.image, {
        [styles.transitioning]: transitioning,
      })}
      width={800}
      height={150}
      alt="fireplace"
      src={`/assets/products/cylinde/mainImg.png`}
    />
  </div>
);

const PaginationButton: React.FC<{
  color: Color;
  selected: boolean;
  onClick: () => void;
}> = ({ color, selected, onClick }) => (
  <div
    className={classNames(
      styles.paginationButton,
      styles[`paginationButton__${color}`],
      {
        [styles.selectedButton]: selected,
      }
    )}
    onClick={onClick}
    style={
      selected
        ? { transform: 'scale(1.1)', border: '4px solid #62636A' }
        : undefined
    }
  />
);

export const MainBanner: React.FC = () => {
  const [currentColor, setCurrentColor] = useState<Color>('black');
  const [transitioning, setTransitioning] = useState<boolean>(false);
  const [selectedButton, setSelectedButton] = useState<Color>('black');

  const handlePaginationButtonClick = (color: Color) => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentColor(color);
      setTransitioning(false);
    }, 500);

    setSelectedButton(color);
  };

  return (
    <>
      <div className={styles.mainBannerSlider}>
        <div className={styles.sliderWrapper}>
          <SliderImage
            currentColor={currentColor}
            transitioning={transitioning}
          />
          <div className={styles.paginationWrapper}>
            {['brown', 'black', 'white'].map((color) => (
              <PaginationButton
                key={color}
                color={color as Color}
                selected={selectedButton === color}
                onClick={() => handlePaginationButtonClick(color as Color)}
              />
            ))}
          </div>
        </div>
        <div className={styles.CTA}>
          <div>
            <h2>Cylinde</h2>
            <span>300$</span>
          </div>
          <span>Supporting line text</span>
          <Button to={'#'} content="Dodaj do koszyka" />
        </div>
      </div>
    </>
  );
};
