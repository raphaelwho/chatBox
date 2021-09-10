import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Geocode from "react-geocode";

Geocode.setApiKey(process.env.GOOGLE_API);

const containerStyle = {
  width: '900px',
  height: '80vh'
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
    console.log('marker: ', item)
    this.setState({selected: item})
  }

  onClose = () => {
    this.setState({selected: {}})
  }

  componentDidMount () {
    Geocode.fromAddress("730 Morro Ave Morro Bay California")
      .then((response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
      })
      .catch((err) => {
        console.error(err);
      });
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
          { /* Child components, such as markers, info windows, etc. */ }
          {
            this.props.spots.map(item => {
              return (
              <Marker key={item.spot_id} position={item.location} onClick={() => this.onClick(item)}/>
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

// const center = {
//   lat: 41.3851,
//   lng: 2.1734
// };

// const locations = [
//   {
//     name: "Location 1",
//     location: {
//       lat: 41.3954,
//       lng: 2.162
//     },
//   },
//   {
//     name: "Location 2",
//     location: {
//       lat: 41.3917,
//       lng: 2.1649
//     },
//   },
//   {
//     name: "Location 3",
//     location: {
//       lat: 41.3773,
//       lng: 2.1585
//     },
//   },
//   {
//     name: "Location 4",
//     location: {
//       lat: 41.3797,
//       lng: 2.1682
//     },
//   },
//   {
//     name: "Location 5",
//     location: {
//       lat: 41.4055,
//       lng: 2.1915
//     },
//   }
// ];