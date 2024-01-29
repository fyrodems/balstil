import { useRef, useState, MouseEvent } from 'react';
import Image from 'next/image';
import styles from './Slider.module.scss';
import classNames from 'classnames';

type Color = 'black' | 'brown' | 'red' | 'string';

export const Slider: React.FC = () => {
  const [currentColor, setCurrentColor] = useState<Color>('black');
  const [transitioning, setTransitioning] = useState<boolean>(false);
  const [selectedButton, setSelectedButton] = useState<Color>('black');
  const prevSelectedButtonRef = useRef<HTMLDivElement | null>(null);

  const handlePaginationButtonClick = (
    color: Color,
    buttonRef: HTMLDivElement
  ) => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentColor(color);
      setTransitioning(false);
    }, 500);

    // Zmiana bordera dla aktualnie wybranego przycisku
    if (selectedButton !== color) {
      setSelectedButton(color);
      buttonRef.style.borderWidth = '4px';
      buttonRef.style.transform = 'scale(1.2)';

      // Zmiana bordera dla poprzednio wybranego przycisku
      if (prevSelectedButtonRef.current) {
        prevSelectedButtonRef.current.style.borderWidth = '2px';
        prevSelectedButtonRef.current.style.transform = 'scale(1)';
      }

      prevSelectedButtonRef.current = buttonRef;
    }
  };

  const handleFancyPaginationButtonClick = (color: Color) => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentColor(color);
      setTransitioning(false);
    }, 500);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slider__wrapper}>
        <div className={styles.imageContainer}>
          <Image
            className={classNames(styles.image, {
              [styles.transitioning]: transitioning,
            })}
            width={150}
            height={150}
            alt="fireplace"
            src={`/assets/mainBanner/${currentColor}.png`}
          />
        </div>
        <div className={styles.paginationWrapper}>
          <div
            className={classNames(
              styles.paginationButton,
              styles.paginationButton__brown,
              { [styles.selectedButton]: selectedButton === 'brown' }
            )}
            onClick={(e: MouseEvent<HTMLDivElement>) =>
              handlePaginationButtonClick('brown', e.currentTarget)
            }
          ></div>
          <div
            className={classNames(
              styles.paginationButton,
              styles.paginationButton__black,
              { [styles.selectedButton]: selectedButton === 'black' }
            )}
            onClick={(e: MouseEvent<HTMLDivElement>) =>
              handlePaginationButtonClick('black', e.currentTarget)
            }
          ></div>
          <div
            className={classNames(
              styles.paginationButton,
              styles.paginationButton__red,
              { [styles.selectedButton]: selectedButton === 'red' }
            )}
            onClick={(e: MouseEvent<HTMLDivElement>) =>
              handlePaginationButtonClick('red', e.currentTarget)
            }
          ></div>
        </div>
      </div>
      <div className={styles.fancyPagination}>
        <div
          className={classNames(
            styles.fancyPaginationButton,
            styles.fancyPaginationButton__red
          )}
          onClick={(e: MouseEvent<HTMLDivElement>) =>
            handleFancyPaginationButtonClick('red')
          }
        >
          <Image
            className={classNames(styles.fancyImage)}
            width={150}
            height={150}
            alt="fireplace"
            src={`/assets/mainBanner/red.png`}
          />
        </div>

        <div
          className={classNames(
            styles.fancyPaginationButton,
            styles.fancyPaginationButton__black
          )}
          onClick={(e: MouseEvent<HTMLDivElement>) =>
            handleFancyPaginationButtonClick('black')
          }
        >
          <Image
            className={classNames(styles.fancyImage)}
            width={150}
            height={150}
            alt="fireplace"
            src={`/assets/mainBanner/black.png`}
          />
        </div>

        <div
          className={classNames(
            styles.fancyPaginationButton,
            styles.fancyPaginationButton__brown
          )}
          onClick={(e: MouseEvent<HTMLDivElement>) =>
            handleFancyPaginationButtonClick('brown')
          }
        >
          <Image
            className={classNames(styles.fancyImage)}
            width={150}
            height={150}
            alt="fireplace"
            src={`/assets/mainBanner/brown.png`}
          />
        </div>
      </div>
    </div>
  );
};
