import React from 'react'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './style.css'

function WomenHome() {
  const shoes = {
    "air-zoom-pegasus-38":{
      title:"Nike Air Zoom Pegasus 38",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f0ab450c-fc92-4b87-ab51-7aac3bce33fc/air-zoom-pegasus-38-womens-road-running-shoes-gg8GBK.png",
      desc:"Women's Road Running Shoes",
      price:"$120"
    },

    "air-force-1-07-lx":{
      title:"Nike Air Force 1 '07 LX",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/31365cf5-5b43-4fc6-8d19-a1591ba5b80a/air-force-1-07-lx-womens-shoes-916BpX.png",
      desc:"Women's Shoes",
      price:"$110"
    },

    "air-force-1-pixel":{
      title:"Nike Air Force 1 Pixel",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ee9a5d47-accb-45a4-806f-82c1e9cb364d/air-force-1-pixel-womens-shoes-VnWf3q.png",
      desc:"Women's Shoes",
      price:"$110"
    },

    "nike-react-infinity-run-flyknit-2":{
      title:"Nike React Infinity Run Flyknit 2",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f6ed61f2-e551-435c-a128-3a1568ebc114/react-infinity-run-flyknit-2-womens-road-running-shoes-rfh6Z8.png",
      desc:"Women's Road Running Shoes",
      price:"$160"
    },

    "free-metcon-4":{
      title:"Nike Free Metcon 4",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/af58860e-1992-4ba2-a4a7-f604ee863ecc/free-metcon-4-womens-training-shoes-pxHVt9.png",
      desc:"Women's Training Shoes",
      price:"$120"
    },

    "air-max-2021":{
      title:"Nike Air Max 2021",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/59873d2e-3816-402a-a666-bf3fa58ff41a/air-max-2021-womens-shoes-CkfHnZ.png",
      desc:"Women's Shoes",
      price:"$160"
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
          <h1 className="productTitle">Browse Through Our Unlimited Collection Of Top Quality Women Shoes</h1> 
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
  
  export default WomenHome;

