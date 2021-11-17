import React from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './style.css'

function Footer() {
    return (
        <div>
        <MDBFooter color="grey darken-4" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <br></br>
              <h5 className="title">About Us</h5>
              <p>
                Our Mission Is To Provide You With The Luxury Of Top Quality Shoes While Sitting At Home
              </p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title" style={{marginLeft:"30px"}}>Follow Us</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Instagram</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Facebook</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Twitter</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">YouTube</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright, ShoeStore &copy;
          </MDBContainer>
        </div>
      </MDBFooter>
      </div>
    );
  }
  
  export default Footer;
