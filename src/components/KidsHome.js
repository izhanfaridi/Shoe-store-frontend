import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./style.css";
import axios from "axios";

function KidsHome() {
  const [shoesKids, setShoesKids] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        //use axios
        const fetchedProd = await axios.get(
          "http://localhost:5000/api/products?category=kids"
        );
        console.log(fetchedProd.data);
        setShoesKids(fetchedProd.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  var cardStyle = {
    display: "block",
    width: "30vw",
    transitionDuration: "0.3s",
    height: "23vw",
  };

  return (
    <div className="productDisplay">
      <h1 className="productTitle">
        Browse Through Our Unlimited Collection Of Top Quality Kids Shoes
      </h1>
      <div className="cardContainer">
        {shoesKids.length > 0 &&
          shoesKids.map((data) => (
            <>
              <NavLink className="productLink" to={data._id} key={data._id}>
                <Card
                  className="card"
                  style={cardStyle}
                  sx={{ maxWidth: 345 }}
                  key={data._id}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={data.img}
                    alt={data.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      fontWeight="700"
                    >
                      {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.desc}
                      <br></br>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      fontWeight="500"
                    >
                      ${data.price}
                    </Typography>
                  </CardContent>
                </Card>
              </NavLink>
            </>
          ))}
      </div>
    </div>
  );
}

export default KidsHome;
