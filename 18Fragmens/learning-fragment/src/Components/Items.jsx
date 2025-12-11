import { useState } from "react";
import "./Items.css";

import styles from "./Items.module.css";

const Items = ({ foodItem }) => {
  let [buy, setBuy] = useState(false);

  const handleBuyButtonClicked = () => {
    setBuy(true);
  };
  return (
    <>
      <li
        className={`${styles.kgItems} list-group-item ${
          buy ? "list-group-item-success" : ""
        }`}
      >
        <span className={styles["kg-span"]}>{foodItem}</span>
        <button
          type="button"
          className={`btn btn-info button ${styles.button}`}
          onClick={handleBuyButtonClicked}
        >
          {buy ? "Remove" : "Buy"}
        </button>
      </li>
    </>
  );
};
export default Items;
