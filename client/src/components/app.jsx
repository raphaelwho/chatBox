import React from 'react';
import Profile from './profile/Profile.jsx';
import PageHeader from './shared/pageHeader/pageHeader.jsx';
import './app.css';
import MapView from './mapview/MapView.jsx';
import BottomModal from './shared/bottomModal/BottomModal.jsx';
import TabSelector from './shared/tabSelector/TabSelector.jsx';

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
        <TabSelector></TabSelector>
        <PageHeader title={'Spot Management'} isVisible={true} />
        <MapView />
        <Profile type={'registration'} />
        <Profile type={'update'} />
      </div>
    )
  };
}

export default App;
