import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Member from '../Member2/Member';
import './Members.css';

const Members = () => {
  const [members, setMembers] = useState([]);
  const [cart, setCart] =useState([]);



  useEffect(() => {
    fetch('./members.JSON')
    .then(res => res.json())
    .then(data => setMembers(data))
  },[])

const handleAddToCart = (member) => {
  console.log(member.name);
  const newCart = [...cart, member];
  setCart(newCart);
  
}





  return (
    <div className="members-container">
      <div className="member-container">
        {
          members.map(member => <Member 
            key={member.name}
            member={member}
            handleAddToCart={handleAddToCart}
            >
            </Member>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
        <button style={{backgroundColor: 'green', margin:'10px',padding:'10px'}}>Buy Now</button>
      </div>
    </div>
  );
};

export default Members;