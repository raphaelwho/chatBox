import React from 'react';
import ParkingSpot from './shared/parkingSpot/parkingSpot.jsx';
import ChevronRight from './shared/icons/chevronRight.jsx';
import Trash from './shared/icons/trash.jsx';
// import Profile from './shared/profile/Profile.jsx';
import Profile from './profile/Profile.jsx';
import PageHeader from './shared/pageHeader/pageHeader.jsx';
import './app.css';
// import MapContainer from './booking/map.jsx';
import Login from './login/Login.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
  }

  componentDidMount() {
    fetch(`/spots`)
      .then((resp) => resp.json())
      .then((spots) => {
        console.log('SPOTS', spots);
        this.setState({ locations: spots })
      })
      .catch((err) => {
        console.log('ERROR GETTING SPOTS', err);
      })
  }

  onIconClick = () => {
    console.log('HELLO')
  }

  render() {
    return (

      <div>
        <PageHeader title={'Spot Management'} isVisible={true} />
        {/* <MapView /> */}
        {/* <MapContainer locations={this.state.locations}/> */}
        {/* <Login /> */}
        <Profile type={'registration'} />
        <Profile type={'update'} />
        <Login locations={this.state.locations}/>
        {/* <TxtBox label={'yourLabel'} /> */}
      </div>
    )
  };
}

export default App;
