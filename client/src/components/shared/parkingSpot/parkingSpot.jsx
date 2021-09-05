import React from 'react';
import ChevronRight from '../icons/chevronRight.jsx';
import './parkingSpot.css';

class ParkingSpot extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className='spot'>
        <div className='spot-photo'>
          PHOTO
        </div>
        <div className='spot-info'>
          <p> E 60th Hyatt Place </p>
          <p> New York, NY 1005 </p>
          <p className='rate'>$2/hr</p>
        </div>
        <div className='spot-arrow'>
          <ChevronRight size={100} color={'#707070'}/>
        </div>
      </div>
    )
  };
}

export default ParkingSpot;