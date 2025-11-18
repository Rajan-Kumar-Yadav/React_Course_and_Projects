import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const buttonAray = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  const [display, setDisplay] = useState("");
  const buttonClickHandle = (value) => {
    console.log(value);
    if (value === "C") {
      setDisplay("");
      return;
    }
    if (value === "=") {
      try {
        setDisplay(String(eval(display)));
      } catch {}

      return;
    }

    setDisplay((preValue) => preValue + value);
  };
  return (
    <>
      <div className="calculator-container">
        <input className="input-number" type="text" value={display} readOnly />
        <div className="button-container">
          {buttonAray.map((button, index) => (
            <button
              className="button"
              key={index}
              onClick={() => buttonClickHandle(button)}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
export default Calculator;
