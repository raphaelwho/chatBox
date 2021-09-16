import React from 'react';
import Login from './login/Login.jsx';
import Profile from './profile/Profile.jsx';
import PageHeader from './shared/pageHeader/pageHeader.jsx';
import './app.css';
import MapView from './mapview/MapView.jsx';
import BottomModal from './shared/bottomModal/BottomModal.jsx';
import ManageSpots from './spotManagement/ManageSpots.jsx';
import Chat from './chat/Chat.jsx'

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }




  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/mapview">
              <MapView />
            </Route>
            <Route path="/profile-register">
              <Profile type={'registration'} />
            </Route>
            <Route path="/spot">
              <ManageSpots/>
            </Route>
            <Route path="/profile-update">
              <Profile type={'update'} />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
            <Route exact path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  };
}

export default App;
