import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.jpg"
import cart_img from "../../assets/cart.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [menu,setMenu]=useState("home")
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="error" height="50px" />
        <p>Shopify</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:"none",color:'#626262'}} to="/">Home</Link>{menu==="home" ? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none",color:'#626262'}} to="/mens">Men</Link>{menu==="mens" ? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:"none",color:'#626262'}} to="/womens">Women</Link>{menu==="womens" ? <hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none",color:'#626262'}} to="/kids">Kids</Link>{menu==="kids" ? <hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_img} alt="" height="40px"/>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar