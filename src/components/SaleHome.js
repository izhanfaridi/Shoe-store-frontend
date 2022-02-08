import React from 'react'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './style.css'

function SaleHome() {
  const shoes = {
    "air-jordan-1-mid":{
      title:"Air Jordan 1 Mid",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/61a4f2d8-0a65-4b34-8113-3163aea9198b/air-jordan-1-mid-shoes-Z4WQkS.png",
      desc:"Basketball Shoes",
      price:"$120",
      discountPrice:"$100"
    },

    "air-jordan-xxxvi-first-light":{
      title:"Air Jordan XXXVI First Light",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c0442a34-0b88-46db-b12c-8865b028dc1f/air-jordan-xxxvi-first-light-basketball-shoes-39Znr7.png",
      desc:"Basketball Shoes",
      price:"$185",
      discountPrice:"$150"
    },

    "air-force-1-pixel":{
      title:"Nike Air Force 1 Pixel",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ee9a5d47-accb-45a4-806f-82c1e9cb364d/air-force-1-pixel-womens-shoes-VnWf3q.png",
      desc:"Women's Shoes",
      price:"$110",
      discountPrice:"$95"
    },

    "nike-react-infinity-run-flyknit-2":{
      title:"Nike React Infinity Run Flyknit 2",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f6ed61f2-e551-435c-a128-3a1568ebc114/react-infinity-run-flyknit-2-womens-road-running-shoes-rfh6Z8.png",
      desc:"Women's Road Running Shoes",
      price:"$160",
      discountPrice:"$145"
    },

     "air-zoom-crossover":{
      title:"Nike Air Zoom Crossover",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8cc60578-ccae-48d6-b47a-78d08f6262e4/air-zoom-crossover-big-kids-basketball-shoes-fRd149.png",
      desc:"Big Kids' Basketball Shoes",
      price:"$75",
      discountPrice:"$68"
    },

    "air-force-1":{
      title:"Nike Air Force 1",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/273c3c5c-8512-4e59-817d-0b8ebc6187ff/air-force-1-big-kids-shoes-CsDF5n.png",
      desc:"Big Kids' Shoes",
      price:"$80",
      discountPrice:"$74"
    }
  }

  var cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '23vw'
}

    return (
      <div className="productDisplay">
          <h1 className="productTitle">Act Fast Or These exclusive discounts might run out fast</h1> 
          <div className="cardContainer">
            {Object.entries(shoes).map(([productId,{title,img,desc,price,discountPrice}]) => 
              (
                
                <Link className="productLink" to={productId} key={productId}>
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
                    <strike>{price}</strike> &nbsp; <b>{discountPrice}</b>
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
  
  export default SaleHome;

