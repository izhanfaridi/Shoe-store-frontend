import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../redux/apiCalls';
import LoginError from './LoginError';

function Login() {
  
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const dispatch=useDispatch()
  const {isFetching,error}=useSelector((state)=>state.user)

  const handleClick =(e)=>{
    e.preventDefault()
    login(dispatch,{username,password})
  }

    return (
      <div className="login-info">
          <h2>Login</h2>
          <h6>Please enter your E-mail and Password</h6>
          <br/>
          <input onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Username"/>
          <br/>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"/>
          <br/>
          <button onClick={handleClick} disabled={isFetching}>Login</button>
          {error && <LoginError></LoginError>}
          <h6>Don't have an account? <Link className="register-link" to="register"><b>Create One.</b></Link></h6>
      </div>
    );
  }
  
  export default Login;
