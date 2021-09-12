import React from 'react';
import Sheet from 'react-modal-sheet';


// Accepted Props
// isModalOpen -> is the primary modal open
// isSubmodalOpen -> is the submodal open
// modalHeaderContent -> a react view that will present inside the main modal's header
// modalContent -> the main modal's content
// submodalContent -> the submodal's content
// onModalClose -> A function which executes when the main modal is closed
// onSubmodalClose -> A function which executes when the main modal is closed

// SAMPLE CASE:
/*
<BottomModal
  isModalOpen={true}
  isSubmodalOpen={true}
  modalContent={<h1>Test</h1>}
  submodalContent={<h1>Test2</h1>}
  onModalClose={() => { console.log("Attempted to close main ") }}
  onSubmodalClose={() => { console.log("Closed submodal") }}
/>
  */
export default class BottomModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: this.props.isModalOpen || false,
      isSubmodalOpen: this.props.isSubmodalOpen || false,
    }
  }

  render() {

    return (
      <div>
        {/* Modal */}
        <Sheet isOpen={this.props.isModalOpen} onClose={() => { this.props.onModalClose(); }} snapPoints={[0.33, 0.1]}>
          <Sheet.Container>
            <Sheet.Header>{this.props.modalHeaderContent}</Sheet.Header>.
            <Sheet.Content>{this.props.modalContent || <h1>No Content Present</h1>}</Sheet.Content>
          </Sheet.Container>
        </Sheet >

        {/* Submodal */}
        <Sheet disableDrag={true} isOpen={this.state.isSubmodalOpen} onClose={() => { }} snapPoints={[0.28]}>
          <Sheet.Container>
            <Sheet.Header>
              <div style={{ marginLeft: '95%', width: "100%" }}>
                <h1 onClick={() => { this.props.onSubmodalClose(); this.setState({ isSubmodalOpen: false }); }}>{'\u2715'}</h1>
              </div>
            </Sheet.Header>
            <Sheet.Content>
              {this.props.submodalContent || <h1>No Content Present</h1>}
            </Sheet.Content>
          </Sheet.Container>
        </Sheet >
      </div >
    );
  }
}