import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logoContainer">
        <img src={logo} alt="logo" className="logoImg" />
      </div>
      <div>
        <p className="title">Kutay Commerce</p>
      </div>
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart">
          <ShoppingCart size={32}> </ShoppingCart>
        </Link>
      </div>
    </div>
  );
};
