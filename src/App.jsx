import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/shop"; 
import ShopCategory from "./Pages/ShopCategory"

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
