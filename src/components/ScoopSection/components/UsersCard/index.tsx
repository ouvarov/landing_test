"use client";
import Slider, { Settings as SlickSettings } from "react-slick";
import { FC, useState } from "react";
import Image from "next/image";

import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";

import styles from "./users_card.module.scss";

const SLIDES = 3;
const UserCard: FC = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const settings: SlickSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    afterChange: (current) => setActiveSlide(current),
  };

  const calculateSlidePercentage = (
    activeSlideIndex: number,
    totalSlides: number,
  ) => {
    if (totalSlides === 0) return 0; // Защита от деления на 0
    return ((activeSlideIndex + 1) / totalSlides) * 100;
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Slider {...settings}>
          <div className={styles.card}>
            <figure className={styles.figure}>
              <Image src={image1} alt="" />
            </figure>
            <div className={styles.footer}>
              <p className={styles.title}>Scoop</p>
              <p className={styles.text}>
                Add 1 scoop to 8-10 oz of water or your favorite beverage
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <figure className={styles.figure}>
              <Image src={image2} alt="" />
            </figure>
            <div className={styles.footer}>
              <p className={styles.title}>Scoop</p>
              <p className={styles.text}>
                Add 1 scoop to 8-10 oz of water or your favorite beverage
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <figure className={styles.figure}>
              <Image src={image3} alt="" />
            </figure>
            <div className={styles.footer}>
              <p className={styles.title}>Scoop</p>
              <p className={styles.text}>
                Add 1 scoop to 8-10 oz of water or your favorite beverage
              </p>
            </div>
          </div>
        </Slider>
      </div>
      <div className={styles.loader}>
        <div
          className={styles.loader_item}
          style={{ width: `${calculateSlidePercentage(activeSlide, SLIDES)}%` }}
        />
      </div>
    </>
  );
};

export { UserCard };
