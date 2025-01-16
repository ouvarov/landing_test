import { FC } from "react";
import Image from "next/image";

import figureImage from "./images/figure.png";
import tablet2 from "./images/tablet-2.png";
import tablet1 from "./images/tablet-1.png";
import stars from "@/assets/icons/stars.svg";
import trustpilotIcon from "./images/trustpilotIcon.svg";
import check from "@/assets/icons/check.svg";

import styles from "./try_section.module.scss";

const TrySection: FC = () => (
  <section className={styles.section}>
    <div className={styles.wrapper}>
      <div className={styles.image_wrap}>
        <figure className={styles.image}>
          <Image src={figureImage} alt="" />
        </figure>
        <figure className={styles.tablet_1}>
          <Image src={tablet1} alt="" />
        </figure>
        <figure className={styles.tablet_2}>
          <Image src={tablet2} alt="" />
        </figure>
      </div>
      <div className={styles.rating_wrap}>
        <figure className={styles.stars}>
          <Image src={stars} alt="" />
        </figure>
        <p className={styles.rating}>
          <strong>4.9/5</strong> | 436 reviews
        </p>
        <figure className={styles.trustpilot}>
          <Image src={trustpilotIcon} alt="" />
        </figure>
      </div>
      <h2 className={styles.title}>
        Meditation in a pill.{" "}
        <span>
          Feel the joy of <br /> being present.
        </span>
      </h2>
      <p className={styles.text}>
        Achieve a balanced mind and inner peace effortlessly.
      </p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <figure className={styles.check}>
            <Image src={check} alt="" />
          </figure>
          Protects the neurons
        </li>
        <li className={styles.item}>
          <figure className={styles.check}>
            <Image src={check} alt="" />
          </figure>
          Improves concentration and focus
        </li>
        <li className={styles.item}>
          <figure className={styles.check}>
            <Image src={check} alt="" />
          </figure>
          Restores a sense of calm
        </li>
        <li className={styles.item}>
          <figure className={styles.check}>
            <Image src={check} alt="" />
          </figure>
          Creates space for what matters
        </li>
      </ul>
      <button className={styles.button}>
        <span>Try Present Perfect</span>
      </button>
    </div>
  </section>
);

export { TrySection };
