import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import nike from './imgs/nike.png'
import cartIcon from './imgs/cart.PNG'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import{useDispatch,useSelector} from 'react-redux'
import { Logout } from '../redux/userRedux';

function Header() {

  const dispatch=useDispatch()
  const currentUser=useSelector((state)=>state.user.currentUser)

  const quantity = useSelector(state=>state.cart.quantity)

  const handleClick =(e)=>{
    e.preventDefault()
    dispatch(Logout())
  }

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -35,
      top: 5,
      padding: '0 4px',
    },
  }));


    return (
      <nav className="navbar">
        <Link to="/">
          <img className="site-logo" src={nike}></img>
        </Link>{" "}
        <div className="centerLinks">
          <Link className="link1" to="men">
            Men
          </Link>
          <Link className="link2" to="women">
            Women
          </Link>
          <Link className="link3" to="kids">
            Kids
          </Link>
        </div>
        <div className="end-links">
          {(currentUser===null) ? <Link className="link5" to="login">Login</Link> : <button className="logout-btn" onClick={handleClick}>Logout</button>}
          <Link classNameUse="link6" to="cart">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={quantity} color="primary">
              <img className="cart-logo" src={cartIcon}></img>
              </StyledBadge>
            </IconButton>
          </Link>
        </div>
      </nav>
    );
  }
  
  export default Header;
