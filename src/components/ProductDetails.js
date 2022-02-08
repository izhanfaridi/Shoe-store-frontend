import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

function ProductDetails() {
  const [shoes, setShoes] = useState({});
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      try {
        //use axios
        const fetchedProd = await axios.get(
          `http://localhost:5000/api/products/find/${id}`
        );
        setShoes(fetchedProd.data);
        window.scroll(0, 0);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);


  const decreaseQty = () => {
    if (qty === 1) {
      //Do Nothing
    } else {
      setQty(qty - 1);
    }
  };

  const increaseQty = () => {
    setQty(qty + 1);
  };

  
  const { title, img, desc, price } = shoes;

  const handleClick = () => {
    dispatch(addProduct({ ...shoes, qty, size }));
  };

  return (
    <>
      <div className="detailsDiv">
        <div className="detailsImg-div">
          <img className="detailsImg" src={img} alt={title}></img>
        </div>
        <div className="detailsDesc-div">
          <h2 className="detailsTitle">{title}</h2>
          <p className="detailsDesc">{desc}</p>
          <p className="detailsPrice">${price}</p>
          <h5>Select Size:</h5>
          <select
            className="sizeSelect"
            onChange={(e) => setSize(e.target.value)}
          >
            {shoes.size?.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <h5 style={{ marginTop: "20px" }}>Select Quantity:</h5>
          <table>
            <tr className="qtySelect">
              <td>
                <button className="qty-btn" onClick={decreaseQty}>
                  -
                </button>
              </td>
              <td className="qty">{qty}</td>
              <td>
                <button className="qty-btn" onClick={increaseQty}>
                  +
                </button>
              </td>
            </tr>
          </table>
          <button className="orderButton" onClick={handleClick}>
            Add To Cart!
          </button>
        </div>

        
      </div>
    </>
  );
}

export default ProductDetails;
