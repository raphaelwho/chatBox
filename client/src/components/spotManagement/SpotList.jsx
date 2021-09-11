import React from 'react';
import Spot from './Spot.jsx';


const SpotList = (props) => {
  <div className='spot-list'>
    {props.spots.map((spot) => <Spot handleSpotClick={props.handleSpotClick} address={spot.address} price={spot.price} photo={spot.photo}/>)}
  </div>
};

export default SpotList;