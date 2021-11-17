import React from 'react'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './style.css'

function ProductHome() {
  const shoes = {
    "air-jordan-1-mid":{
      title:"Air Jordan 1 Mid",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/61a4f2d8-0a65-4b34-8113-3163aea9198b/air-jordan-1-mid-shoes-Z4WQkS.png",
      desc:"Basketball Shoes",
      price:"$120"
    },

    "air-jordan-xxxvi-first-light":{
      title:"Air Jordan XXXVI First Light",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c0442a34-0b88-46db-b12c-8865b028dc1f/air-jordan-xxxvi-first-light-basketball-shoes-39Znr7.png",
      desc:"Basketball Shoes",
      price:"$185"
    },

    "nike-blazer-mid-77-vintage":{
      title:"Nike Blazer Mid '77 Vintage",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/389b709e-5102-4e55-aa5d-07099b500831/blazer-mid-77-vintage-mens-shoes-nw30B2.png",
      desc:"Men's Shoes",
      price:"$100"
    },

    "nike-react-infinity-run-flyknit-2":{
      title:"Nike React Infinity Run Flyknit 2",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4e2dd47c-cce2-4174-a394-1c6b2c3b10c5/react-infinity-run-flyknit-2-mens-road-running-shoes-DttDF2.png",
      desc:"Men's Road Running Shoes",
      price:"$160"
    },

    "kyrie-7":{
      title:"Kyrie 7",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4869808e-2e55-4af9-a712-46c0b01f190d/kyrie-7-basketball-shoes-nNMZ3b.png",
      desc:"Basketball Shoes",
      price:"$130"
    },

    "kyrie-low-4":{
      title:"Kyrie-low-4",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7e00f82e-284b-44cc-aa6a-cb890066d4a2/kyrie-low-4-basketball-shoes-zwSncK.png",
      desc:"Basketball Shoes",
      price:"$110"
    }
  }

  var cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '23vw'
}

    return (
      <div>
          <h1 className="productTitle">Welcome to Products Page!</h1> 
          <div className="cardContainer">
            {Object.entries(shoes).map(([productId,{title,img,desc,price}]) => 
              (
                
                <Link className="productLink" to={productId}>
                  <Card className="card" style={cardStyle} sx={{ maxWidth: 345 }} key={productId}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={img}
                    alt={title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" fontWeight="700">
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {desc}
                      <br></br>
                    </Typography>
                    <Typography variant="body2" color="text.primary" fontWeight="500">
                      {price}
                    </Typography>
                  </CardContent>
                </Card>
                </Link>
              )
            )}
          </div>
          
      </div>
    );
  }
  
  export default ProductHome;

