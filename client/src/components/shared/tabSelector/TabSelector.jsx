import React from 'react';
import './TabSelector.css';


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

        </div>
      </div>
    );
  }
}