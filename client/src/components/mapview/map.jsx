import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Geocode from "react-geocode";

const containerStyle = {
  width: '100%',
  height: '100%'
};

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {},
      // locations: []
    }
  }

  onClick = (item) => {
    // console.log('marker: ', item);
    this.setState({selected: item});
    this.props.selectSpot(item);
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
          zoom={14}
        >
          { /* Child components, such as markers, info windows, etc. */}
          {
            this.props.spots.map((item, index) => {
              return (
                <Marker key={index} position={item.location} onClick={() => this.onClick(item)} />
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