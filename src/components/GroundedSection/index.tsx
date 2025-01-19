import Image from "next/image";

import mushroom from "./mushroom.png";

import styles from "./grounded_section.module.scss";

const GroundedSection = () => (
  <section className={styles.section} id="Science">
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Grounded in Nature, Proven by Science</h2>
      <p className={styles.subtitle}>
        Supresa Clinical Study Shows Descrease <br /> in Hunger & Appetite in 8
        weeks
      </p>
      <div className={styles.wrap}>
        <div className={styles.figure_wrapper}>
          <figure className={styles.figure}>
            <Image src={mushroom} alt="" />
          </figure>
        </div>
        <div className={styles.content_wrap}>
          <p className={styles.headline}>
            Amanita Muscaria: Nature’s Most Unique Ingredient
          </p>
          <p className={styles.text}>
            Handpicked in the forest, purified in the lab — experience the best
            of both worlds. Thanks to our unique extraction technology, we keep
            the benefits of Amanita Muscaria while removing unwanted
            neurotoxins. <br />
            <br /> Our main ingredient, Amanita Muscaria, is carefully
            handpicked from pristine forest environments. This extraordinary
            mushroom thrives in symbiosis with trees, making it one of nature’s
            rarest gifts. By harnessing its unique properties, we ensure a
            natural, high-quality supplement that’s both potent and safe. Rooted
            in nature and backed by science, Amanita Muscaria is the foundation
            of our formula.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export { GroundedSection };
