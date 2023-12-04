import React, { useState } from "react";
import styles from "./Counter.module.css";
import ArrowUpImg from "../../assects/arrowUp.png";
import ArrowDownImg from "../../assects/arrowDown.png";
import Image from "next/image";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    // Check if count is greater than 0 before decrementing
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className={styles.counter}>
      <div className={styles.buttons}>
        <button onClick={decrement}>
          <Image src={ArrowDownImg} alt="arrow down" width={100} height={100} />
        </button>
        <h2> {count}</h2>
        <button onClick={increment}>
          {" "}
          <Image src={ArrowUpImg} alt="arrow up" width={100} height={100} />
        </button>
      </div>
    </div>
  );
};

export default Counter;
