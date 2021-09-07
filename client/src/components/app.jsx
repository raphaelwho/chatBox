import React from 'react';
import BookingList from './shared/bookingList/bookingList.jsx';
import './app.css';
import Map from './Map.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        HELLO GALILEO
        <BookingList />
        <Map />
      </div>
    )
  };
}

export default App;