import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Geocode from "react-geocode";
import GOOGLE_MAP_API from '../../../../googleAPI.js';
Geocode.setApiKey(GOOGLE_MAP_API);

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 41.3851,
  lng: 2.1734
};
const locations = [
  {
    name: "Location 1",
    location: {
      lat: 41.3954,
      lng: 2.162
    },
  },
  {
    name: "Location 2",
    location: {
      lat: 41.3917,
      lng: 2.1649
    },
  },
  {
    name: "Location 3",
    location: {
      lat: 41.3773,
      lng: 2.1585
    },
  },
  {
    name: "Location 4",
    location: {
      lat: 41.3797,
      lng: 2.1682
    },
  },
  {
    name: "Location 5",
    location: {
      lat: 41.4055,
      lng: 2.1915
    },
  }
];

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {}
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
        googleMapsApiKey={GOOGLE_MAP_API}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location} onClick={() => this.onClick(item)}/>
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
              <p>{this.state.selected.name}</p>
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

