import { FC } from "react";
import Marquee from "react-fast-marquee";

import icon from "./icon.svg";
import Image from "next/image";

import styles from "./marquee_meader.module.scss";

const MarqueeHeader: FC = () => (
  <div>
    <Marquee className={styles.header} speed={50}>
      <div className={styles.wrapper}>
        <figure className={styles.figure}>
          <Image src={icon} alt="" />
        </figure>
        FREE GIFT ON ALL ORDERS OVER $85
      </div>
      <div className={styles.wrapper}>
        <figure className={styles.figure}>
          <Image src={icon} alt="" />
        </figure>
        SAVE UP TO 15%
      </div>
      <div className={styles.wrapper}>
        <figure className={styles.figure}>
          <Image src={icon} alt="" />
        </figure>
        FREE GIFT ON ALL ORDERS OVER $85
      </div>
      <div className={styles.wrapper}>
        <figure className={styles.figure}>
          <Image src={icon} alt="" />
        </figure>
        SAVE UP TO 15%
      </div>
    </Marquee>
  </div>
);

export { MarqueeHeader };
