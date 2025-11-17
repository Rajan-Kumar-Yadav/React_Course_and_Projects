import "./Items.css";

import styles from "./Items.module.css";

const Items = ({ foodItem }) => {
  return (
    <>
      <li className={`list-group-item ${styles.kgItem}`}>
        <span className={styles["kg-span"]}>{foodItem}</span>
      </li>
    </>
  );
};
export default Items;
