import React from 'react';
import Button from '../shared/button/button.jsx';
import './spotManagement.css';
// no page header

class UpdateSpot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: this.props.address,
      type: this.props.type,
      price: this.props.type,
      photo: this.props.photo
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleSaveClick() {
    // update spot to server/db
    // jump back to manage spot home - in that case must elevate this func to homepage
  }

  handleChange() {
    this.setState({
      [event.target.id]: event.target.value,
    }, () => console.log('edit spot state', this.state));
  }


  render() {

    return (
      <div className='add-spot-home'>

       {/* make into box show photo*/}

       <div className='add-spot-form'>
        <div className='add-spot-photo'>
          <label>Edit Photo</label>
          <input type="text" id='photo' value={this.state.photo} className='add-spot-input' onChange={this.handleChange}></input>
        </div>
          {/* address maybe should be static */}
          <label>Address</label>
          <input type="text" id="address" value={this.state.address} className='add-spot-input' onChange={this.handleChange}></input>
          <label>Price</label>
          <input type='text' id='price' value={this.state.price} className='add-spot-input' onChange={this.handleChange}></input>
          <label>Type</label>
          {/* make select default value match this.props.type initially */}
          <select className='add-spot-select' id='type' onChange={this.handleChange}>
            <option value='driveway'>Driveway</option>
            <option value='garage'>Garage</option>
            <option value='carport'>Carport</option>
            <option value='indoor'>Indoor</option>
            <option value='outdoor'>Outdoor</option>
          </select>
      </div>
       <Button func={this.handleSaveClick} text={'Add Spot'}/>
    </div>
    )

  }
}

export default UpdateSpot;