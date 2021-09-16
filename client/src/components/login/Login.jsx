import React from 'react';
import './Login.css';
import LoginBox from './LoginBox.jsx';
import Profile from '../profile/Profile.jsx';
import MapView from '../mapview/MapView.jsx';
import 'regenerator-runtime/runtime';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
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
    // console.log('username: ', username)
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
    event.preventDefault();
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
            message: 'Not an existing user! Try again!'
          }
        // } else if (result.data === 'successLogin') {
        } else if (result.data.user_id) {
          localStorage.setItem('username', this.state.username);
          localStorage.setItem('user_id', result.data.user_id);
          newState = {
            showLogin: false
          };
          this.props.history.push('/mapview');
        // } else if (result.data === 'failLogin'){
        } else {
          newState = {
            password: '',
            message: 'Incorrect Password. Try again!'
          };
        }
        this.setState(newState);
        // this.setState(newState, ()=>console.log('login success? ', this.state));
        // console.log('state after register', this.state);
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

    // return  (
    //   <Route path="/login" component={Profile}/>
    // )

    if (this.state.showLogin) {
      return (
        <div id='background'>
          <div id='login'>
            <div id='name'>
              GALILEO
            </div>
            <LoginBox login={this.login.bind(this)} register={this.toRegister.bind(this)} handleChange={this.handleChange.bind(this)} username={this.state.username} password={this.state.password} placeholder={this.state.placeholder} message={this.state.message} />
          </div>
        </div>
      )
    }
  }
}


export default withRouter(Login);