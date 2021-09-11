import React from 'react';
import axios from 'axios';
import SpotList from './Spotlist.jsx';
// import Button for adding spot

class ManageSpots extends React.Component {
  constructor(props) {
    super(props);
    // need host id from somewhere

    this.state = {
      spots: [],
    }

    this.handleSpotClick = this.handleSpotClick.bind(this);
    this.handleAddSpotClick = this.handleAddSpotClick.bind(this);
    this.getAllHostSpots = this.getAllHostSpots.bind(this);
  }

  componentDidMount() {
    // getAllHostSpots()
  }

  getAllHostSpots() {
    // use user/host id from props for search..
    // get all spots from server for current user/host
  }

  handleSpotClick() {
    // jump to edit spot page
  }

  handleAddSpotClick() {
    // jump to add spots page
  }

  render() {

    return (
      <div className='manage-spots-home'>
        <SpotList spots={this.state.spots} handleSpotClick={this.handleSpotClick}/>
        {/* <Button func={this.handleAddSpotClick} text={'Add Spot'}/>  */}
      </div>
    )

  }
}


export default ManageSpots;