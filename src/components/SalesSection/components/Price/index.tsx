"use client";
import { FC, useState } from "react";
import classNames from "classnames";
import Image from "next/image";

import check from "@/assets/icons/check_red.svg";
import easy from "@/assets/icons/easy.svg";
import time from "@/assets/icons/time.svg";
import shipping from "@/assets/icons/shipping.svg";

import styles from "./price.module.scss";

const Price: FC = () => {
  const [activePrice, setActivePrice] = useState("popular");

  const handleOnClick = (type: string) => {
    setActivePrice(type);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          handleOnClick("popular");
        }}
        className={classNames(styles.card, {
          [styles.card__active]: activePrice === "popular",
        })}
      >
        <div className={styles.label}>1-MONTH SUPPLY</div>
        <div className={styles.title_wrap}>
          <p className={styles.title}>MOST POPULAR</p>
          <p>
            <span className={styles.old_price}>$69</span>{" "}
            <span className={styles.price}>$49.5</span>
          </p>
        </div>
        <p className={styles.subtitle}>1 bottle shipped every month</p>
        <p className={styles.item}>
          <figure className={styles.check}>
            <Image src={check} alt="" />
          </figure>
          <span>10% off </span> future deliveries
        </p>
        <p className={styles.item}>
          <figure className={styles.check}>
            <Image src={check} alt="" />
          </figure>
          1 serving per day
        </p>
        <p className={styles.item}>
          <figure className={styles.check}>
            <Image src={check} alt="" />
          </figure>
          Cancel ANYTIME.
        </p>
        <p className={styles.item}>
          <figure className={styles.check}>
            <Image src={check} alt="" />
          </figure>
          <span>Free returns,</span> no question asked
        </p>
        <p className={styles.item}>
          <figure className={styles.check}>
            <Image src={check} alt="" />
          </figure>
          Free shipping
        </p>
      </button>
      <button
        type="button"
        onClick={() => {
          handleOnClick("results");
        }}
        className={classNames(styles.card, {
          [styles.card__active]: activePrice === "results",
        })}
      >
        <div className={styles.label}>2-MONTHS SUPPLY</div>
        <div className={styles.title_wrap}>
          <p className={styles.title}>BEST RESULTS</p>
          <p>
            <span className={styles.old_price}>$69</span>{" "}
            <span className={styles.price}>$49.5</span>
          </p>
        </div>
        <p className={styles.subtitle}>2 bottles shipped every month</p>
      </button>

      <button className={styles.transparent_button} type="button">
        Buy once for $79
      </button>
      <button className={styles.button}>Add to cart - $49.5 </button>

      <div className={styles.description_wrapper}>
        <div className={styles.description_wrap}>
          <div className={styles.description_inner_wrap}>
            <figure className={styles.description_icon}>
              <Image src={easy} alt="" />
            </figure>
            Easy 30-day return
          </div>
          <div className={styles.description_inner_wrap}>
            <figure className={styles.description_icon}>
              <Image src={time} alt="" />
            </figure>
            24/7 Support
          </div>
        </div>
        <div className={styles.description_inner_wrap}>
          <figure className={styles.description_icon}>
            <Image src={shipping} alt="" />
          </figure>
          Free shipping for orders over $80
        </div>
      </div>
    </div>
  );
};

export { Price };
