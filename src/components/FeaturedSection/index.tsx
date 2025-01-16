import Marquee from "react-fast-marquee";

import Forbes from "@/assets/icons/forbesIcon.svg";
import Vector from "@/assets/icons/vectorImg.svg";
import Image from "next/image";

import styles from "./featured_section.module.scss";

const FeaturedSection = () => (
  <section className={styles.section}>
    <div className={styles.title_wrap}>
      <h2 className={styles.title}>FEATURED ON</h2>
    </div>
    <Marquee speed={50}>
      <figure>
        <Image src={Forbes} alt="" />
      </figure>
      <figure>
        <Image src={Vector} alt="" />
      </figure>
    </Marquee>
    <div className={styles.separator} />
  </section>
);

export { FeaturedSection };
