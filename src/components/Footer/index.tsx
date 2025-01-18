"use client";
import Image from "next/image";

import logo from "@/assets/icons/logo_white.svg";
import instagram from "@/assets/icons/instagram.svg";
import x from "@/assets/icons/x.svg";
import tiktok from "@/assets/icons/tiktok.svg";
import facebook from "@/assets/icons/facebook.svg";
import icon from "@/assets/icons/icon.svg";

import styles from "./footer.module.scss";

const socialLinks: Array<{ link: string; icon: string }> = [
  { link: "/.", icon: instagram },
  { link: "/..", icon: x },
  { link: "/...", icon: tiktok },
  { link: "./", icon: facebook },
];

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.wrapper}>
      <div>
        <div className={styles.logo_wrap}>
          <figure className={styles.icon}>
            <Image src={icon} alt="logo" />
          </figure>
          <figure className={styles.logo}>
            <Image src={logo} alt="logo" />
          </figure>
        </div>
        <div className={styles.social_icon_wrap}>
          {socialLinks.map(({ link, icon }) => (
            <a key={link} href={link} target="_blank" rel="noopener noreferrer">
              <figure className={styles.social_icon}>
                <Image src={icon} alt="" />
              </figure>
            </a>
          ))}
        </div>
      </div>
      <div>
        <div className={styles.link_wrap}>
          <a
            className={styles.link}
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy policy
          </a>
          <a
            className={styles.link}
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Refund Policy
          </a>
          <a
            className={styles.link}
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shipping Policy
          </a>
          <a
            className={styles.link}
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Use
          </a>
        </div>
        <div>
          <p className={styles.trademark}>© 2024 Present Perfect</p>
          <p className={styles.text}>
            The statements, services, and products sold on this website have not
            been evaluated by the united states food and drug administration
            (fda) and are not intended to diagnose, treat, cure or prevent any
            disease. Consult your doctor before use if you have any health
            condition or if you are taking any medications.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export { Footer };
