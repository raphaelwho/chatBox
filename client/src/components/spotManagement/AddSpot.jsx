import React from 'react';
import Button from '../shared/button/button.jsx';
import axios from 'axios';
import './spotManagement.css';
import Geocode from "react-geocode";
// Geocode.setApiKey(process.env.GOOGLE_API);
// no page header

class AddSpot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      address: '',
      type: '',
      price: '',
      photo: '',
      hostId: this.props.id,
      file: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleConfirmClick = this.handleConfirmClick.bind(this);
    this.addPhotoUrl = this.addPhotoUrl.bind(this);
    this.sendFile = this.sendFile.bind(this);
  }

  handleConfirmClick() {
    // post spot to server/db
    let options = this.state;

    Geocode.fromAddress(this.state.address)
    .then((response) => {
      const { lat, lng } = response.results[0].geometry.location;
      options.lat = lat;
      options.long = lng;
      console.log(options);
      return axios.post('http://localhost:3000/add-spot', options)
    })
    .then( async () => {
      console.log('success adding');
      // maybe not necessary
      await this.setState({
        address: '',
        type: '',
        price: '',
        photo: '',
      });
      return;
    })
    .then(() => {
      this.props.resetHomePage();
    })
    .catch((err) => {
      console.log('error adding', err);
    })

    // jump back to manage spot home - in that case must elevate this func to homepage
  }

  handleChange() {
    this.setState({
      [event.target.id]: event.target.value,
    }, () => console.log('add spot state', this.state));
  }

  setPhotoUrl(url) {
    this.setState({
        photo: url
    });
  }

  sendFile() {
    let formData = new FormData();
    formData.append('spotImage', this.state.file);
    // send to server, add to s3
    axios.post(`http://localhost:3000/uploadImage`, {body: formData})
      .then((results) => {
        // upon success response, get the photo url from s3 and add it to state
        console.log('photo post results', results);
        // this.setPhotoUrl(url);
      })
      .catch((err) => {
        console.log('photo error upload');
      })
  }

  render() {

    let photoDisplay;
    if (this.state.photo.length) {
      photoDisplay =
      <div className='add-spot-photo'>
        <img className='add-spot-image' src={this.state.photo}></img>
      </div>
    } else {
      photoDisplay =
       <div className='add-spot-photo'>
        <label for='file' className='photo-upload'>Add Photo</label>
        <input type="file" id='file' className='photo-input' accept='image/png, image/jpeg' onChange={this.handleChange}></input>
       </div>
    }

    return (
      <div className='add-spot-home'>

       <div className='add-spot-form'>
          {photoDisplay}
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