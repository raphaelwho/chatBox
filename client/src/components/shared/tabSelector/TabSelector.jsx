import React from 'react';
import './TabSelector.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

class Icon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: this.props.isActive
    }
  }


  render() {
    return (
      <img className="icon"
        id={this.props.id}
        onClick={(e) => { this.props.onClick(e); }}
        src={this.props.isActive ? `${this.props.activeState}` : `${this.props.inactiveState}`}></img>
    );
  }


}

// Hardcoded images is obv not best practice, but we have a deadline
class TabSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: 0
    }
  }

  onClick(e) {
    this.setState({ selectedItem: e.target.id });
    if (this.props.onChange) {
      this.props.onChange(e.target.id);
    }
  }

  render() {
    return (
      <div className="tab-selector">
        <div className="tab-selector-body">
        <Link to="/mapview"><Icon id={0} onClick={(e) => { this.onClick(e) }} isActive={this.state.selectedItem == -1} activeState={'./rentActive.png'} inactiveState={'./rentInactive.png'} ></Icon></Link>
          <Link to="/spot"><Icon id={1} onClick={(e) => { this.onClick(e) }} isActive={this.state.selectedItem == -1} activeState={'./spotsActive.png'} inactiveState={'./spotsInactive.png'} ></Icon></Link>
          <Link to="/profile-update"><Icon id={2} onClick={(e) => { this.onClick(e) }} isActive={this.state.selectedItem == -1} activeState={'./profileActive.png'} inactiveState={'./profileInactive.png'} ></Icon></Link>
          <Link to="/chat"><Icon id={3} onClick={(e) => { this.onClick(e) }} isActive={this.state.selectedItem == -1} activeState={'./profileActive.png'} inactiveState={"Chat"} ></Icon></Link>
        </div>
      </div>

    );
  }
}


export default withRouter(TabSelector);