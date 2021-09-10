import React from 'react';
import Geocode from "react-geocode";
import TxtBox from '../shared/txtBox/TxtBox.jsx';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.handleQueryInput = this.handleQueryInput.bind(this);
  }

  handleQueryInput(e) {
    const query = e.target.value;
    this.setState({
      query: query
    }, () => console.log(this.state.query));
  }

  handleSearch() {

  }

  render() {
    return (
      <div>
        <TxtBox label={'search'} handleInput={this.handleQueryInput}/>
      </div>
    );
  }

}

export default Search;