import Forbes from "@/assets/icons/forbesIcon.svg";
import Vector from "@/assets/icons/vectorImg.svg";
import Image from "next/image";
import Marquee from "react-fast-marquee";

import styles from "./featured_section.module.scss";

const FeaturedSection = () => (
  <section className={styles.section}>
    <div className={styles.title_wrap}>
      <h2 className={styles.title}>FEATURED ON</h2>
    </div>
    <Marquee className={styles.figure_wrap} speed={50}>
      <figure className={styles.figure}>
        <Image src={Forbes} alt="" />
      </figure>
      <figure className={styles.figure}>
        <Image src={Vector} alt="" />
      </figure>
      <figure className={styles.figure}>
        <Image src={Forbes} alt="" />
      </figure>
      <figure className={styles.figure}>
        <Image src={Vector} alt="" />
      </figure>
      <figure className={styles.figure}>
        <Image src={Forbes} alt="" />
      </figure>
      <figure className={styles.figure}>
        <Image src={Vector} alt="" />
      </figure>
      <figure className={styles.figure}>
        <Image src={Forbes} alt="" />
      </figure>
      <figure className={styles.figure}>
        <Image src={Vector} alt="" />
      </figure>
      <figure className={styles.figure}>
        <Image src={Vector} alt="" />
      </figure>
    </Marquee>
    <div className={styles.separator} />
  </section>
);

export { FeaturedSection };
