import React, { Component } from 'react'
import TabSelector from '../shared/tabSelector/TabSelector.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

class Chat extends Component {
  render() {
    return (
      <div>
        <TabSelector />
        Hello Chat!
      </div>
    )
  }
}

export default withRouter(Chat)
