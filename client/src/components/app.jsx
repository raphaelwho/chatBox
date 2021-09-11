import React from 'react';
import Registration from './profile/Registration.jsx';
import PageHeader from './shared/pageHeader/pageHeader.jsx';
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
        <PageHeader title={'Spot Management'} isVisible={true} />
        <MapView />
        <Registration />
      </div>
    )
  };
}

export default App;
