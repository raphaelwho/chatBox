import React from 'react';
import Map from './Map.jsx';
import Search from './Search.jsx';
import BottomModal from '../shared/bottomModal/BottomModal.jsx';
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

  handleSearch() {
    // getFreeSpots()
    // then
    //
  }

  render() {
    return (
      <div>
        <Map center={this.state.center} spots={this.state.spots}/>
        <Search reCenterMap={this.reCenterMap}/>
        <BottomModal
          isModalOpen={true}
          modalHeaderContent={(<div>this is the modal header</div>)}
          modalContent={(<div>test</div>)}
          onModalClose={() => console.log('modal was closed')}
        />
      </div>
    );
  }

};

export default MapView;