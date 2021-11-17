import React from 'react'
import Paper from '@mui/material/Paper';

function CartHome() {
    return (
      <div className="cart-div">
        <h1 className="cart-heading">Cart</h1>
        <button className="cont-shopping">Continue Shopping</button>
        <div className="cart-item-sum">

          <div className="cart-item">
            <Paper elevation={8} className="item-1">
                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/35b0b4a1-0002-447e-a790-1cbeff433da5/air-max-plus-big-kids-shoe-4jCb46.png"></img>
                <div className="item-title">
                  <h6>Nike Air Max Plus</h6>
                  <p>Big Kid's Shoes</p>
                </div>

                <div>
                  <p>Price:</p> <p>$145</p>
                </div>
                <div>
                  <p>Qty:</p> <p>2</p>
                </div>

                <div>
                  <p>Total:</p> <p>$290</p>
                </div>
            </Paper>
          </div>

          <div className="cart-sum">
            <h4 style={{fontWeight:"800"}}>Cart Summary</h4>
            <br/>
            
            <div>
              <h6 style={{fontWeight:"700"}}>Sub-Total:</h6>
              <p style={{marginLeft:"230px", fontWeight:"500"}}>$290</p>
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
              <h4 style={{marginLeft:"10px", fontWeight:700}}>$315</h4>
            </div>

            <br/>
            <button className="checkout-btn">Checkout</button>
          
          </div>

        </div>
      </div>
    );
  }
  
  export default CartHome;