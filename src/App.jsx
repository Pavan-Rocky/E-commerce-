import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/shop"; 
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}  />
          <Route path="/mens" element={<ShopCategory Category="mens"/>}  />
          <Route path="/womens" element={<ShopCategory Category="womens" />}  />
          <Route path="/kids" element={<ShopCategory Category="kids" />}  />
          <Route path="/product" element={<Product />}  />
          <Route path=":productId" element={<Product />}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
