import React from 'react';
import './TabSelector.css';



let Icon = ({ isActive, Path1, Path2 }) => {
  return (
    <img style={{ width: "90%" }} src={isActive ? `${Path1}` : `${Path2}`}></img>
  );
}


export default class TabSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: 0
    }
  }

  render() {
    return (
      <div className="tab-selector">
        <div className="tab-selector-body">
          <Icon isActive={true} Path1={'./rentActive.png'} />
          <Icon isActive={true} Path1={'./rentActive.png'} />
          <Icon isActive={true} Path1={'./rentActive.png'} />
        </div>
      </div>

    );
  }
}