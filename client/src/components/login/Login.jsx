import React from 'react';
import './Login.css';
import LoginBox from './LoginBox.jsx';
// import Profile from '../shared/profile/Profile.jsx';
import Registration from '../shared/profile/Registration.jsx';
import MapContainer from '../booking/map.jsx';

// export default () => (
//   <div id='background'>
//     <div id='login'>
//       <div id='name'>
//         GALILEO
//       </div>
//       <LoginBox />
//     </div>
//   </div>
// );

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLogin: true,
      toRegister: false
    }
  }

  login() {
    console.log('login check!', this.state);
    // axios.get, db.getUser, confirm psw
    this.setState({showLogin: false});
  }

  register() {
    console.log('direct to register!');
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
            <LoginBox login={this.login.bind(this)} register={this.register.bind(this)}/>
          </div>
        </div>
      )
    } else if (this.state.toRegister) {
      return (
        // <div>Register</div>
        // <Profile type={'registration'} />
        <Registration btn={'Finish Registration'} />
      );
    } else {
      return (
        // <div>Login success! Let's search parking spot!</div>
        <MapContainer locations={this.props.locations} />
      );
    }
  }
}


export default Login;