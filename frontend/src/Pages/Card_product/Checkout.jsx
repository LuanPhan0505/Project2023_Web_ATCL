// Checkout.jsx
import React, { useState, useContext } from "react";
import "./Checkout.css";
import { useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Checkout = () => {

  const { products } = useContext(ShopContext);
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const [isConfirmed, setIsConfirmed] = useState(false);


  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("cashOnDelivery");
  // const [paymentMethod, setPaymentMethod] = useState("cashOnDelivery");

  const handleConfirmation = () => {
    if (selectedPaymentMethod) {
      setIsConfirmed(true);
    } else {
      setIsConfirmed(false);
    }
  };

  const handleConfirmation2 = () => {
    if (selectedPaymentMethod) {
      alert(`Selected Payment Method: ${selectedPaymentMethod}`);
      // Additional actions after confirming the payment method can be added here
    } else {
      alert("Please select a payment method.");
    }
  };



  const name = queryParams.get("name");
  const address = queryParams.get("address");
  const province = queryParams.get("province");
  const phoneNumber = queryParams.get("phoneNumber");


  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };


  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <h2>Payment Method</h2>
        <form>
          <label className="payment-method-label">
            <input
              type="radio"
              value="cashOnDelivery"
              checked={selectedPaymentMethod === "cashOnDelivery"}
              onChange={handlePaymentMethodChange}
              className="payment-method-input"
            />
            Cash on Delivery
          </label>
          <label className="payment-method-label">
            <input
              type="radio"
              value="Bank Transfer"
              checked={selectedPaymentMethod === "Bank Transfer"}
              onChange={handlePaymentMethodChange}
              className="payment-method-input"
            />
            Bank Transfer
          </label>
          <label className="payment-method-label">
            <input
              type="radio"
              value="Momo"
              checked={selectedPaymentMethod === "Momo"}
              onChange={handlePaymentMethodChange}
              className="payment-method-input"
            />
            Momo
          </label>
          <button type="button" onClick={() => {handleConfirmation(); handleConfirmation2(); }} className="confirm-payment-button">
            Confirm Payment Method
          </button>
        </form>
      </div>


      <div className="checkout-right">
        <h2>Order Summary</h2>
        <div className="order-summary">
          <h3>Ordered Products</h3>
          <div className="ordered-products">
            {products.map((e) => {

              if (cartItems[e.id] > 0) {
                return <div>
                  <div className="ordered-product">
                    <img className="ordered-product-img" src={e.image} alt="" />
                    <p cartitems-product-title>{e.name}</p>
                    {/* <p>${e.new_price}</p> */}
                    <p>x{cartItems[e.id]} </p>
                    <p>${e.new_price * cartItems[e.id]}</p>
                  </div>
                  <hr />
                </div>;
              }
              return null;
            })}
          </div>
        </div>

        <div className="shipping-info">
          <h3>Shipping Information</h3>
          <p>Name: {name}</p>
          <p>Address: {address} </p>
          <p>Province: {province} </p>
          <p>Phone Number: {phoneNumber}</p>
        </div>
        <div className="total-amount">
          <h3>Total Amount</h3>
          <p>${getTotalCartAmount()}</p>
        </div>
        {/* Button to confirm order */}

        <div className="Select-method">
          {/* Display selected payment method only after confirmation */}
          {isConfirmed && selectedPaymentMethod && (
            <div className="selected-payment-info">
              <h3>Payment Method:</h3>
              <p>{selectedPaymentMethod}</p>
            </div>
          )}
        </div>

        <button className="confirm-order-button">Confirm Order</button>
      </div>
    </div>
  );
};

export default Checkout;