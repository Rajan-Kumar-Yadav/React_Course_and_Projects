import Items from "./Items";

const FoodItems = ({ items }) => {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => {
          return <Items key={item} foodItem={item} />;
        })}
      </ul>
    </>
  );
};
export default FoodItems;
