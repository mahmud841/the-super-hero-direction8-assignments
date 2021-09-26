import React from 'react';
import './Cart.css';

const Cart = (props) => {
 const {cart, name}= props;

/* const totalReducer = (previous, member)=> previous + member.Salary;
const total = cart.reduce(totalReducer,0); */
  let total = 0;
 for(const member of cart){
   total = total + member.Salary;
 } 

  return (
    <div>
      <h1>Members Name:{name} </h1>
        <h1> Total Member : {props.cart.length} </h1>
        <br />
        <p>Total Money: {total} </p>
    </div>
  );
};

export default Cart;