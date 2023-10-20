import React from "react";
import items from "../data/items";


const Shop = () => {
  return (
    <div className="shop-container">
      {items.map((item) => (
        <PetItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Shop;