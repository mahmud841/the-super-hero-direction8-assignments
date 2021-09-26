import React, { useEffect, useState } from 'react';
import Member from '../Member2/Member';
import './Members.css';

const Members = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch('./members.JSON')
    .then(res => res.json())
    .then(data => setMembers(data))
  },[])
  return (
    <div className="members-container">
      <div className="member-container">
        {
          members.map(member => <Member member={member}></Member>)
        }
      </div>
      <div className="cart-container">
        <h1>Members Added: </h1>
        <h1> Total Member : </h1>
        <button style={{backgroundColor: 'green', margin:'10px',padding:'10px'}}>Buy Now</button>
      </div>
    </div>
  );
};

export default Members;