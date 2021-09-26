import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Member.css';

const Member = (props) => {
  // console.log(props);
  const { name, img, roll, Age, country, Salary } = props.member;
  return (

    <div className="card">
      <div className="card-images">
      <img src={img} className="card-img-top img-fluid" alt="..."></img>
      </div>
      <div className="card-body">
        <h5>{name}</h5>
        <h3>Roll: {roll} </h3>
        <h3>Age:{Age} </h3>
        <h5>Country:{country} </h5>
        <h3>Salary:{Salary} </h3>
        <FontAwesomeIcon icon={faFan}/>
        <FontAwesomeIcon icon={faFan}/>
        <FontAwesomeIcon icon={faFan}/>
      </div>
      <div>
        <button onClick={() => props.handleAddToCart(props.member)} className="btn-addToCart"><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
        
        
      </div>
      
    </div>

  );
};

export default Member;