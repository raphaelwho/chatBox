import React from 'react';
import BookingList from './shared/bookingList/bookingList.jsx';
import Registration from './shared/profile/Registration.jsx';
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
        <BookingList />
        <Registration />
      </div>
    )
  };
}

export default App;