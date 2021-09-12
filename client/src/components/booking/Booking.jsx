import React from 'react';
import './Booking.css';
import PageHeader from '../shared/pageHeader/pageHeader.jsx';
import Button from '../shared/button/button.jsx';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: 'E 60th Hyatt Place New York NY 1005',
      price: 15,
      fee: 0.75,
      hour: 2,
      photo: "https://archinect.imgix.net/uploads/3d/3ddb00ec0feb2ed25b6804cfbc16c7d1.jpg?auto=compress%2Cformat"
    };
  }

  render () {
    return (
      <div id="booking">
        <PageHeader title={'Confirm Booking'} isVisible={true} />
        <div id="booking-body">
            <div id="booking-spot-container">
              <div id="booking-spot-photo-container">
                <img id="booking-spot-photo" src={this.state.photo} />
              </div>
              <div id="booking-spot-address-container">
                <div>{this.state.address}</div>
                <div>{`$${this.state.price}/hour`}</div>
            </div>
          </div>
          <hr className="booking-hr" />
          <div id="booking-price-container">
            <table id="booking-price-table">
              <tbody>
                <tr id={"booking-price-table-price"}>
                  <td className="booking-price-table-col1">{`\$${this.state.price} x ${this.state.hour}`}</td>
                  <td className="booking-price-table-col2">{`\$${(this.state.price * this.state.hour).toFixed(2)}`}</td>
                </tr>
                <tr id={"booking-price-table-fee"}>
                  <td className="booking-price-table-col1">Service Fee</td>
                  <td className="booking-price-table-col2">{`\$${(this.state.fee).toFixed(2)}`}</td>
                </tr>
                <tr id={"booking-price-table-empty"}>
                  <td className="booking-price-table-col1"></td>
                  <td className="booking-price-table-col2"></td>
                </tr>
                <tr id={"booking-price-table-total"}>
                  <td className="booking-price-table-col1">Total</td>
                  <td className="booking-price-table-col2">{`\$${(this.state.price * this.state.hour + this.state.fee).toFixed(2)}`}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr className="booking-hr" />
          <div id="booking-policy-container">
            <div id="booking-policy-header">Galileo cancellation-policy</div>
            <div>The reservation of the spot is nonrefundable.</div>
          </div>
          <hr className="booking-hr" />
          <div id="booking-button-container">
            <Button text={'Confirm'} />
          </div>
        </div>
      </div>
    )
  };

}

export default Booking;



