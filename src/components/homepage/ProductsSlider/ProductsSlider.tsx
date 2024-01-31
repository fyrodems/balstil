import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './ProductsSlider.module.scss';
import Image from 'next/image';
import { Button } from '@/components/common/Button/Button';

export const ProductsSlider = () => {
  const sliderRef = useRef<Slider>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  const products = [
    {
      image: '/assets/productsSlider/product1.png',
      title: 'Kominek',
      description: 'Supporting line text',
      price: '300$',
      oldPrice: '350$',
    },
    {
      image: '/assets/productsSlider/product2.png',
      title: 'Kominek',
      description: 'Supporting line text',
      price: '300$',
      oldPrice: '350$',
    },
    {
      image: '/assets/productsSlider/product3.png',
      title: 'Kominek',
      description: 'Supporting line text',
      price: '300$',
      oldPrice: '350$',
    },
    {
      image: '/assets/productsSlider/product1.png',
      title: 'Kominek',
      description: 'Supporting line text',
      price: '300$',
      oldPrice: '350$',
    },
    {
      image: '/assets/productsSlider/product2.png',
      title: 'Kominek',
      description: 'Supporting line text',
      price: '300$',
      oldPrice: '350$',
    },
    {
      image: '/assets/productsSlider/product3.png',
      title: 'Kominek',
      description: 'Supporting line text',
      price: '300$',
      oldPrice: '350$',
    },
  ];

  return (
    <>
      <h2 className={styles.sliderTitle}>Nasze produkty</h2>
      <Slider ref={sliderRef} {...settings} className={styles.slick}>
        {products.map((product, i) => {
          return (
            <div key={i} className={styles.product__wrapper}>
              <Image
                width={120}
                height={0}
                src={product.image}
                alt={product.title}
                className={styles.image}
              />
              <div className={styles.content}>
                <div>
                  <h3 className={styles.title}>{product.title}</h3>
                  <span className={styles.description}>
                    {product.description}
                  </span>
                </div>
                <div className={styles.rightContainer}>
                  <span className={styles.price}>{product.price}</span>
                  <span className={styles.oldPrice}>{product.oldPrice}</span>
                  <span className={styles.omnibus}>
                    najniższa cena <br />
                    z ostatnich 30 dni: <br />
                    7,49 PLN
                  </span>
                </div>
              </div>
              <Button content="Szczegóły" className={styles.CTA} />
            </div>
          );
        })}
      </Slider>
      <div className={styles.arrowsContainer}>
        <button className={styles.prevArrow} onClick={previous}>
          <img src="/assets/productsSlider/arrowPrev.svg" alt="" />
        </button>
        <button className={styles.nextArrow} onClick={next}>
          <img src="/assets/productsSlider/arrowNext.svg" alt="" />
        </button>
      </div>
    </>
  );
};
