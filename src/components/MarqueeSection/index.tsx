import { FC } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

import check from "@/assets/icons/check_white.svg";

import styles from "./marquee_section.module.scss";

const MarqueeSection: FC = () => (
  <div className={styles.section}>
    <Marquee speed={50}>
      <div className={styles.item}>
        <figure className={styles.figure}>
          <Image src={check} alt="" />
        </figure>
        Gluten Free
      </div>
      <div className={styles.item}>
        <figure className={styles.figure}>
          <Image src={check} alt="" />
        </figure>
        Soy Free
      </div>
      <div className={styles.item}>
        <figure className={styles.figure}>
          <Image src={check} alt="" />
        </figure>
        Dietary Free
      </div>
    </Marquee>
  </div>
);

export { MarqueeSection };
