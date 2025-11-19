import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnChange }) => {
  return (
    <>
      <input
        className={styles.foodInput}
        type="text"
        placeholder="Enter Food Item here"
        onChange={handleOnChange}
      />
    </>
  );
};
export default FoodInput;
