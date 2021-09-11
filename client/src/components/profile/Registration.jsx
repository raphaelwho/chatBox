import React from 'react';
import TxtBox from '../shared/txtBox/TxtBox.jsx';
import Button from '../shared/button/button.jsx';

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
        <div className="registrationContainer">
          <TxtBox label={"Username"} onChange={this.handleChange.bind(this)}></TxtBox>
          <TxtBox label={"Password"} onChange={this.handleChange.bind(this)}></TxtBox>
          <TxtBox label={"Email"} onChange={this.handleChange.bind(this)}></TxtBox>
          <TxtBox label={"First Name"} onChange={this.handleChange.bind(this)}></TxtBox>
          <TxtBox label={"Last Name"} onChange={this.handleChange.bind(this)}></TxtBox>
        </div>
        <Button text="Finish Registration" onClick={this.register.bind(this)}></Button>

      </div>
    )
  }

}

export default Registration;