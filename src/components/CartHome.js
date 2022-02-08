import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout"
import {userRequest } from '../requestMethods'
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { DeleteOutline } from "@material-ui/icons";
import { deleteProduct } from "../redux/cartRedux";
import {addOrder} from '../redux/apiCalls'



function CartHome() {
  
  const KEY = process.env.REACT_APP_STRIPE;
  
  const user = useSelector(state=>state.user)
  const cart = useSelector(state=>state.cart)
  const [order,setOrder] = useState({})
  const prod =[]
  const [stripeToken , setStripeToken] = useState(null)
  const dispatch = useDispatch()

  const onToken =(token)=>{
    setStripeToken(token);
  }

  const navigate = useNavigate()

  useEffect(() => {

    cart?.products.map((product) => {
      prod.push({
        productId: product._id,
        quantity: product.qty,
      });
    });

    setOrder({
        userId: user?.currentUser._id,
        products: prod,
        amount: cart?.total,
    })

    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: ((cart?.total)+25) * 100,
        });
        addOrder(order,dispatch)
        
        // const orderRes = await userRequest.post("/orders", {
        //   userId: user?.currentUser._id,
        //   products: prod,
        //   amount: cart?.total,
        // });
        navigate("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart?.total, navigate]);

    return (
      <div className="cart-div">
        <h1 className="cart-heading">Cart</h1>
        <NavLink to="/"><button className="cont-shopping">Continue Shopping</button></NavLink>
        <div className="cart-item-sum">

          <div className="cart-item">
          {cart.products.map((product)=>(
            <Paper elevation={8} className="item-1">
                <img src={product.img}></img>
                <div className="item-title">
                  <h6>{product.title}</h6>
                  <br/>
                  <p>{product.desc}</p>
                </div>

                <div>
                  <p>Price:</p> <p>${product.price}</p>
                </div>
                <div>
                  <p>Qty:</p> <p>{product.qty}</p>
                </div>

                <div>
                  <p>Total:</p> <p>${product.price*product.qty}</p>
                </div>
                <div className="cart-delete-div">
                  <DeleteOutline
                    className="cart-delete"
                    onClick={()=>dispatch(deleteProduct(product._id))}
                  />
                </div>
            </Paper>))}
          </div>

          <div className="cart-sum">
            <h4 style={{fontWeight:"800"}}>Cart Summary</h4>
            <br/>
            
            <div>
              <h6 style={{fontWeight:"700"}}>Sub-Total:</h6>
              <p style={{marginLeft:"230px", fontWeight:"500"}}>{cart.total}</p>
            </div>
            
            <div>
              <h6 style={{fontWeight:"700"}}>Shipping Cost:</h6>
              <p style={{marginLeft:"200px", fontWeight:"500"}}>$25</p>
            </div>
            
            <div>
              <h6 style={{fontWeight:"700"}}>Discount:</h6>
              <p style={{marginLeft:"238px", fontWeight:"500"}}>$0</p>
            </div>
            <br/>
            <div>
              <h4 style={{fontWeight:700}}>Total:</h4>
              <h4 style={{marginLeft:"10px", fontWeight:700}}>${cart.total+25}</h4>
            </div>

            <br/>
            <StripeCheckout
              name="Shoe Store"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart?.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <button className="checkout-btn">Checkout</button>
            </StripeCheckout>
          </div>

        </div>
      </div>
    );
  }
  
  export default CartHome;