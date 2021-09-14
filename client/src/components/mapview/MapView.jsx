import React from 'react';
import Map from './Map.jsx';
import Search from './Search.jsx';
import fakeSpots from './fakeSpots.js';

class MapView extends React.Component {
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
    this.reCenterMap = this.reCenterMap.bind(this);
    this.getFreeSpots = this.getFreeSpots.bind(this);
  }

  reCenterMap(newCenter) {
    this.setState({
      center: newCenter
    });
  }

  getFreeSpots() {
    // get matching/available spots from server
  }

  render() {
    return (
      <div className="map-view" style={{ width: "100vw", height: "100vh" }}>
        <Map center={this.state.center} spots={this.state.spots} />
        {/* <Search reCenterMap={this.reCenterMap} /> */}
      </div>
    );
  }

};

export default MapView;