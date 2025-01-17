import { FC } from "react";
import { UserCard } from "@/components/ScoopSection/components/UsersCard";

import image_69 from "./images/69.svg";
import image_74 from "./images/74.svg";
import image_82 from "./images/82.svg";

import styles from "./scoop_section.module.scss";
import Image from "next/image";

const ScoopSection: FC = () => (
  <section className={styles.section}>
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Be Part of Our Wellness Tribe</h2>
      <p className={styles.text}>Trusted by over 50,000+ People</p>
      <div className={styles.list}>
        <div className={styles.item}>
          <figure className={styles.percent}>
            <Image src={image_69} alt="69%" />
          </figure>
          <p className={styles.item_text}>
            felt a significant reduction in anxiety and stress
          </p>
        </div>
        <div className={styles.item}>
          <figure className={styles.percent}>
            <Image src={image_74} alt="74%" />
          </figure>
          <p className={styles.item_text}>
            felt a significant reduction in anxiety and stress
          </p>
        </div>
        <div className={styles.item}>
          <figure className={styles.percent}>
            <Image src={image_82} alt="82%" />
          </figure>
          <p className={styles.item_text}>
            felt a significant reduction in anxiety and stress
          </p>
        </div>
      </div>
      <p className={styles.subtitle}>
        Scoop. Shake. <span>Thrive</span>
      </p>
      <p className={styles.subtext}>Trusted by over 50,000+ People</p>
    </div>
    <div>
      <UserCard />
    </div>
    <div className={styles.wrapper}>
      <p className={styles.small_text}>
        A balanced diet and physial activity will help you achieve
      </p>
    </div>
  </section>
);

export { ScoopSection };
