import React, { useState } from "react";
import "../style/navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
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
  const [menu, setMenu] = useState(true);
  localStorage.setItem("searchValue", data);

  const handleClick = () => {
    window.location.reload();
  };
  // if (window.screen.width > 1300) {
  //   navDisp.style.display = "block";
  // }

  const handleClick1 = () => {
    const navDisp = document.getElementsByClassName("nav_visible")[0];
    console.log(navDisp);
    setMenu(!menu);
    let value = menu === true ? "block" : "none";
    navDisp.style.display = value;
  };
  return (
    <div className="navbar">
      <div className="menu">
        <MenuIcon className="menu_bar" onClick={handleClick1} />
      </div>
      <div className="nav_visible">
        <div className="nav_options">
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
              <button
                type="submit"
                className="searchButton1"
                onClick={handleClick}
              >
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
      </div>
    </div>
  );
}

export default Navbar;
