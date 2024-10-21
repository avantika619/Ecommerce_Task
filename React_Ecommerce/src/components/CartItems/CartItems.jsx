import React, { useContext, useState, useEffect } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import removeIcon from "../assets/cart_cross_icon.png";
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from "../../redux/features/cartSlice";
import OrderModal from "../ordermodel/ordermodel"; // Import the modal component

const CartItems = () => {
  const { allProduct } = useContext(ShopContext);
  const dispatch = useDispatch();

  const cartItemsFromRedux = useSelector((state) => state.cart.items);
  const cartItemsFromRedux1 = useSelector((state) => state.cart.totalAmount);

  const [newCartItem, setNewCartItem] = useState(cartItemsFromRedux);
  const [total, setTotal] = useState(cartItemsFromRedux);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    setNewCartItem(cartItemsFromRedux);
  }, [cartItemsFromRedux]);

  useEffect(() => {
    setTotal(cartItemsFromRedux1);
  }, [cartItemsFromRedux1]);

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    setIsModalOpen(true); // Open the modal when checking out
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="cart-items">
      <div className="added-items">
        <div className="cartitems-format-main">
          <p>Products</p>
          <p className="title">Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {allProduct.map((product) => {
          const productInCart = newCartItem.find((item) => item.id === product.id);
          if (productInCart) {
            return (
              <div key={product.id}>
                <div className="cartitems-format cartitems-format-main">
                  <img className="cartitems-image" src={product.image} alt="" />
                  <p className="cartitems-name">{productInCart.name}</p>
                  <p>${productInCart.price}</p>
                  <p className="cartitems-quantity">{productInCart.quantity}</p>
                  <p>${productInCart.quantity * productInCart.price}</p>
                  <img
                    className="removeItem"
                    src={removeIcon}
                    onClick={() => handleRemoveItem(product.id)}
                    alt="Remove item"
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cartCheckOut">
        <div className="checkout-left">
          <div className="subtotal">
            <p>Cart Total</p>
            <p>${JSON.stringify(total)}</p>
          </div>
          <hr />
          <div className="shipping">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <p>Total ${JSON.stringify(total)}</p>
          <button className="checkout-button" onClick={handleCheckout}>Proceed To Checkout</button>
        </div>
        <div className="checkout-right">
          <p>If you have a promo code, Enter here</p>
          <div className="promocode">
            <input type="text" />
            <button>PROMO</button>
          </div>
        </div>
      </div>

      {/* Render the modal with order details */}
      <OrderModal
        isOpen={isModalOpen}
        onClose={closeModal}
        orderDetails={newCartItem || []}
      />
    </div>
  );
};

export default CartItems;
