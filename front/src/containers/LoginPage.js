import React, { Component } from 'react';
import './css/main.css';
import Oauth from './Googlesignin';
import axios from 'axios';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }
  
  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({ error: '' });
    console.log(this.state);
    axios.post(`http://localhost:8000/auth/token/login`, {
  email:this.state.email,
  password: this.state.password,
})
      .then(res => {
        console.log(res);
        console.log(res.data);
      }).catch(error => {
        console.log(error.response);
    });
  }

  handleUserChange(evt) {
    this.setState({
      email: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }
  render() {

    return (
    <div>
          <script src="https://apis.google.com/js/platform.js" async defer></script>
          <meta name="google-signin-client_id" content="849906640607-rot890jh0ubg1qi93b73uevcdisq8ld4.apps.googleusercontent.com"></meta>

          <form onSubmit={this.handleSubmit}>

  <div className="container">
    <label for="uname"><b>Email</b></label>
    <input type="text" placeholder="Enter Username" name="uname" onChange={this.handleUserChange} required />

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" onChange={this.handlePassChange} required />

    <button type="submit">Login</button>

  </div>
  <span className="psw">Don't have an account <a href="/create/">Sign Up!</a></span>
  <div className="container" style={{backgroundColor:"#f1f1f1"}}>   
  </div>
</form>


        <Oauth />
    </div>
    );
  }
}

export default LoginPage;




// googleSDK() {
 
//   window['googleSDKLoaded'] = () => {
//     window['gapi'].load('auth2', () => {
//       this.auth2 = window['gapi'].auth2.init({
//         client_id: '849906640607-rot890jh0ubg1qi93b73uevcdisq8ld4.apps.googleusercontent.com',
//         cookiepolicy: 'single_host_origin',
//         scope: 'profile email'
//       });
//       this.prepareLoginButton();
//     });
//   }
 
//   (function(d, s, id){
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) {return;}
//     js = d.createElement(s); js.id = id;
//     js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
//     fjs.parentNode.insertBefore(js, fjs);
//   }(document, 'script', 'google-jssdk'));
 
// }
// componentDidMount() {
//   this.googleSDK();
// }
// prepareLoginButton = () => {

//   console.log(this.refs.googleLoginBtn);
   
//   this.auth2.attachClickHandler(this.refs.googleLoginBtn, {},
//       (googleUser) => {
   
//       let profile = googleUser.getBasicProfile();
//       console.log('Token || ' + googleUser.getAuthResponse().id_token);
//       console.log('ID: ' + profile.getId());
//       console.log('Name: ' + profile.getName());
//       console.log('Image URL: ' + profile.getImageUrl());
//       console.log('Email: ' + profile.getEmail());
//       //YOUR CODE HERE
   
   
//       }, (error) => {
//       alert(JSON.stringify(error, undefined, 2));
//       });
   
//   }