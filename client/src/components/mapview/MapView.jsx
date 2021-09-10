import React from 'react';
import Map from './map.jsx';
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
      <Map center={this.state.center} spots={this.state.spots} />
    );
  }

};

export default MapView;