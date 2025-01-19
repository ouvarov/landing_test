import { FC } from "react";

import styles from "./benefits_section.module.scss";
import Image from "next/image";

import bg from "./bg.png";

const BenefitsSection: FC = () => (
  <section className={styles.section} id="SAboutUs">
    <div className={styles.wrap}>
      <h2 className={styles.title}>Benefits of daily use</h2>
      <p className={styles.text}>
        Achieve a balanced mind and inner peace effortlessly.
      </p>
    </div>
    <div className={styles.wrapper}>
      <div>
        <figure className={styles.figure}>
          <Image src={bg} alt="" />
        </figure>
        <p className={styles.subtext_desktop}>
          * A balanced diet and physial activity will help you achieve
        </p>
      </div>
      <div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div className={styles.label}>15 Minutes</div>
            <p className={styles.item_title}>Boosts energy level</p>
            <p className={styles.item_text}>
              Achieve a balanced mind and inner peace effortlessly. Experience
              steadier nerves, moments of calm.
            </p>
          </li>
          <li className={styles.item}>
            <div className={styles.label}>1-2 Days</div>
            <p className={styles.item_title}>Promotes brain health</p>
            <p className={styles.item_text}>
              Achieve a balanced mind and inner peace effortlessly. Experience
              steadier nerves, moments of calm.
            </p>
          </li>
          <li className={styles.item}>
            <div className={styles.label}>1 Week</div>
            <p className={styles.item_title}>Maximizes deep sleep</p>
            <p className={styles.item_text}>
              Achieve a balanced mind and inner peace effortlessly. Experience
              steadier nerves, moments of calm.
            </p>
          </li>
          <li className={styles.item}>
            <div className={styles.label}>1 Week</div>
            <p className={styles.item_title}>Boosts energy level</p>
            <p className={styles.item_text}>
              Achieve a balanced mind and inner peace effortlessly. Experience
              steadier nerves, moments of calm.
            </p>
          </li>
        </ul>

        <p className={styles.subtext}>
          * A balanced diet and physial activity will help you achieve
        </p>
      </div>
    </div>
  </section>
);

export { BenefitsSection };
