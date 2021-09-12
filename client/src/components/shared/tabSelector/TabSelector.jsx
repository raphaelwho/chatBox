import React from 'react';
import './TabSelector.css';



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

export default class TabSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: 0
    }
  }

  onClick(e) {
    console.log(e.target.id);
    this.setState({ selectedItem: e.target.id });
  }

  render() {
    return (
      <div className="tab-selector">
        <div className="tab-selector-body">
          <Icon id={0} onClick={(e) => { this.onClick(e) }} isActive={this.state.selectedItem == 0} activeState={'./rentActive.png'} inactiveState={'./rentInactive.png'} />
          <Icon id={1} onClick={(e) => { this.onClick(e) }} isActive={this.state.selectedItem == 1} activeState={'./spotsActive.png'} inactiveState={'./spotsInactive.png'} />
          <Icon id={2} onClick={(e) => { this.onClick(e) }} isActive={this.state.selectedItem == 2} activeState={'./profileActive.png'} inactiveState={'./profileInactive.png'} />
        </div>
      </div>

    );
  }
}