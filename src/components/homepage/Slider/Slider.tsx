import Slick from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Slider.module.scss';
import Image from 'next/image';

export const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
                <h3></h3>
              </div>
            </div>
          );
        })}
      </Slick>
    </>
  );
};
