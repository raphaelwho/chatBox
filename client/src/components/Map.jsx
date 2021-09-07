import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import google_maps_api_key from '../../../google_maps_api_key';

const mapStyles = {
  width: '100%',
  height: '100%'
};

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={
          {
            lat: 30.191450819000465,
            lng: -97.77308111999969
          }
        }
      >
        {this.props.spots.map((spot) => {
          return <Marker key={spot.id} position={{lat: spot.geometry.coordinates[1], lng: spot.geometry.coordinates[0]}}/>
        })}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: google_maps_api_key
})(MapContainer);