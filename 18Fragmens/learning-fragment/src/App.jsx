import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import ErrorMessage from "./Components/ErrorMessage";
import FoodItems from "./Components/FoodItems";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";
import BuyFood from "./Components/BuyFood";

function App() {
  // let foodItems = [];
  let [foodItems, setFoodItems] = useState([]);
  let [textToShow, setTextToShow] = useState("Food Item Entered by user");
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      event.target.value = "";
    }
    setTextToShow(event.target.value);
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food </h1>
        <FoodInput handleKeyDown={onKeyDown} />

        <ErrorMessage items={foodItems} />

        <FoodItems items={foodItems} />
      </Container>
      {/* <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being
        </p>
      </Container> */}
    </>
  );
}

export default App;
