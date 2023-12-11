import React, { useState } from "react";
import '../CSS/Shipping.css'
import { useNavigate } from "react-router-dom";

const Shipping = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [PhoneNumber, setPhonenumber] = useState("");

  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate(`/checkout?name=${name}&address=${address}&province=${province}&phoneNumber=${PhoneNumber}`)
  }

  return (
    <div className="shipping-container">
      <h2>Shipping Information</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            
          />
        </label>

        <label>
          Province:
          <input
            type="text"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            
          />
        </label>

        <label>
          Phone Numer:
          <input
            type="text"
            value={PhoneNumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            
          />
        </label>

        <button type="submit" onClick={handleSubmit} className="button-shipping">
               Submit
        </button>
      </form>
    </div>
  );
};

export default Shipping;