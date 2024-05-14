// src/components/FoodBox.js
import React, { useState } from 'react';

const FoodBox = ({ id, img, name, cal, handleAdd }) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <div className="box">
      <figure className="image">
        <img src={img} height="60px"/>
      </figure>
      <div className="content">
        <p>
          <strong>{name}</strong> <br />
          <small>{cal} cal</small>
        </p>
      </div>
      <div className="media-right">
        <div className="field has-addons">
          <div className="control">
            <input className="input" type="number" value={quantity} onChange={handleQuantityChange} />
          </div>
          <div className="control">
            <button className="button is-info" onClick={() => handleAdd(id, quantity)}>
              +
            </button>
          </div>
        </div>
        <button className="button" onClick={() => setQuantity(0)}>reset</button>
      </div>
      <div>
        <p>{quantity} {name} = {quantity * cal} calories</p>
      </div>
    </div>
  );
};

export default FoodBox;
