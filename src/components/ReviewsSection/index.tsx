import { FC } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./reviews_section.module.scss";
import { Reviews } from "@/components/ReviewsSection/components/Reviews";

const ReviewsSection: FC = () => (
  <section className={styles.section}>
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Reviews</h2>
      <p className={styles.headline}>Real Results from Real People</p>
    </div>
    <div>
      <Reviews />
    </div>
  </section>
);

export { ReviewsSection };
