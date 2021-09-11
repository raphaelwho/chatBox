import React from 'react';
import ParkingSpot from './shared/parkingSpot/parkingSpot.jsx';
import ChevronRight from './shared/icons/chevronRight.jsx';
import Trash from './shared/icons/trash.jsx';
import Registration from './shared/profile/Registration.jsx';
import PageHeader from './shared/pageHeader/pageHeader.jsx';
import TxtBox from './shared/txtBox/TxtBox.jsx';
import './app.css';
import MapContainer from './booking/map.jsx';
import Login from './login/Login.jsx'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      locations: []
    };
  }

  componentDidMount () {
    fetch(`/spots`)
      .then((resp) => resp.json())
      .then((spots) => {
        console.log('SPOTS', spots);
        this.setState({locations: spots})
      })
      .catch((err) => {
        console.log('ERROR GETTING SPOTS', err);
      })
  }

  onIconClick = () => {
    console.log('HELLO')
  }

  render () {
    return (
      <div>
        {/* <PageHeader title={'Spot Management'} />
        HELLO GALILEO
        <MapContainer locations={this.state.locations}/>
        <Registration />
        <TxtBox label={'yourLabel'} /> */}
        <Login locations={this.state.locations}/>
      </div>
    )
  };
}

export default App;
