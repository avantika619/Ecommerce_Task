import React from "react";
import "./Popular.css";
import data from "../assets/all_product";
import Item from "../item/Item";

const Popular = () => {
  const handleAddToCart = (itemkeyword) => {
    console.log(`${itemkeyword} added to cart`);
  };

  return (
    <div className="popular">
      <h1 className="heading">POPULAR IN GADGETS </h1>
      <hr />
      {/* <div className="item-list"> */}
      <div className="item-list">
        {data.map((item) => {
          return (
            <Item
            id={item.id}
            key={item.id}
            name={item.name}
            image={item.image}
            old_price={item.old_price}
            new_price={item.new_price}
            rating={item.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
