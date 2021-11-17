import React from 'react'
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const shoesMen = {
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


  const shoesWomen = {
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

  const shoesKids = {
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

  const shoesSale = {
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


    const { productId } = useParams();
    let product;
    Object.keys(shoesMen).map((productID,index)=>{
      if(productId === productID){
        product = shoesMen[productId]
      }
    })

    Object.keys(shoesWomen).map((productID,index)=>{
      if(productId === productID){
        product = shoesWomen[productId]
      }
    })

    Object.keys(shoesKids).map((productID,index)=>{
      if(productId === productID){
        product = shoesKids[productId]
      }
    })


    Object.keys(shoesSale).map((productID,index)=>{
      if(productId === productID){
        product = shoesSale[productId]
      }
    })
    
    //const product = shoesMen[productId];
    const {title, img, desc, price} = product;
    return (
      <div className="detailsDiv">
          <div className="detailsImg-div">
            <img className="detailsImg" src={img} alt={title}></img>
          </div>
          <div className="detailsDesc-div">
            <h2 className="detailsTitle">{title}</h2>
            <p className="detailsDesc">{desc}</p>
            <p className="detailsPrice">{price}</p>
            <h5>Select Size:</h5>
            <table>
              <tr className="sizeSelect">
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
              </tr>
            </table>
            <h5 style={{marginTop:"20px"}}>Select Quantity:</h5>
            <table>
              <tr className="qtySelect">
                <td>-</td>
                <td className="qty">0</td>
                <td>+</td>
              </tr>
            </table>
            <button className="orderButton">Order Now!</button>
          </div>
      </div>
    );
  }
  
  export default ProductDetails;
