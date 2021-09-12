import React from 'react';
import Button from '../shared/button/button.jsx';
import axios from 'axios';
import './spotManagement.css';
// no page header

class AddSpot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      type: '',
      price: '',
      photo: '',
      userId: this.props.userId
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleConfirmClick() {
    // post spot to server/db
    // update spot to server/db
    let options = this.state;
    console.log(options);
    axios.put('http://localhost:3000/add-spot', options)
      .then(() => {
        console.log('success updating');
        // maybe not necessary
        this.setState({
          address: '',
          type: '',
          price: '',
          photo: '',
        });
      })
      .then(() => {
        // update parent state updateSpot to null
        // jump back to manage spot home - in that case must elevate this func to homepage
      })
      .catch((err) => {
        console.log('error updating', err);
      })
    // jump back to manage spot home - in that case must elevate this func to homepage
  }

  handleChange() {
    this.setState({
      [event.target.id]: event.target.value,
    }, () => console.log('add spot state', this.state));
  }


  render() {

    return (
      <div className='add-spot-home'>

       <div className='add-spot-form'>
          <div className='add-spot-photo'>
            {/* <label>Add Photo</label>
            <input type="text" id='photo' className='add-spot-input' onChange={this.handleChange}></input> */}
            <div>Add Photo</div>
          </div>
          <label>Address</label>
          <input type="text" id="address" className='txtBoxInput' onChange={this.handleChange}></input>
          <label>Type</label>
          <select className='txtBoxInput add-spot-select' id='type' onChange={this.handleChange}>
            <option value='driveway'>Driveway</option>
            <option value='garage'>Garage</option>
            <option value='carport'>Carport</option>
            <option value='indoor'>Indoor</option>
            <option value='outdoor'>Outdoor</option>
          </select>
          <label>Price</label>
          <input type='text' id='price' className='txtBoxInput' onChange={this.handleChange}></input>
        </div>
       <div className='button-container'>
        <Button func={this.handleConfirmClick} text={'Add Spot'}/>
       </div>
      </div>
    )

  }
}

export default AddSpot;