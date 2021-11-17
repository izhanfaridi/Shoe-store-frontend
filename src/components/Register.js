import React from 'react'

function Register() {
    return (
      <div className="register-div">
        <h2>Register</h2>
        <h6>Please fill out the below information:</h6>
        <br/>
        <input type="text" placeholder="First Name"/>
        <input type="text" placeholder="Last Name"/>
        <br/>
        <input type="text" placeholder="Username"/>
        <input type="email" placeholder="E-mail"/>
        <br/>
        <input type="password" placeholder="Password"/>
        <input type="password" placeholder="Confirm Password"/>
        <br/>
        <br/>
        <h6>By creating an account, you are agreeing to our <b>Privacy Policy</b> and <b>Terms of Use</b></h6>
        <br/>
        <button>Register</button>
      </div>
    );
  }
  
  export default Register;
