import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="menubar container col-md-4  col-lg-12">
        <nav className="navbar container">
          <div className="nav-logo col-md-6 col-sm-12">
            <h1>Spicy Magic</h1>
          </div>
          <Link className="nav-item" to="/home">
            Home
          </Link>
          <Link className="nav-item" to="/orders">
            Orders
          </Link>
          <Link className="nav-item" to="/admin">
            Admin
          </Link>
          <Link className="nav-item" to="/login">
            Login
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
