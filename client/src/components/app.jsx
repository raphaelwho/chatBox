import React from 'react';
import ParkingSpot from './shared/parkingSpot/parkingSpot.jsx';
import './app.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        HELLO GALILEO
        <ParkingSpot />
      </div>
    )
  };
}

export default App;