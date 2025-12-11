import { useState } from "react";
import Items from "./Items";

const FoodItems = ({ items }) => {
  return (
    <>
      <ul className="list-group ul-list">
        {items.map((item) => {
          return <Items key={item} foodItem={item} />;
        })}
      </ul>
    </>
  );
};
export default FoodItems;
