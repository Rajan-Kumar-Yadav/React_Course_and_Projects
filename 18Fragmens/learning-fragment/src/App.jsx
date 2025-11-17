import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import ErrorMessage from "./Components/ErrorMessage";
import FoodItems from "./Components/FoodItems";

function App() {
  // let foodItems = [];
  let foodItems = ["sbji", "Green", "Vegetable", "Roti", "Salad", "Milk"];
  return (
    <>
      <h1 className="food-heading">Healthy Food </h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>
  );
}

export default App;
