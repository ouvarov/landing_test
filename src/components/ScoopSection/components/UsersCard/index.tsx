"use client";
import Slider, { Settings as SlickSettings } from "react-slick";
import { FC, useState } from "react";
import Image from "next/image";

import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";

import styles from "./users_card.module.scss";
import { calculateSlidePercentage } from "@/helpers/calculateSlidePercentage";

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

  return (
    <>
      <div className={styles.wrapper}>
        <Slider className={styles.slider} {...settings}>
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
        <div className={styles.inner_wrap}>
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
        </div>
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
