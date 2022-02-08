import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
const Success=()=> {
  const navigate = useNavigate()
  const [countdown,setCountdown] = useState(6);
  const countdownFunc = ()=> {
    setCountdown(countdown-1);
  }

  const countInterval = setInterval(countdownFunc,1000)
  if(countdown == 0){
    setCountdown(0)
    clearInterval(countInterval)
  }
  const redirectFunc = ()=>{
    navigate('/')
  }
  const redirect = setTimeout(redirectFunc,6000)

    return (
      <div className="success-div">
          <h1 className="thanks-msg">Thank you for shopping with us!</h1>
          <h3>You will be redirected to home page in {countdown} seconds...</h3>
          <br/><br/>
          <h6 className="redirect">Don't like to wait,<NavLink to="/">Redirect Now</NavLink></h6>
      </div>
    );
  }
  
  export default Success;