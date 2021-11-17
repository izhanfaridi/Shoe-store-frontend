import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '@mui/material/Container';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './style.css'



function Home() {

    return (
      <div>
        <div className="carousel-div">
      <Carousel variant="dark">
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1237,c_limit/4103c535-00ef-43ce-89bf-75e52693428d/men-s-shoes-clothing-accessories.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Browse Men Shoes</h1>
            <br></br>
            <Link to="men"><button className="carousel-btn">Browse</button></Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1237,c_limit/569cf10c-e9b5-4c4c-a533-c830af6f5c44/nike-just-do-it.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>We Have The Latest Kids Shoes Available</h1>
            <br></br>
            <Link to ="kids"><button class="carousel-btn">Browse</button></Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>


      <Container className="container-home" maxWidth="lg">
        <h2>The Winter Sale Is About To Drop!</h2>
        <p>Upto 60% off on all items. It would be Foolish to miss out. Act Fast, because these deals will run out like the speed of light.</p>
        <div>Coming Soon</div>
      </Container>

 
    
      </div>
    );
  }
  
  export default Home;
