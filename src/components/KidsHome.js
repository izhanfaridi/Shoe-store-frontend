import React from 'react'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './style.css'

function KidsHome() {
  const shoes = {
    "air-max-plus":{
      title:"Nike Air Max Plus",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/35b0b4a1-0002-447e-a790-1cbeff433da5/air-max-plus-big-kids-shoe-4jCb46.png",
      desc:"Big Kids' Shoes",
      price:"$145"
    },

    "flex-runner":{
      title:"Nike Flex Runner",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9fed5cd8-e24a-4f1a-825c-ace940e7b63a/flex-runner-big-kids-road-running-shoes-QQsbLl.png",
      desc:"Big Kids' Road Running Shoes",
      price:"$50"
    },

    "air-vapormax-2021-fk":{
      title:"Nike Air VaporMax 2021 FK",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/45782daf-46fc-4536-9e6d-ea77bc5d4650/air-vapormax-2021-fk-big-kids-shoes-5mzx3Z.png",
      desc:"Big Kids' Shoes",
      price:"$180"
    },

    "air-force-1-emb":{
      title:"Nike Air Force 1 EMB",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5aa4da4c-3c4b-4e01-9dec-4308de69c04f/air-force-1-emb-big-kids-shoes-xhwPDk.png",
      desc:"Big Kids' Shoes",
      price:"$90"
    },

    "air-zoom-crossover":{
      title:"Nike Air Zoom Crossover",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8cc60578-ccae-48d6-b47a-78d08f6262e4/air-zoom-crossover-big-kids-basketball-shoes-fRd149.png",
      desc:"Big Kids' Basketball Shoes",
      price:"$75"
    },

    "air-force-1":{
      title:"Nike Air Force 1",
      img:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/273c3c5c-8512-4e59-817d-0b8ebc6187ff/air-force-1-big-kids-shoes-CsDF5n.png",
      desc:"Big Kids' Shoes",
      price:"$80"
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
          <h1 className="productTitle">Browse Through Our Unlimited Collection Of Top Quality Kids Shoes</h1> 
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
  
  export default KidsHome;

