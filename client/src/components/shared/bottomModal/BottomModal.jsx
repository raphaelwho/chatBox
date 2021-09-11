import React from 'react';
import Sheet from 'react-modal-sheet';

export default class BottomModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        {/* Modal */}
        <Sheet isOpen={this.props.alwaysOpen || false ? true : this.props.isModalOpen} onClose={() => { }} snapPoints={[0.33, 0.1]}>
          <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content>{this.props.modalContent}</Sheet.Content>
          </Sheet.Container>
        </Sheet >

        {/* Submodal */}
        <Sheet isOpen={this.props.isSubmodalOpen || <h1>No Content Present</h1>} onClose={() => { }} snapPoints={[0.28]}>
          <Sheet.Container>
            <Sheet.Content>
              <div>x</div>
              {this.props.submodalContent || <h1>No Content Present</h1>}
            </Sheet.Content>
          </Sheet.Container>
        </Sheet >
      </div>
    );
  }
}