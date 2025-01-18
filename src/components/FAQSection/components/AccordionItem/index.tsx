"use client";
import { FC, useRef, useState } from "react";
import classNames from "classnames";

import styles from "./accordion_item.module.scss";

type Props = { title: string; text: string; isBlack?: boolean };

const AccordionItem: FC<Props> = ({ title, text, isBlack }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.item}>
      <button
        className={classNames(styles.title, {
          [styles.title__active]: isOpen,
          [styles.title__black]: isBlack,
        })}
        onClick={toggleAccordion}
      >
        {title}
        <svg
          className={classNames(styles.svg, {
            [styles.svg__active]: isOpen,
          })}
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="8"
          fill="none"
          viewBox="0 0 12 8"
        >
          <path
            stroke={isOpen && !isBlack ? "#C10F27" : "#000"}
            strokeWidth="2"
            d="M11 1 6 6 1 1"
          />
        </svg>
      </button>
      <div
        ref={contentRef}
        className={classNames(styles.text, {
          [styles.text__black]: isBlack,
        })}
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0",
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
};

export { AccordionItem };
