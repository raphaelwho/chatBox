import React from 'react';
import BookingList from './shared/bookingList/bookingList.jsx';
import './app.css';
import Map from './Map.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      spots: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/spots?lat=30.191450819000465&lng=-97.77308111999969')
      .then(response => response.json())
      .then(data => {
        const spots = data.rows[0].jsonb_build_object.features;
        this.setState({
          spots: spots
        })
      });
  }

  render () {
    return (
      <div>
        HELLO GALILEO
        <BookingList />
        <Map spots={this.state.spots}/>
      </div>
    )
  };
}

export default App;