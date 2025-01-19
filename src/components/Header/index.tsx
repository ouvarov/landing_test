"use client";

import { FC, useState } from "react";
import classNames from "classnames";
import Image from "next/image";

import logo from "@/assets/icons/logo.svg";
import basket from "@/assets/icons/basket.svg";

import styles from "./header.module.scss";

type Props = {
  count: number;
};

const Header: FC<Props> = ({ count }) => {
  const [isCheckBurger, setIsCheckBurger] = useState(false);

  const handleOnClick = () => {
    setIsCheckBurger((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <div>
        <button
          className={classNames(styles.burger, {
            [styles.burger__active]: isCheckBurger,
          })}
          onClick={handleOnClick}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav
          className={classNames(styles.nav, {
            [styles.nav__active]: isCheckBurger,
          })}
        >
          <a onClick={handleOnClick} className={styles.link} href="#Science">
            Science
          </a>
          <a onClick={handleOnClick} className={styles.link} href="#AboutUs">
            About Us
          </a>
          <a onClick={handleOnClick} className={styles.link} href="#FAQ">
            FAQ
          </a>
        </nav>
      </div>
      <figure className={styles.figure}>
        <Image src={logo} alt="" />
      </figure>

      <div className={styles.basket}>
        <Image src={basket} alt="" />
        {!!count && <div className={styles.count}>{count}</div>}
      </div>
    </header>
  );
};

export { Header };
