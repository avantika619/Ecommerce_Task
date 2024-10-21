import React, { useState } from "react";
import "./OrderModel.css"; // Create a CSS file for modal styling

const OrderModal = ({ isOpen, onClose, orderDetails }) => {
  if (!isOpen) return null; // Render nothing if the modal is not open

  const [paymentMethod, setPaymentMethod] = useState("credit"); // Default payment method

  const handleOverlayClick = (event) => {
    // Close the modal if the overlay is clicked
    if (event.target.className === "modal-overlay") {
      onClose();
    }
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <h2>Order Details</h2>
        <button className="close-button" onClick={onClose}>Close</button>
        {/* Render order details here */}
        <div>
          <p>Products:</p>
          {orderDetails.map(item => (
            <div key={item.id}>
              <p>{item.name}: ${item.price} x {item.quantity}</p>
            </div>
          ))}
        </div>
        <h3>Total: ${orderDetails.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h3>

        {/* Payment Method Selection */}
        <div className="payment-method">
          <h3>Select Payment Method</h3>
          <label>
            <input 
              type="radio" 
              value="credit" 
              checked={paymentMethod === "credit"} 
              onChange={handlePaymentMethodChange} 
            />
            Credit Card
          </label>
          <label>
            <input 
              type="radio" 
              value="paypal" 
              checked={paymentMethod === "paypal"} 
              onChange={handlePaymentMethodChange} 
            />
            UPI
          </label>
          <label>
            <input 
              type="radio" 
              value="bank" 
              checked={paymentMethod === "bank"} 
              onChange={handlePaymentMethodChange} 
            />
            Cash On Delivery
          </label>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
