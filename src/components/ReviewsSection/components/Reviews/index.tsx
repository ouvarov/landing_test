"use client";
import Slider, { Settings as SlickSettings } from "react-slick";
import { FC } from "react";
import Image from "next/image";
import quotationMarks from "@/assets/icons/quotationMarks.svg";
import stars from "@/assets/icons/stars.svg";

import styles from "./reviews.module.scss";

const Reviews: FC = () => {
  const settings: SlickSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div className={styles.wrapper}>
      <Slider {...settings}>
        <div className={styles.card}>
          <figure className={styles.quotation_marks}>
            <Image src={quotationMarks} alt="" />
          </figure>
          <p className={styles.card_title}>Best on the market</p>
          <div className={styles.rating_wrap}>
            <figure className={styles.stars}>
              <Image src={stars} alt="" />
            </figure>
            <p className={styles.rating_text}>2 days ago</p>
          </div>
          <p className={styles.text}>
            I love this product because the support is great. Please ...
          </p>
          <p className={styles.user_name}>Worldtraveler</p>
        </div>
        <div className={styles.card}>
          <figure className={styles.quotation_marks}>
            <Image src={quotationMarks} alt="" />
          </figure>
          <p className={styles.card_title}>Best on the market</p>
          <div className={styles.rating_wrap}>
            <figure className={styles.stars}>
              <Image src={stars} alt="" />
            </figure>
            <p className={styles.rating_text}>2 days ago</p>
          </div>
          <p className={styles.text}>
            I love this product because the support is great. Please ...
          </p>
          <p className={styles.user_name}>Worldtraveler</p>
        </div>
        <div className={styles.card}>
          <figure className={styles.quotation_marks}>
            <Image src={quotationMarks} alt="" />
          </figure>
          <p className={styles.card_title}>Best on the market</p>
          <div className={styles.rating_wrap}>
            <figure className={styles.stars}>
              <Image src={stars} alt="" />
            </figure>
            <p className={styles.rating_text}>2 days ago</p>
          </div>
          <p className={styles.text}>
            I love this product because the support is great. Please ...
          </p>
          <p className={styles.user_name}>Worldtraveler</p>
        </div>
        <div className={styles.card}>
          <figure className={styles.quotation_marks}>
            <Image src={quotationMarks} alt="" />
          </figure>
          <p className={styles.card_title}>Best on the market</p>
          <div className={styles.rating_wrap}>
            <figure className={styles.stars}>
              <Image src={stars} alt="" />
            </figure>
            <p className={styles.rating_text}>2 days ago</p>
          </div>
          <p className={styles.text}>
            I love this product because the support is great. Please ...
          </p>
          <p className={styles.user_name}>Worldtraveler</p>
        </div>
      </Slider>
    </div>
  );
};

export { Reviews };
