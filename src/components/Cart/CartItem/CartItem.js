import React from 'react';
import './CartItem.css'
  ;
const CartItem = (props) => {
  const { name, img, Salary } = props.person;
  return (
    <div className="political-figure">
      <img src={img} alt="" />
      <h6>{name}</h6>
      <p>{Salary}</p>
    </div>
  );
};

export default CartItem;