
import React from 'react';
import style from './Registration.css'
import Button from '../shared/button/button.jsx';
import Login from '../login/Login.jsx';
import $ from 'jquery';

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      first_name: '',
      last_name: '',
      back:false
    }
  }

  componentDidMount() {

    if (this.props.btn === 'Save Information') {
      let user_id = localStorage.getItem('user_id')||1;
      // axios.get, db.getUser
      $.ajax({
        url: `http://localhost:3000/my-profile/${user_id}`,
        type: 'GET',
        success: (res) => {
          this.setState(res, () => console.log('GetExistingUser State: ', this.state));

        },
        error: (err) => {
          console.log('error',err);
        }
      })

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
          <input required type="text" id="first_name" className="registrationInput" value ={this.state.first_name} onChange={this.handleChange.bind(this)}></input>
          <label>Last Name</label>
          <input type="text" id="last_name" className="registrationInput" value ={this.state.last_name} onChange={this.handleChange.bind(this)} ></input>
          <input type="submit" className="registrationBtn" value={this.props.btn}/>
        {/* </div> */}
        </form>
      </div>
    )
  }

}

export default Registration;