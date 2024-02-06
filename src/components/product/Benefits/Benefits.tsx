'use client';

import { Button } from '@/components/common/Button/Button';
import Image from 'next/image';
import styles from './Benefits.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';
import { isLargeDesktopWidth } from '@/utils/functions';

export const Benefits = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const products = [{}, {}, {}, {}, {}];

  return (
    <div className={styles.benefitsWrapper}>
      <div className={styles.firstSection}>
        <div className={styles.content}>
          <h2>Jakość materiałów</h2>
          <p>
            Supporting line text: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit
          </p>
          <Button to={'/'} content={'Zobacz więcej'} />
        </div>
        <div className={styles.image}>
          {window && (
            <Image
              src={
                isLargeDesktopWidth()
                  ? '/assets/products/cylinde/half2.png'
                  : '/assets/products/cylinde/half.png'
              }
              alt={''}
              width={5000}
              height={0}
            />
          )}
        </div>
      </div>

      <div className={styles.secondSection}>
        <div className={styles.content}>
          <h2>System rozpalania</h2>
          <p>
            Supporting line text: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit
          </p>
        </div>

        <Slider ref={sliderRef} {...settings} className={styles.slick}>
          {products.map((product, i) => {
            return (
              <div key={i} className={styles.product__wrapper}>
                <h3>Rozpalanie:</h3>
                <span>Drewno opałowe:</span>
                <p>
                  Sucha drewniana kostka, brykiet lub drewno liściaste są
                  doskonałym źródłem ciepła.
                </p>
              </div>
            );
          })}
        </Slider>
      </div>

      <div className={styles.thirdSection}>
        <div className={styles.content}>
          <h2>Zamykane drzwiczki</h2>
          <p>
            Supporting line text: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit
          </p>
        </div>
        <div className={styles.image}>
          <Image
            src={'/assets/products/cylinde/last.png'}
            alt={''}
            width={800}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};
