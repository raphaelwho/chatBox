import React from 'react';
// import Right Chevron
import './spotManagement.css';

const Spot = (props) => (

  <div className='spot-card'>
    <div className='spot-photo'>
      <img src={props.photo} alt=''></img>
    </div>
    <div className='spot-address'>{props.address}</div>
    <div className='spot-price'>{props.price}</div>
    {/* right chevron onClick={props.handleSpotClick} */}
  </div>

);

export default Spot;