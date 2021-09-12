import React from 'react';
import Geocode from "react-geocode";
import TxtBox from '../shared/txtBox/TxtBox.jsx';
import Picker from '../shared/Picker.jsx';
import { generateTimes } from './helpers.js';
Geocode.setApiKey(process.env.GOOGLE_API);

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      startTime: '', // implement a default value - the nearest hour
      endTime: '', // implement a default value - nearest hour + 1
      startDate: '',
      endDate: '',
    };
    this.handleAddressInput = this.handleAddressInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleStartTimeSelect = this.handleStartTimeSelect.bind(this);
    this.handleEndTimeSelect = this.handleEndTimeSelect.bind(this);
  }

  handleAddressInput(e) {
    const address = e.target.value;
    this.setState({
      address: address
    });
  }

  handleStartTimeSelect(time) {
    this.setState({
      startTime: time
    });
  }

  handleEndTimeSelect(time) {
    this.setState({
      endTime: time
    });
  }

  handleSearch() {
    Geocode.fromAddress(this.state.address)  // convert the address to lat and lng
    .then((response) => {
      const { lat, lng } = response.results[0].geometry.location;
      // console.log('Matts\'s house:', lat, lng);
      // convert the start and end date to UNIX time?
      return {
        lat: lat,
        lng: lng
      }
      // get free spots near the center, center the map, render the spots...
      // this.props.reCenterMap({
      //   lat: lat,
      //   lng: lng
      // });
    })
    .then((location) => {
      this.props.getFreeSpotsAndUpdate(location.lat, location.lng)
    })
    .catch((err) => {
      console.error(err);
    });
  }

  render() {
    const times = generateTimes();

    return (
      <div>
        <TxtBox label={'search'} handleInput={this.handleAddressInput}/>
        <Picker label={'start time'} options={times} initialValue={times[0]} onChangeCB={this.handleStartTimeSelect}/>
        <Picker label={'end time'} options={times} initialValue={times[1]} onChangeCB={this.handleEndTimeSelect}/>
        <button onClick={this.handleSearch}> FIND PARKING </button>
      </div>
    );
  }

}

export default Search;