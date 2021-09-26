import React from 'react';
import './Cart.css'
import CartItem from './CartItem/CartItem';

const Cart = (props) => {
 const {cart, name}= props;

const totalReducer = (previous, member)=> previous + member.Salary;
const total = cart.reduce(totalReducer,0); 
 
  return (
    <div className="cabinet-member">
      <h1>Members Name List{name} </h1>    
        <br />
        <h5>Member's Salary: {total} </h5>
        {
          cart.map(item => <CartItem 
            key={item.name}
            person = {item}/>)
        }

    </div>
  );
};

export default Cart;