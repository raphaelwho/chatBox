import React from 'react';
import SpotList from './Spotlist.jsx';


class ManageSpots extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // need host id from somewhere
      spots: [],
    }

    this.handleSpotClick = this.handleSpotClick.bind(this);

  }

  handleSpotClick() {
    // jump to edit spot page
  }

  render() {

    return (
      <div className='manage-spots-home'>
        <SpotList spots={this.state.spots} handleSpotClick={this.handleSpotClick}/>
      </div>
    )

  }
}


export default ManageSpots;