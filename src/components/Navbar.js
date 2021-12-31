import React, { useState } from "react";
import "../style/navbar.css";
import {
  Search,
  AccountCircle,
  Language,
  ExpandMore,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import logo from "../style/images/logoTours.png";

function Navbar({ check }) {
  const [data, setData] = useState("");
  localStorage.setItem("searchValue", data);

  const handleClick = () => {
    window.location.reload();
  };
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img className="company_logo" src={logo} alt="bnb logo" />
        </Link>
      </div>
      {check && (
        <div className="nav_center">
          <input
            className="searchBox"
            type="text"
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <button type="submit" className="searchButton1" onClick={handleClick}>
            <Search color="secondary" />
          </button>
        </div>
      )}
      <div className="nav_right">
        <p>Travel with us</p>
        <Language />
        <ExpandMore />
        <AccountCircle color="disabled" fontSize="large" />
      </div>
    </div>
  );
}

export default Navbar;
