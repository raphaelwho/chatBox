import React from 'react';
import Geocode from "react-geocode";
import TxtBox from '../shared/txtBox/TxtBox.jsx';
Geocode.setApiKey(process.env.GOOGLE_API);

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ''
    };
    this.handleAddressInput = this.handleAddressInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleAddressInput(e) {
    const address = e.target.value;
    this.setState({
      address: address
    }, () => console.log(this.state.address));
  }

  handleSearch(reCenterMap) {
    console.log('search button clicked');
    Geocode.fromAddress(this.state.address)
    .then((response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log('Matts\'s house:', lat, lng);
      // recenter the map
      reCenterMap({
        lat: lat,
        lng: lng
      });
    })
    .catch((err) => {
      console.error(err);
    });
  }

  render() {
    return (
      <div>
        <TxtBox label={'search'} handleInput={this.handleAddressInput}/>
        <button onClick={() => this.handleSearch(this.props.reCenterMap)}> FIND PARKING </button>
      </div>
    );
  }

}

export default Search;