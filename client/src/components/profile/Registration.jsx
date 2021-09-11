import React from 'react';
import TxtBox from '../shared/txtBox/TxtBox.jsx';

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

  handleChange() {
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
          <TxtBox label={"Username"} onChange={this.handleChange.bind(this)}></TxtBox>
          <TxtBox label={"Password"} onChange={this.handleChange.bind(this)}></TxtBox>
          <TxtBox label={"Email"} onChange={this.handleChange.bind(this)}></TxtBox>
          <TxtBox label={"First Name"} onChange={this.handleChange.bind(this)}></TxtBox>
          <TxtBox label={"Last Name"} onChange={this.handleChange.bind(this)}></TxtBox>
        </div>
        <button className="registrationBtn" onClick={this.register.bind(this)}>Finish Registration</button>
      </div>
    )
  }

}

export default Registration;