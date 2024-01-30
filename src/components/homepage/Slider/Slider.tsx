import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.scss';
import Image from 'next/image';
import { Button } from '@/components/common/Button/Button';

export const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
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
      <Slick {...settings} className={styles.slick}>
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
                    najniższa cena <br /> z ostatnich 30 dni: <br />
                    7,49 zł
                  </span>
                </div>
              </div>
              <Button content="Szczegóły" className={styles.CTA} />
            </div>
          );
        })}
      </Slick>
    </>
  );
};
