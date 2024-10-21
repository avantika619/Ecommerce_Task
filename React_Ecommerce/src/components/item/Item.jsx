import React from "react";
import "./item.css";
import { Link,useNavigate } from "react-router-dom";
import {  useDispatch } from 'react-redux';
import { addItem } from "../../redux/features/cartSlice";
import { FaStar } from "react-icons/fa"; 

const Item = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddItem = () => {
    dispatch(addItem({id:props.id,name:props.name,price:props.old_price,quantity:1}));
    console.log("rishabh",{id:props.id,name:props.name,price:props.old_price,quantity:1})
    navigate("/cart")

  };

  console.log("props.rating",props.rating)

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i <= rating ? "star filled" : "star"}
          size={20} // Size of the stars
        />
      );
    }
    return stars;
  };
  return (
    <div className="item">
      {/* <Link to={`/product/${props.id}`}> */}
        <img src={props.image} alt="" />
      {/* </Link> */}
      <p className="name">{props.name}</p>
      <div className="price">
        <p className="new-price">₹{props.new_price}</p>
        <p className="old-price">₹{props.old_price}</p>
        </div>
        <div className="rating">
        {renderStars(props.rating)} {/* Pass the rating as a prop */}
      </div>
        <button className="add-to-cart" onClick={handleAddItem}>
        Add to Cart
      </button>
     
    </div>
  );
};

export default Item;
