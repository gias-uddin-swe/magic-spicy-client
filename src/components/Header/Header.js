import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
  const [user, setUser] = useContext(UserContext);

  const profileName = {
    color: "red",
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div>
      <div className="menubar container col-md-4  col-lg-12">
        <nav className="navbar container">
          <div className="nav-logo col-md-6 col-sm-12">
            <h1 className="title">Spicy Magic</h1>
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
          <Link className="nav-item" to="/admin" style={profileName}>
            {user.name}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
