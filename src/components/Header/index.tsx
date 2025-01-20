"use client";

import { FC, useState } from "react";
import { scroller } from "react-scroll";
import classNames from "classnames";
import Image from "next/image";

import logo from "@/assets/icons/logo.svg";
import basket from "@/assets/icons/basket.svg";

import styles from "./header.module.scss";

type Props = {
  count: number;
  handleShowCheckout: () => void;
};

const Header: FC<Props> = ({ count, handleShowCheckout }) => {
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
          <button
            type="button"
            onClick={() => {
              handleOnClick();
              scroller.scrollTo("Science", {
                duration: 1500,
                smooth: true,
              });
            }}
            className={styles.link}
          >
            Science
          </button>
          <button
            type="button"
            onClick={() => {
              handleOnClick();
              scroller.scrollTo("AboutUs", {
                duration: 1500,
                smooth: true,
              });
            }}
            className={styles.link}
          >
            About Us
          </button>
          <button
            type="button"
            onClick={() => {
              handleOnClick();
              scroller.scrollTo("FAQ", {
                duration: 1500,
                smooth: true,
              });
            }}
            className={styles.link}
          >
            FAQ
          </button>
        </nav>
      </div>
      <figure className={styles.figure}>
        <Image src={logo} alt="" />
      </figure>

      <button
        type="button"
        onClick={handleShowCheckout}
        className={styles.basket}
      >
        <Image src={basket} alt="" />
        {!!count && <div className={styles.count}>{count}</div>}
      </button>
    </header>
  );
};

export { Header };
