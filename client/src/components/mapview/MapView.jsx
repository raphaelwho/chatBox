import React from 'react';
import Map from './Map.jsx';
import Search from './Search.jsx';
import BottomModal from '../shared/bottomModal/BottomModal.jsx';
import fakeSpots from './fakeSpots.js';

class MapView extends React.Component{
  constructor(props) {
    super(props);
    this.state = { // the default starting location of the map
      center: {
        lat: 41.3851,
        lng: 2.1734
      },
      reservationStartTime: null,
      reservationEndTime: null,
      reservationStartDate: null,
      reservationEndDate: null,
      spots: [],
      showBottomModal: false
    };
    this.reCenterMap = this.reCenterMap.bind(this);
    this.getFreeSpots = this.getFreeSpots.bind(this);
    this.getFreeSpotsAndUpdate = this.getFreeSpotsAndUpdate.bind(this);
  }

  reCenterMap(newCenter) {
    this.setState({
      center: newCenter
    });
  }

  getFreeSpots(lat, lng, start, end) {
    return Promise.resolve(fakeSpots); // TODO replace with a GET to the server
  }

  getFreeSpotsAndUpdate(lat, lng, UNIXstart, UNIXend, startTime, endTime, startDate, endDate) {
    this.getFreeSpots(lat, lng, UNIXstart, UNIXend)
      .then((spots) => {
        this.setState({
          center: {
            lat: lat,
            lng: lng
          },
          spots: spots,
          reservationStartTime: startTime,
          reservationEndTime: endTime,
          reservationStartDate: startDate,
          reservationEndDate: endDate
        })
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      })
  }

  render() {
    return (
      <div>
        <Map center={this.state.center} spots={this.state.spots}/>
        <Search reCenterMap={this.reCenterMap} getFreeSpotsAndUpdate={this.getFreeSpotsAndUpdate}/>
        <BottomModal
          isModalOpen={this.state.showBottomModal}
          modalHeaderContent={(<div>this is the modal header</div>)}
          modalContent={(<div>test</div>)}
          onModalClose={() => console.log('modal was closed')}
        />
      </div>
    );
  }

};

export default MapView;