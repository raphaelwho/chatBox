import React from 'react';


export default class BottomModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: this.props.isModalOpen || false,
      isSubmodalOpen: this.props.isSubmodalOpen || false,
    }
  }

  render() {

  }
}