import React from 'react';
import './Member.css';

const Member = (props) => {
  console.log(props);
  const { name, img, roll, Age, country, Salary } = props.member;

  return (

    <div className="card">
      <img src={img} className="card-img-top img-fluid" alt="..."></img>
      <div className="card-body">
        <h5>{name}</h5>
        <h3>Roll: {roll} </h3>
        <h3>Age:{Age} </h3>
        <h5>Country:{country} </h5>
        <h3>Salary:{Salary} </h3>
      </div>
      <div>
        <button className="btn-addToCart">add to cart</button>
      </div>
    </div>

  );
};

export default Member;