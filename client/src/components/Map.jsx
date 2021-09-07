import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import google_maps_api_key from '../../../google_maps_api_key';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: google_maps_api_key
})(MapContainer);