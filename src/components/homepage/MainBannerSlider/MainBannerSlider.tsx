import React, { useState } from 'react';
import Image from 'next/image';
import styles from './MainBannerSlider.module.scss';
import classNames from 'classnames';

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
      width={150}
      height={150}
      alt="fireplace"
      src={`/assets/mainBanner/${currentColor}.webp`}
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
      selected ? { transform: 'scale(1.3)', border: '4px solid' } : undefined
    }
  />
);

const FancyPaginationButton: React.FC<{
  color: Color;
  selected: boolean;
  onClick: () => void;
}> = ({ color, selected, onClick }) => (
  <div
    className={classNames(
      styles.fancyPaginationButton,
      styles[`fancyPaginationButton__${color}`],
      {
        [styles.selectedButton]: selected,
      }
    )}
    onClick={onClick}
  >
    <Image
      className={classNames(styles.fancyImage)}
      width={150}
      height={150}
      alt="fireplace"
      src={`/assets/mainBanner/${color}.webp`}
    />
  </div>
);

export const MainBannerSlider: React.FC = () => {
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
    <div className={styles.mainBannerSlider}>
      <div className={styles.sliderWrapper}>
        <SliderImage
          currentColor={currentColor}
          transitioning={transitioning}
        />
        <div className={styles.paginationWrapper}>
          {['red', 'black', 'brown'].map((color) => (
            <PaginationButton
              key={color}
              color={color as Color}
              selected={selectedButton === color}
              onClick={() => handlePaginationButtonClick(color as Color)}
            />
          ))}
        </div>
      </div>
      <div className={styles.fancyPagination}>
        {['red', 'black', 'brown'].map((color) => (
          <FancyPaginationButton
            key={color}
            color={color as Color}
            selected={selectedButton === color}
            onClick={() => handlePaginationButtonClick(color as Color)}
          />
        ))}
      </div>
    </div>
  );
};
