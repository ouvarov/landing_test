import { FC } from "react";
import { VideoCards } from "@/components/WellnessSection/components/VideoCards";

import styles from "./wellness_section.module.scss";

const WellnessSection: FC = () => (
  <section className={styles.section}>
    <h2 className={styles.title}>Be Part of Our Wellness Tribe</h2>
    <p className={styles.text}>Trusted by over 50,000+ People</p>
    <div>
      <VideoCards />
    </div>
  </section>
);

export { WellnessSection };
