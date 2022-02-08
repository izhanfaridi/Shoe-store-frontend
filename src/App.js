import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import ProductHome from "./components/ProductHome";
import Men from "./components/Men";
import Women from "./components/Women";
import MenHome from "./components/MenHome";
import WomenHome from "./components/WomenHome";
import Kids from "./components/Kids";
import KidsHome from "./components/KidsHome";
import Sale from "./components/Sale";
import SaleHome from "./components/SaleHome";
import Footer from './components/Footer'
import Login from "./components/Login";
import Register from "./components/Register";
import CartHome from "./components/CartHome";
import Success from "./components/Success";
import { useSelector } from "react-redux";

function NotFound() {
  return <div>Not Found</div>;
}



function App() {
  const user = useSelector((state)=>state.user.currentUser);
  return (
    <div>
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="success" element={<Success />}></Route>
        <Route path="products" element={<Products />}>
          <Route path="/products/" element={<ProductHome />}></Route>
          <Route path=":productId" element={<ProductDetails />}></Route>
        </Route>
        <Route path="men" element={<Men />}>
          <Route path="/men/" element={<MenHome />}></Route>
          <Route path=":productId" element={<ProductDetails />}></Route>
        </Route>
        <Route path="women" element={<Women />}>
          <Route path="/women/" element={<WomenHome />}></Route>
          <Route path=":productId" element={<ProductDetails />}></Route>
        </Route>
        <Route path="kids" element={<Kids />}>
          <Route path="/kids/" element={<KidsHome />}></Route>
          <Route path=":productId" element={<ProductDetails />}></Route>
        </Route>
        <Route path="sale" element={<Sale />}>
          <Route path="/sale/" element={<SaleHome />}></Route>
          <Route path=":productId" element={<ProductDetails />}></Route>
        </Route>
        <Route path="cart" element={<CartHome />}></Route>
        <Route path="login" element={user ? <Navigate replace to="/" /> : <Login /> }></Route>
        <Route path="/login/register" element={user ? <Navigate replace to="/" /> : <Register /> } ></Route>

        

        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
