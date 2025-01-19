"use client";
import Slider, { Settings as SlickSettings } from "react-slick";

import can1 from "./can_1.png";
import can2 from "./can_1.png";
import can3 from "./can_1.png";
import can4 from "./can_1.png";
import can5 from "./can_1.png";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./slider.module.scss";

const icons = [can1, can2, can3, can4, can5];

const SliderSection = () => {
  const settings: SlickSettings = {
    customPaging: function (i) {
      return (
        <a>
          <figure className={styles.figure}>
            <Image src={icons[i]} alt="" />
          </figure>
        </a>
      );
    },
    dots: true,
    infinite: false,
    speed: 500,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.wrapper}>
        <Slider {...settings}>
          <figure>
            <Image src={icons[0]} alt="" />
          </figure>
          <figure>
            <Image src={icons[1]} alt="" />
          </figure>
          <figure>
            <Image src={icons[2]} alt="" />
          </figure>
          <figure>
            <Image src={icons[3]} alt="" />
          </figure>
          <figure>
            <Image src={icons[4]} alt="" />
          </figure>
        </Slider>
      </div>
    </div>
  );
};

export { SliderSection };
