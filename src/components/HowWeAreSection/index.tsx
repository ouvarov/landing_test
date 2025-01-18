import Image from "next/image";

import tabletImg from "./images/tablet.svg";
import tabletDesktopImg from "./images/tablet_desktop.svg";

import styles from "./how_we_are_section.module.scss";

const HowWeAreSection = () => (
  <section className={styles.section}>
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        How we are <br />
        <span>Different</span>
      </h2>
      <p className={styles.subtitle}>Trusted by over 50,000+ People</p>
      <div>
        <figure className={styles.figure}>
          <Image className={styles.img_mobile} src={tabletImg} alt=" " />
          <Image
            className={styles.img_desktop}
            src={tabletDesktopImg}
            alt=" "
          />
        </figure>
      </div>
      <p className={styles.text}>
        A balanced diet and physial activity will help you achieve
      </p>
    </div>
  </section>
);

export { HowWeAreSection };
