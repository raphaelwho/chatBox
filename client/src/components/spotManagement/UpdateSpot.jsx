import React from 'react';
import Button from '../shared/button/button.jsx';
import './spotManagement.css';
import TxtBox from '../shared/txtBox/TxtBox.jsx';
import axios from 'axios';
// no page header

class UpdateSpot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      type: '',
      price: '',
      photo: '',
      spot_id: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/spot-details?id=${this.props.id}`)
      .then((results) => {
        console.log(results);
        let data = results.data[0];
        this.setState({
          address: data.address,
          type: data.type,
          price: data.price,
          photo: data.photo || '',
          spotId: this.props.id
        })
      })
  }

  handleSaveClick() {
    // update spot to server/db
    let options = this.state;
    console.log(options);
    axios.put('http://localhost:3000/update-spot-details', options)
      .then(() => {
        console.log('success updating');
        // maybe not necessary
        this.setState({
          address: '',
          type: '',
          price: '',
          photo: ''
        });
      })
      .then(() => {
        // update parent state updateSpot to null
        // jump back to manage spot home - in that case must elevate this func to homepage
      })
      .catch((err) => {
        console.log('error updating', err);
      })

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
            {/* <label>Add Photo</label>
            <input type="text" id='photo' className='add-spot-input' onChange={this.handleChange}></input> */}
            <div>Edit Photo</div>
          </div>

          {/* address maybe should be static */}
          <label>Address</label>
          <input type="text" id="address" value={this.state.address} className='txtBoxInput' onChange={this.handleChange} disabled></input>
          <label>Type</label>
          {/* make select default value match this.props.type initially */}
          <select className='txtBoxInput add-spot-select' id='type' onChange={this.handleChange}>
            <option value='driveway'>Driveway</option>
            <option value='garage'>Garage</option>
            <option value='carport'>Carport</option>
            <option value='indoor'>Indoor</option>
            <option value='outdoor'>Outdoor</option>
          </select>
          <label>Price</label>
          <input type='text' id='price' value={this.state.price} className='txtBoxInput' onChange={this.handleChange}></input>
      </div>

      <div className='button-container'>
        <Button func={this.handleSaveClick} text={'Save'} />
      </div>

    </div>
    )

  }
}

export default UpdateSpot;