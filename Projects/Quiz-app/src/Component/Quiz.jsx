import { use, useState } from "react";
import styles from "./Quiz.module.css";
import QuizList from "./Quizlist";

const Quiz = () => {
  const quizQuestion = [
    {
      question: "What is React ?",
      option: [
        "CSS Framwork",
        "React Library",
        "React Framework",
        "Teasting tool",
      ],
      answer: "React Library",
    },

    {
      question: "What is HTML ?",
      option: [
        "CSS Framwork",
        "React Library",
        "HyperText markup language",
        "Teasting tool",
      ],
      answer: "HyperText markup language",
    },
    {
      question: "What is css ?",
      option: [
        "Cascading style sheet",
        "React Library",
        "React Framework",
        "Teasting tool",
      ],
      answer: "Cascading style sheet",
    },
    {
      question: "What is Nodejs ?",
      option: [
        "Cascading style sheet",
        "React Library",
        "React Framework",
        "backend framework",
      ],
      answer: "backend framework",
    },
  ];
  const [clickAnswer, setClickAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleOnClick = () => {
    setCurrentQuestion(currentQuestion + 1);
    setClickAnswer(null);
  };
  const handleAnswer = (answer) => {
    console.log("your answer is: " + answer);

    setClickAnswer(answer);
    if (answer === quizQuestion[currentQuestion].answer) {
      setScore(score + 1);
      console.log("Your Score is: " + score);
    }
  };

  return (
    <>
      {currentQuestion < quizQuestion.length ? (
        <div>
          <div className={styles.question}>
            {quizQuestion[currentQuestion].question}
          </div>
          <QuizList
            option={quizQuestion[currentQuestion].option}
            handleClick={handleAnswer}
            clickAnswer={clickAnswer}
          />
          <div className={styles.button}>
            <button
              disabled={clickAnswer === null}
              className={
                clickAnswer === null
                  ? styles.disableButton
                  : styles.activeButton
              }
              onClick={handleOnClick}
            >
              Next Question
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.score}>Your Score is:{score}</div>
        </div>
      )}
    </>
  );
};
export default Quiz;
