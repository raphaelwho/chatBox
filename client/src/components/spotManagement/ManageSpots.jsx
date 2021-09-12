import React from 'react';
import axios from 'axios';
import SpotList from './SpotList.jsx';
import Button from '../shared/button/button.jsx';
import './spotManagement.css';
import PageHeader from '../shared/pageHeader/pageHeader.jsx';
import UpdateSpot from './UpdateSpot.jsx';
import AddSpot from './AddSpot.jsx';

class ManageSpots extends React.Component {
  constructor(props) {
    super(props);
    // need host id from somewhere

    this.state = {
      userId: 1,
      spots: [],
      addSpot: false,
      updateSpot: false,
      currentSpotId: null
    }

    this.handleSpotClick = this.handleSpotClick.bind(this);
    this.handleAddSpotClick = this.handleAddSpotClick.bind(this);
    this.getAllHostSpots = this.getAllHostSpots.bind(this);
  }

  componentDidMount() {
    this.getAllHostSpots(this.state.userId);
  }

  getAllHostSpots(id) {
    // use user/host id from props for search..
    // get all spots from server for current user/host
    axios.get(`http://localhost:3000/my-spots?id=${id}`)
      .then((results) => {
        console.log('results');
        this.setState({ spots: results.data });
      })
      .catch((err) => {
        console.log('fetching error', err);
      })
  }

  handleSpotClick(id) {
    // jump to edit spot page
    this.setState({
      updateSpot: true,
      currentSpotId: id
    });
  }

  handleAddSpotClick(e) {
    // jump to add spots page
    this.setState({
      addSpot: true,
    });
  }

  render() {

    let mainContent =
      <div className='manage-spots-home'>
        <PageHeader title={'Spot Management'} />
        <div className='my-spots-container'>
          <SpotList spots={this.state.spots} handleSpotClick={this.handleSpotClick}/>
        </div>
        <div className='button-container'>
          <Button func={this.handleAddSpotClick} text={'Add Spot'}/>
        </div>
      </div>;

    if (this.state.addSpot) {
      mainContent = <AddSpot />
    }
    if (this.state.updateSpot) {
      mainContent = <UpdateSpot id={this.state.currentSpotId} />
    }

    return (
      <div>
        {mainContent}
      </div>
    );

  }

}


export default ManageSpots;