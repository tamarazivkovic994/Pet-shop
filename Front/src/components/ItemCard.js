import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div className="item">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-id">{item.id}</div>
      <div className="item-name">{item.name}</div>
      <div className="item-price">Price: {item.price}</div>
      <div className="item-details">{item.details}</div>
    </div>
  );
};

export default ItemCard;
