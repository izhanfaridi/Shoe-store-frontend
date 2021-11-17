import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import nike from './imgs/nike.png'
import cart from './imgs/cart.PNG'

function Header() {
    return (
      <nav className="navbar">
        <Link to="/"><img className="site-logo" src={nike}></img></Link> {' '}
        <div className="centerLinks">
          <Link className="link1" to="men">Men</Link>
          <Link className="link2" to="women">Women</Link>
          <Link className="link3" to="kids">Kids</Link>
          <Link className="link4" to="sale">Sale</Link>
        </div>

        <div className="end-links">
        <Link className="link5" to="login">Login</Link>
        <Link className="link6" to="cart"><img className="cart-logo" src={cart}></img></Link>
        </div>
      </nav>
    );
  }
  
  export default Header;
