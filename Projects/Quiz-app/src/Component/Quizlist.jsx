import styles from "./Quiz.module.css";

const QuizList = ({ option, handleClick, clickAnswer }) => {
  return (
    <>
      <ul>
        {option.map((answer, index) => (
          <li
            onClick={() => handleClick(answer)}
            className={
              clickAnswer === answer ? styles.activelist : styles.ullist
            }
            key={index}
          >
            {answer}
          </li>
        ))}
      </ul>
    </>
  );
};
export default QuizList;
