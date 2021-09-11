import React from 'react';
// import Right Chevron

const Spot = (props) => (

  <div className='spot-card'>
    <div className='spot-photo'>
      <img src={props.photo}></img>
    </div>
    <div className='spot-address'>{props.address}</div>
    <div className='spot-price'>{props.price}</div>
    {/* right chevron */}
  </div>

);

export default Spot;