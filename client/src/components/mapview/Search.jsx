import React from 'react';
import Geocode from "react-geocode";
import TxtBox from '../shared/txtBox/TxtBox.jsx';
import Picker from '../shared/Picker.jsx';
import { generateTimes, convertToUNIXTime } from './helpers.js';
Geocode.setApiKey(process.env.GOOGLE_API);

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      startTime: '', // implement a default value - the nearest hour
      endTime: '', // implement a default value - nearest hour + 1
      startDate: 'TODAY', // TODO
      endDate: 'TODAY', // TODO
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
      return {
        lat: lat,
        lng: lng
      }
    })
    .then((location) => {
      const { startTime, endTime, startDate, endDate } = this.state;
      convertToUNIXTime(startTime, endTime, startDate, endDate); // TODO: implement this function
      this.props.getFreeSpotsAndUpdate(location.lat, location.lng, null, null, startTime, endTime, startDate, endDate);
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
        <div>start date select will go here</div>
        <div>end date select will go here</div>
        <Picker label={'start time'} options={times} initialValue={times[0]} onChangeCB={this.handleStartTimeSelect}/>
        <Picker label={'end time'} options={times} initialValue={times[1]} onChangeCB={this.handleEndTimeSelect}/>
        <button onClick={this.handleSearch}> FIND PARKING </button>
      </div>
    );
  }

}

export default Search;