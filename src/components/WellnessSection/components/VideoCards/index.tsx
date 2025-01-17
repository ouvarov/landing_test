"use client";
import Image from "next/image";

import image from "./image.png";

import Slider, { Settings as SlickSettings } from "react-slick";

import styles from "./video_cards.module.scss";

const VideoCards = () => {
  const settings: SlickSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    centerMode: true,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div className={styles.wrapper}>
      <Slider {...settings}>
        <div className={styles.card}>
          <video className={styles.video} loop autoPlay muted playsInline>
            <track default kind="captions" srcLang="en" />
            <source
              src={
                "https://muscimol1.com.ua/cdn/shop/t/6/assets/m1-video-1.mp4?v=10010909435646270511736350276"
              }
              type="video/mp4"
            />
          </video>
          <div className={styles.footer}>
            <figure className={styles.figure}>
              <Image src={image} alt="" />
            </figure>
            <p className={styles.title}> Brain enhancer</p>
            <p className={styles.text}>(Amanita Muscaria)</p>
          </div>
        </div>
        <div className={styles.card}>
          <video className={styles.video} loop autoPlay muted playsInline>
            <track default kind="captions" srcLang="en" />
            <source
              src={
                "https://muscimol1.com.ua/cdn/shop/t/6/assets/m1-video-1.mp4?v=10010909435646270511736350276"
              }
              type="video/mp4"
            />
          </video>
          <div className={styles.footer}>
            <figure className={styles.figure}>
              <Image src={image} alt="" />
            </figure>
            <p className={styles.title}> Brain enhancer</p>
            <p className={styles.text}>(Amanita Muscaria)</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export { VideoCards };
