import React from 'react';
import Map from './map.jsx';
import Search from './Search.jsx';
import BottomModal from '../shared/bottomModal/BottomModal.jsx';
import ModalContent from './ModalContent.jsx';
import fakeSpots from './fakeSpots.js';

class MapView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: { // the default starting location of the map // TODO: get user's location
        lat: 37.7749,
        lng: -122.4194
      },
      reservationStartTime: null, // to be passed to modal view
      reservationEndTime: null, // to be passed to modal view
      reservationStartDate: null, // to be passed to modal view
      reservationEndDate: null, // to be passed to modal view
      spots: [], // passed to map component and rendered
      selectedSpot: '', // passed to modal
      showBottomModal: false
    };
    this.getFreeSpots = this.getFreeSpots.bind(this);
    this.getFreeSpotsAndUpdate = this.getFreeSpotsAndUpdate.bind(this);
    this.openBottomModal = this.openBottomModal.bind(this);
    this.closeBottomModal = this.closeBottomModal.bind(this);
    this.selectSpot = this.selectSpot.bind(this);
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
        }, () => console.log(this.state));
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      })
  }

  openBottomModal() {
    this.setState({
      showBottomModal: true
    });
  }

  closeBottomModal() {
    this.setState({
      showBottomModal: false,
    });
  }

  selectSpot(spot) {
    this.setState({
      selectedSpot: spot
    });
  }

  render() {
    return (
      <div className="map-view" style={{ width: "100vw", height: "100vh" }}>
        <Map center={this.state.center} spots={this.state.spots} selectSpot={this.selectSpot} openBottomModal={this.openBottomModal}/>
        <Search getFreeSpotsAndUpdate={this.getFreeSpotsAndUpdate}/>
        <BottomModal
          isModalOpen={this.state.showBottomModal}
          modalHeaderContent={(<div>this is the modal header</div>)}
          modalContent={<ModalContent
            address={this.state.selectedSpot.address}
            price={this.state.selectedSpot.price}
            photo={this.state.selectedSpot.photo_url}
          />}
          onModalClose={this.closeBottomModal}
        />
      </div>
    );
  }
};

export default MapView;