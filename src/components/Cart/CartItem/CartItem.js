import React from 'react';
import './CartItem.css'
  ;
const CartItem = (props) => {
  const { name, img, Salary } = props.person;
  return (
    <div className="political-figure">
      <h6>{name}</h6>
      <p>{Salary}</p>
      <img src={img} alt="" />
    </div>
  );
};

export default CartItem;