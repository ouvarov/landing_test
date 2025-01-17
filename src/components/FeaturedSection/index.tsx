import Forbes from "@/assets/icons/forbesIcon.svg";
import Vector from "@/assets/icons/vectorImg.svg";
import Image from "next/image";

import styles from "./featured_section.module.scss";

const FeaturedSection = () => (
  <section className={styles.section}>
    <div className={styles.title_wrap}>
      <h2 className={styles.title}>FEATURED ON</h2>
    </div>
    <div className={styles.figure_wrap}>
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
    </div>
    <div className={styles.separator} />
  </section>
);

export { FeaturedSection };
