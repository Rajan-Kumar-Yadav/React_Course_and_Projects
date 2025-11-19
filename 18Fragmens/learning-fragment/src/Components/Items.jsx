import "./Items.css";

import styles from "./Items.module.css";

const Items = ({ foodItem, handleBuyButtonClicked }) => {
  return (
    <>
      <li className={` list-group-item `}>
        <span className={styles["kg-span"]}>{foodItem}</span>
        <button
          type="button"
          className={`btn btn-info button ${styles.button}`}
          onClick={handleBuyButtonClicked}
        >
          Buy
        </button>
      </li>
    </>
  );
};
export default Items;
