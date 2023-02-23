import React, { useState } from 'react';
// import google from "./images/google.png"
import frame from "./images/amico.png"
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleWhole, faEyeSlash, faEnvelope, faEye } from '@fortawesome/free-solid-svg-icons';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = React.useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  function handleLogin(event) {
    event.preventDefault();
    // handle login logic here
    window.location.href = "/";
  }

  return (
    <div className='login-page'>
      <div className='login-cont'>
          <h1>Welcome Back</h1>
          <p>Welcome back, Please enter your <br /> details</p>
          {/* <button className='form-log'>
           <img src={google} alt="google" width='7%'/>
              Log in With Google
          </button> */}
     
        <form onSubmit={handleLogin}>
        <div className='lab'>
            <div className='labs'><label htmlFor="email-input">Email</label></div>
            <div className="form-group">
                <div className='label'>
                  <FontAwesomeIcon icon={faEnvelope} className="form-icon" />
                </div>
            
              <input
                id="username-input"
                type="email"
                className="form-input"
                placeholder="Email Address"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className='lab'>
      <div className='labs'>
        <label htmlFor="password-input">
          Password
        </label>
      </div>
      <div className="form-group">
        <div className='label' onClick={togglePasswordVisibility}>
          <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="form-icon" />
        </div>
        <input
          id="password-input"
          type={showPassword ? "text" : "password"}
          className="form-input"
          placeholder="8 digits characters"
          maxLength={8}
          pattern="^[0-9]{1,8}$" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
          
          <div className='click-cont'>
            <label className='container'>
              <input
                
                type="checkbox"
                checked={checked}
                onChange={handleChange}
              />  <span class="checkmark"></span>
              Remember for me
            </label>
            <a href="#">
            Forgot password
            </a>
          </div>
          <div className='expert'>
              <p><span>or</span></p>
          </div>
          <h3>Login using</h3>
          <div className='icon-cont'>

          <div className='icon'>
              <ul className="footer-list">
              <li><SocialIcon url="https://facebook.com" bgColor="#0000FF" style={{width: 50, height:50}}/></li>
              </ul>
          </div>

          <div className='icon'>
              <ul className="footer-list">
              <li><SocialIcon url="https://google.com"  bgColor="#DD4C4C"style={{width: 50, height:50}}/></li>
              </ul>
          </div>

          <div className='icon'>
              <ul className="footer-list">
              <li><FontAwesomeIcon icon={faAppleWhole} bgColor="#282D2D"style={{width: 50, height:50}} /></li>
              </ul>
          </div>

          </div>
          <button onClick={handleLogin} type="submit" className="form-button">
              Get Started
          </button>
        </form>
        <div className='acc-cont'>
          <p>Don't have an account? <Link to='/signup' style={{textDecoration:'none'}}><span className='acc'>Sign up</span></Link> </p>
        </div>
      </div>

      <div className='frame-cont'>
        <div className='frame'>
          <img src={frame} alt="hospital" width="65%" />
        </div>
        <h2>Check out our network <br /> of health providers </h2>
        <p>Enjoy the flexibility that comes with this <br /> platform</p>
      </div>

    </div>
  )
  }

  export default Login;

