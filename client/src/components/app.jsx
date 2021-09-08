import React from 'react';
import BookingList from './shared/bookingList/bookingList.jsx';
import PageHeader from './shared/pageHeader/pageHeader.jsx';
import './app.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <PageHeader title={'Spot Management'} />
        HELLO GALILEO
        <BookingList />
      </div>
    )
  };
}

export default App;