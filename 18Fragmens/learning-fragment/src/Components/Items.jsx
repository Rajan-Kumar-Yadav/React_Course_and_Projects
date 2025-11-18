import "./Items.css";

import styles from "./Items.module.css";

const Items = ({ foodItem }) => {
  return (
    <>
      <li className={` list-group-item `}>
        <span className={styles["kg-span"]}>{foodItem}</span>
      </li>
    </>
  );
};
export default Items;
