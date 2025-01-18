import { SliderSection } from "@/components/SalesSection/components/Slider";

import stars from "@/assets/icons/stars.svg";
import arrow from "@/assets/icons/arrow.svg";

import Image from "next/image";

import styles from "./sales_section.module.scss";
import { FAQ } from "./components/FAQ";
import { Price } from "@/components/SalesSection/components/Price";

const SalesSection = () => (
  <section className={styles.section}>
    <div>
      <div>
        <SliderSection />
      </div>
      <div>
        <div className={styles.rating_wrap}>
          <figure className={styles.star}>
            <Image src={stars} alt="" />
          </figure>
          <p className={styles.rating}>
            <strong>4.9/5</strong> | 436 reviews
          </p>
        </div>
        <h2 className={styles.title}>Brain Enhancer</h2>
        <p className={styles.subtitle}>Mushroom Supplement</p>
        <p className={styles.text}>
          Achieve a balanced mind and inner peace effortlessly.
        </p>
        <div className={styles.list_title_wrap}>
          <p className={styles.list_title}>Nutritional Information</p>
          <figure>
            <Image src={arrow} alt="" />
          </figure>
        </div>
        <ul className={styles.list}>
          <li className={styles.item}>Protects the neurons</li>
          <li className={styles.item}>Improves concentration and focus</li>
          <li className={styles.item}>Restores a sense of calm</li>
          <li className={styles.item}>Creates space for what matters</li>
        </ul>

        <div className={styles.price_wrap}>
          <Price />
        </div>

        <div className={styles.faq_wrap}>
          <FAQ />
        </div>
      </div>
    </div>
  </section>
);

export { SalesSection };
