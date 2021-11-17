import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    return (
      <div className="login-info">
          <h2>Login</h2>
          <h6>Please enter your E-mail and Password</h6>
          <br/>
          <input type="email" placeholder="E-mail"/>
          <br/>
          <input type="password" placeholder="Password"/>
          <br/>
          <button>Login</button>
          <h6>Don't have an account? <Link className="register-link" to="register"><b>Create One.</b></Link></h6>
      </div>
    );
  }
  
  export default Login;
