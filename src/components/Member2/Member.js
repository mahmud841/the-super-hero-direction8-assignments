import React from 'react';
import './Member.css';

const Member = (props) => {
  // console.log(props.member);
  const { name, img, roll, Age, country, Salary } = props.member;

  return (

   <div className="card-container">

<div className="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card h-100">
          <img src={img} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <h3 class="card-text">Roll: {roll} </h3>
            <h3>Age:{Age} </h3>
            <h5>Country:{country} </h5>
            <h3>Salary:{Salary} </h3>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>


   </div>

  );
};

export default Member;