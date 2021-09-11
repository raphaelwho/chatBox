import React from 'react';
import './Login.css';
import LoginBox from './LoginBox.jsx';
import Profile from '../profile/Profile.jsx';
// import Registration from '../shared/profile/Registration.jsx';
// import MapContainer from '../booking/map.jsx';
import 'regenerator-runtime/runtime';
const axios = require('axios');

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLogin: true,
      toRegister: false,
      username: '',
      password: '',
      message: ''
    }
  }

  componentDidMount() {
    let username = localStorage.getItem('username');
    console.log('username: ', username)
    if (username) {
      this.setState({username: username});
    }
  }

  handleChange(){
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async login() {
    // console.log("name", document.getElementById("username").value);
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    // console.log('state before login', this.state);

    axios.post('/login', data)
      .then(result => {
        // console.log('login?', result.data);
        let newState;
        if (result.data === 'noExistUser') {
          newState = {
            username: '',
            password: '',
            message: 'Not a existing user! Try again!'
          }
        // } else if (result.data === 'successLogin') {
        } else if (result.data.user_id) {
          localStorage.setItem('username', this.state.username);
          localStorage.setItem('user_id', result.data.user_id);
          newState = {
            showLogin: false
          };
        // } else if (result.data === 'failLogin'){
        } else {
          console.log('here???')
          newState = {
            password: '',
            message: 'Incorrect Password. Try again!'
          };
        }
        this.setState(newState, ()=>console.log('login success? ', this.state));
        console.log('state after register', this.state);
      })
      .catch(err => {
        console.log('Login err: ', err);
      })
  }

  toRegister() {
    // console.log('direct to register!');
    localStorage.removeItem('username');
    localStorage.removeItem('user_id');
    this.setState({showLogin: false, toRegister: true});
  }

  render() {
    if (this.state.showLogin) {
      return (
        <div id='background'>
          <div id='login'>
            <div id='name'>
              GALILEO
            </div>
            <LoginBox login={this.login.bind(this)} register={this.toRegister.bind(this)} handleChange={this.handleChange.bind(this)} username={this.state.username} password={this.state.password} placeholder={this.state.placeholder}/>
          </div>
        </div>
      )
    } else if (this.state.toRegister) {
      return (
        // <div>Register</div>
        <Profile type={'registration'} />
        // <Registration btn={'Finish Registration'} />
      );
    } else {
      return (
        <div>Login success! Let's search parking spot!</div>
        // <MapContainer locations={this.props.locations} />
      );
    }
  }
}


export default Login;