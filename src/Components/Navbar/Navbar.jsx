import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.webp";
import cart_icon from "../../assets/cart_icon.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" height="50px" />
        <p>Shopify</p>
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="Cart" height="40px" />
        <div className="cart-count">3</div>
      </div>
    </div>
  );
}

export default Navbar;
