import React from 'react';
import Map from './Map.jsx';
import Search from './Search.jsx';
import fakeSpots from './fakeSpots.js';

class MapView extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 41.3851,
        lng: 2.1734
      },
      spots: fakeSpots,
      showSpotInfoModal: false
    };
    this.getFreeSpots = this.getFreeSpots.bind(this);
  }

  getFreeSpots() {
    // get matching/available spots from server
  }

  render() {
    return (
      <div>
        <Map center={this.state.center} spots={this.state.spots} />
        <Search />
      </div>
    );
  }

};

export default MapView;