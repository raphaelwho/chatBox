import React from 'react';
import Geocode from "react-geocode";
import TxtBox from '../shared/txtBox/TxtBox.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ''
    };
    this.handleAddressInput = this.handleAddressInput.bind(this);
  }

  handleAddressInput(e) {
    const address = e.target.value;
    this.setState({
      address: address
    }, () => console.log(this.state.address));
  }

  handleSearch() {

  }

  render() {
    return (
      <div>
        <TxtBox label={'search'} handleInput={this.handleAddressInput}/>
      </div>
    );
  }

}

export default Search;