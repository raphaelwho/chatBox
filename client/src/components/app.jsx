import React from 'react';
import Login from './login/Login.jsx';
import Profile from './profile/Profile.jsx';
import PageHeader from './shared/pageHeader/pageHeader.jsx';
import './app.css';
import MapView from './mapview/MapView.jsx';
import BottomModal from './shared/bottomModal/BottomModal.jsx';
import ManageSpots from './spotManagement/ManageSpots.jsx';
import TabSelector from './shared/tabSelector/TabSelector.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      activePage: 0
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

  pageSwitch(pageIdx) {
    this.setState({ activePage: pageIdx });
    console.log("Active Page: " + pageIdx);
  }

  renderPage() {
    console.log(this.state.activePage, typeof this.state.activePage)
    if (this.state.activePage === '0') {
      return (<MapView />);
    } else if (this.state.activePage === '1') {
      return (<ManageSpots />);
    } else {
      return (<Profile type={'update'} />);
    }
  }

  render() {
    return (

      <div>
        <TabSelector onChange={(pageIdx) => { this.pageSwitch(pageIdx); }}></TabSelector>
        <PageHeader title={'Spot Management'} isVisible={true} />
        {this.renderPage()}


      </div>
    )
  };
}

export default App;
