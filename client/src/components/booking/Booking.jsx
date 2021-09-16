import React from 'react';
import axios from 'axios';
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
    this.spotID = 27;
    this.renterID = 3;
    this.startTime = 1631750952568;
    this.endTime = 1631750989351;
    this.handleConfirmBookingButtonClick = this.handleConfirmBookingButtonClick.bind(this);
  }

  handleConfirmBookingButtonClick() {
    axios.post('/booking', {
      spot_id: this.spotID,
      renter_id: this.renterID,
      start_time: this.startTime,
      end_time: this.endTime
    })
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render () {
    return (
      <div id="booking">
        <div id="booking-header">
          <PageHeader title={'Confirm Booking'} isVisible={true} />
        </div>
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
            <Button text={'Confirm'} func={this.handleConfirmBookingButtonClick} />
          </div>
        </div>
      </div>
    )
  };
}

export default Booking;



