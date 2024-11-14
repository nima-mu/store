import React from "react";
import Slider from "react-slick";
import styles from "./HomeBrands.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const imageElements = [];
  for (let i = 1; i < 6; i++) {
    imageElements.push(
      <div key={i} className={styles.brands__imageContainer}>
        <img src={`assets/images/${i}.webp`} alt={`Image ${i}`} />
      </div>
    );
  }

  return (
    <div className={styles.brands}>
      <Slider {...settings}>{imageElements}</Slider>
    </div>
  );
};

export default ImageComponent;
