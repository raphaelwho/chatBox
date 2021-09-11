import React from 'react';
import style from './LoginBox.css'
// import Profile from '../shared/profile/Profile.jsx';
import Registration from '../shared/profile/Registration.jsx';
const axios = require('axios');

class LoginBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange(){
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
      return (
        <div className="login-container">
          <div className="login-box">
            <label htmlFor="username"></label>
            <input required type="text" id="username" className="login-input" name="username" value ={this.props.username} placeholder="Username" onChange={this.handleChange.bind(this)}></input><br></br>
            <label htmlFor="password"></label>
            <input required type="text" id="password" className="login-input" name="password" value ={this.props.password} placeholder="Password" onChange={this.handleChange.bind(this)}></input><br></br>
            <button id="login-Btn" className="login-Btn" onClick={this.props.login}>LOGIN</button>
            <p id="to-register" className="to-register" onClick={this.props.register}>Create an Account</p>
          </div>
          <h2>{this.props.message}</h2>
        </div>
      )
  }
}

export default LoginBox;
