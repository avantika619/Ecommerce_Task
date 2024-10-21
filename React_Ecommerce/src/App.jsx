import React from "react";
import Navbar from "./components/navbar/Navbar";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import ShopCategory from "./pages/ShopCategory";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import menBanner from "./components/assets/banner_mens.png"
import womenBanner from './components/assets/banner_women.png'
import kidsBanner from  './components/assets/banner_kids.png'
import { Provider } from 'react-redux';
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}> {/* Wrap with Redux Provider */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/Gadgets" element={<ShopCategory banner={menBanner} category="Gadgets" />} />
        <Route path="/Accessories" element={<ShopCategory banner={womenBanner} category="Accessories" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </Provider>
  );
};

export default App;
