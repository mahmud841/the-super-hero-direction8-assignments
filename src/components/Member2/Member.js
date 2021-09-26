import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faTwitter,  } from '@fortawesome/free-brands-svg-icons';
import './Member.css';

const Member = (props) => {
  const { name, img, roll, Age, country, Salary } = props.member;
  return (

    <div className="card">
      <div className="card-images">
      <img src={img} className="card-img-top img-fluid" alt="..."></img>
      </div>
      <div className="card-body">
        <h3>Name:{name}</h3>
        <h4>Roll: {roll} </h4>
        <h4>Age:{Age} </h4>
        <h5>Country:{country} </h5>
        <h5>Salary:{Salary} </h5>
        <div className="awesome-icon">
        <FontAwesomeIcon className="me-2" size='2x' icon={faFacebook}/>
        <FontAwesomeIcon className="me-2" size='2x' icon={faTwitter}/>
        <FontAwesomeIcon className="me-2" size='2x' icon={faGithub}/>
        </div>
      </div>
      <div>
        <button onClick={() => props.handleAddToCart(props.member)} className="btn-addToCart"><FontAwesomeIcon icon={faShoppingCart}/> add to cart</button>
        
        
      </div>
      
    </div>

  );
};

export default Member;