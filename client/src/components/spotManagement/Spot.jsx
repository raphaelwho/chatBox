import React from 'react';
import ChevronRight from '../shared/icons/chevronRight.jsx';
import './spotManagement.css';

const Spot = (props) => (

  <div className='spot-card'>
    <div className='spot-photo'>
      {/* <img src={props.photo}></img> */}
      <img src={'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'}></img>
    </div>
    <div className='spot-card-info'>
      <div className='spot-address'>{props.address}</div>
      <div className='spot-price'>${props.price}/hr</div>
    </div>
    <ChevronRight size={100} onIconClick={() => props.handleSpotClick(props.id)}/>
  </div>

);

export default Spot;