import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Geocode from "react-geocode";

const containerStyle = {
  width: '100%',
  height: '80%'
};

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {},
    }
  }

  onClick = (spot) => {
    this.setState({selected: spot});
    this.props.selectSpot(spot);
    this.props.openBottomModal();
  }

  onClose = () => {
    this.setState({ selected: {} })
  }

  render() {
    return (
      <LoadScript
        googleMapsApiKey={process.env.GOOGLE_API}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={this.props.center}
          zoom={16}
        >
          { /* Child components, such as markers, info windows, etc. */}
          {
            this.props.spots.map((spot, index) => {
              return (
                <Marker key={index} position={spot.location} onClick={() => this.onClick(spot)} />
              )
            })
          }
          {
            this.state.selected.location &&
            (
              <InfoWindow
                position={this.state.selected.location}
                clickable={true}
                onCloseClick={this.onClose}
              >
                <p>{this.state.selected.address}</p>
              </InfoWindow>
            )
          }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default MapContainer;