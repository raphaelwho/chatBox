
import React from 'react';
import style from './Registration.css'
import Button from '../shared/button/button.jsx';
import Login from '../login/Login.jsx';

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      back:false
    }
  }

  componentDidMount() {
    if (this.props.btn === 'Save Information') {
      this.props.handleUser();  // to get existingProfile
      let existingProfile = {
        username: '1',
        password: '2',
        email: '3@gmail.com',
        firstName: '4',
        lastName: '5'
      };
      this.setState(existingProfile, () => console.log('GetExistingUser State: ', this.state));
    }
  }

  handleChange(){
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  backtoLogin(){
    console.log('backtoLogin');
    this.setState({back:true})
  }

  submit(event) {
    event.preventDefault();
    // var data = this.state;
    // console.log('new',data)

    // $.ajax({
    //   url: 'http://localhost:3000/creat_account',
    //   type: 'POST',
    //   data: data,
    //   success: (res) => {
    //     console.log("success",res);
    //   },
    //   error: (err) => {
    //     console.log('error',err);
    //   }
    // })

    // to Comment out below
    // if (this.props.btn === 'Finish Registration') {
    //   console.log('RegisterUser State: ', this.state);
    //   this.props.handleUser(this.state);
    // }
    // if (this.props.btn === 'Save Information') {
    //   console.log('UpdateUser State: ', this.state);
    //   // this.props.updateUser(this.state);
    // }
    // to Comment out above

    this.props.handleUser(this.state);

  }

  showBacktoLogin(){
    if (this.props.btn === 'Finish Registration') {
      return (
        <div className="backtoLogin" onClick={this.backtoLogin.bind(this)}>
          <div className="backBtn">{'\u1438'} </div>
          <div className="backWord"> Back to Login</div>
        </div>
      )
    }
  }

  render() {
    console.log(this.props)
    if (this.state.back)
      {return (
        <Login />
      )}

    return (
      <div className="registration">
        {/* <div className="backtoLogin"><span className="backBtn">{'\u1438'}</span> <span> Back to Login</span></div> */}
        { this.showBacktoLogin() }
        <form onSubmit = {this.submit.bind(this)} className="registrationContainer">
        {/* <div className="registrationContainer"> */}
          <label>Username</label>
          <input type="text" id="username" className="registrationInput" value ={this.state.username} onChange={this.handleChange.bind(this)} required ></input>
          <label>Password</label>
          <input required type="text" id="password" className="registrationInput" value ={this.state.password} onChange={this.handleChange.bind(this)}></input>
          <label>Email</label>
          <input required type="email" id="email" className="registrationInput" value ={this.state.email} onChange={this.handleChange.bind(this)}></input>
          <label>First Name</label>
          <input required type="text" id="firstName" className="registrationInput" value ={this.state.firstName} onChange={this.handleChange.bind(this)}></input>
          <label>Last Name</label>
          <input type="text" id="lastName" className="registrationInput" value ={this.state.lastName} onChange={this.handleChange.bind(this)} ></input>
          <input type="submit" className="registrationBtn" value={this.props.btn}/>
        {/* </div> */}
        </form>
      </div>
    )
  }

}

export default Registration;