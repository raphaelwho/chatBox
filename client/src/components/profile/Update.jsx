import React, { Component } from 'react'
import $ from 'jquery';

const InputForm = () => {
  return (
    <div>
      <label >Username</label><br />
      <input type="text" className="form" name="username" required />
      <label >Password</label><br />
      <input type="text" className="form" name="password" required />
      <label >Email</label><br />
      <input type="email" className="form" name="email" required />
      <label >Frist Name</label><br />
      <input type="text" className="form" name="firstname" required />
      <label >Last Name</label><br />
      <input type="text" className="form" name="lastname" required />
      <input type='submit' />
    </div>
  )
}


export default class update extends Component {

  onFormSubmit(event) {
    event.preventdefault();
    var data = $('#input-form');
    console.log('new',data)

    $.ajax({
      url: 'http://localhost:3000/rsvps',
      type: 'POST',
      data: data.serialize(),
      success: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  ;
  }
  render() {

    return (
      <div>
        <form id="input-form" onSubmit={this.onFormSubmit}>
          <InputForm />
        </form>
        </div>
          )
    }

}

