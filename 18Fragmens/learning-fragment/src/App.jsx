import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import ErrorMessage from "./Components/ErrorMessage";
import FoodItems from "./Components/FoodItems";
import Container from "./Components/Container";

function App() {
  // let foodItems = [];
  let foodItems = ["sbji", "Green", "Vegetable", "Roti", "Salad", "Milk"];
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food </h1>
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being
        </p>
      </Container>
    </>
  );
}

export default App;
