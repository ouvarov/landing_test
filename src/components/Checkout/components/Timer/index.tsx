import { useEffect, useState } from "react";

import styles from "./timer.module.scss";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className={styles.timer}>
      we can only reserve your order for <span>{formatTime(timeLeft)}</span>{" "}
      minutes due to high demand
    </div>
  );
};

export { Timer };
