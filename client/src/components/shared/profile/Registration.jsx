import React from 'react';
import style from './Registration.css'

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: ''
    }
  }

  handleChange(){
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  register() {
    this.props.addUser(this.state);
  }

  render() {

    return (
      <div className="registration">
        {/* <div className="backtoLogin"><span className="backBtn">{'\u1438'}</span> <span> Back to Login</span></div> */}
        <div className="backtoLogin">
          <div className="backBtn">{'\u1438'} </div>
          <div className="backWord"> Back to Login</div>
        </div>
        <div className="registrationContainer">
          <label>Username</label>
          <input type="text" id="username" className="registrationInput" onChange={this.handleChange.bind(this)}></input>
          <label>Password</label>
          <input type="text" id="password" className="registrationInput" onChange={this.handleChange.bind(this)}></input>
          <label>Email</label>
          <input type="text" id="email" className="registrationInput" onChange={this.handleChange.bind(this)}></input>
          <label>First Name</label>
          <input type="text" id="firstName" className="registrationInput" onChange={this.handleChange.bind(this)}></input>
          <label>Last Name</label>
          <input type="text" id="lastName" className="registrationInput" onChange={this.handleChange.bind(this)}></input>
        </div>
        <button className="registrationBtn" onClick={this.register.bind(this)}>Finish Registration</button>
      </div>
    )
  }

}

export default Registration;