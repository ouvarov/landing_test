"use client";
import { FC } from "react";
import Slider from "react-slick";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import quotationMarks from "@/assets/icons/quotationMarks.svg";
import stars from "@/assets/icons/stars.svg";

import styles from "./reviews_section.module.scss";

const ReviewsSection: FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    centerMode: true,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Reviews</h2>
        <p className={styles.headline}>Real Results from Real People</p>
      </div>
      <div>
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
        </Slider>
      </div>
    </section>
  );
};

export { ReviewsSection };
