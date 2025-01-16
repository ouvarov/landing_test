import { FC } from "react";
import Image from "next/image";

import logo from "@/assets/icons/logo.svg";

import styles from "./header.module.scss";

const Header: FC = () => (
  <header className={styles.header}>
    <figure className={styles.figure}>
      <Image src={logo} alt="" />
    </figure>
  </header>
);

export { Header };
