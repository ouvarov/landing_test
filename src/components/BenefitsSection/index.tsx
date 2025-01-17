import { FC } from "react";

import styles from "./benefits_section.module.scss";

const BenefitsSection: FC = () => (
  <section>
    <div className={styles.wrap}>
      <h2 className={styles.title}>Benefits of daily use</h2>
      <p className={styles.text}>
        Achieve a balanced mind and inner peace effortlessly.
      </p>
    </div>
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.item_title}>Boosts energy level</p>
          <p className={styles.item_text}>
            Achieve a balanced mind and inner peace effortlessly. Experience
            steadier nerves, moments of calm.
          </p>
        </li>
        <li className={styles.item}>
          <p className={styles.item_title}>Promotes brain health</p>
          <p className={styles.item_text}>
            Achieve a balanced mind and inner peace effortlessly. Experience
            steadier nerves, moments of calm.
          </p>
        </li>
        <li className={styles.item}>
          <p className={styles.item_title}>Maximizes deep sleep</p>
          <p className={styles.item_text}>
            Achieve a balanced mind and inner peace effortlessly. Experience
            steadier nerves, moments of calm.
          </p>
        </li>
        <li className={styles.item}>
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
  </section>
);

export { BenefitsSection };
