import React from 'react';
import Registration from './profile/Registration.jsx';
import PageHeader from './shared/pageHeader/pageHeader.jsx';
import TxtBox from './shared/txtBox/TxtBox.jsx';
import './app.css';
import MapView from './mapview/MapView.jsx';

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
        <MapView />
        <PageHeader title={'Spot Management'} isVisible={true} />
        <Registration />
        <TxtBox label={'yourLabel'} />
      </div>
    )
  };
}

export default App;
