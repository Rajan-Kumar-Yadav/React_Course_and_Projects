import Items from "./Items";

const FoodItems = ({ items }) => {
  const handleBuyButtonClicked = (foodItem, event) => {
    console.log(event);
    console.log(`${foodItem} being bought`);
  };
  return (
    <>
      <ul className="list-group ul-list">
        {items.map((item) => {
          return (
            <Items
              key={item}
              foodItem={item}
              handleBuyButtonClicked={(event) =>
                handleBuyButtonClicked(item, event)
              }
            />
          );
        })}
      </ul>
    </>
  );
};
export default FoodItems;
