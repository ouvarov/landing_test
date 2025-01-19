import { FC } from "react";
import Image from "next/image";

import logo from "@/assets/icons/logo.svg";

import styles from "./header.module.scss";

const Header: FC = () => (
  <header className={styles.header}>
    <nav>
      <a className={styles.link} href="#Science">
        Science
      </a>
      <a className={styles.link} href="#AboutUs">
        About Us
      </a>
      <a className={styles.link} href="#FAQ">
        FAQ
      </a>
    </nav>
    <figure className={styles.figure}>
      <Image src={logo} alt="" />
    </figure>

    <div className={styles.basket} />
  </header>
);

export { Header };
