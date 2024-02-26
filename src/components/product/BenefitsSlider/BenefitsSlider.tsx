import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./BenefitsSlider.module.scss";
import Image from "next/image";

export const BenefitsSlider = () => {
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

  const products = [
    {
      image: "/assets/products/cylinde/slider.png",
    },
    {
      image: "/assets/products/cylinde/slider.png",
    },
    {
      image: "/assets/products/cylinde/slider.png",
    },
    {
      image: "/assets/products/cylinde/slider.png",
    },
    {
      image: "/assets/products/cylinde/slider.png",
    },
  ];

  return (
    <section className={styles.sliderWrapper}>
      <h2 className={styles.sliderTitle}>Dlaczego warto wybrać Cylinde?</h2>
      <Slider ref={sliderRef} {...settings} className={styles.slick}>
        {products.map((product, i) => {
          return (
            <div key={i} className={styles.product__wrapper}>
              <Image
                width={600}
                height={0}
                src={product.image}
                className={styles.image}
                alt=""
              />
            </div>
          );
        })}
      </Slider>
    </section>
  );
};
