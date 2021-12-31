import React, { useState } from "react";
import "../style/banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

function Banner() {
  const [searchButton, setSearchButton] = useState("Search Dates");
  const [check, setCheck] = useState(false);
  const history = useNavigate();

  let handleClick = () => {
    setSearchButton(searchButton === "Search Dates" ? "hide" : "Search Dates");
    setCheck(!check);
  };

  let redirectClick = () => {
    let start = new Date();
    let end = new Date();
    const data = {
      start: `${start.getDate()}/${start.getMonth()}/${start.getFullYear()}`,
      end: `${String(
        Number(end.getDate()) + 1
      )}/${end.getMonth()}/${end.getFullYear()}`,
      nop: 2,
    };
    let stringData = JSON.stringify(data);
    localStorage.setItem("search", stringData);
    history("/fetch");
  };

  return (
    <div className="banner">
      <div className="banner_dates">
        <Button
          variant="outlined"
          className="searchButton"
          onClick={handleClick}
        >
          {" "}
          {searchButton}{" "}
        </Button>
        {check && <Search />}
      </div>
      <div className="content_banner">
        <h2 className="banner_heading">Get out and stretch your imagination</h2>
        <h5 className="banner_description_top">
          Man is a traveler by nature. He does not like to keep static at a
          place for a long time. So, people like to visit new places whenever
          they find time and opportunity. People travel for different purposes.
          Some travel for getting an education and some travel for pleasure.
        </h5>
        <h4 className="banner_description_down">
          So, plan a different kind of gateway to explore the gems around you !
        </h4>
        <Button variant="outlined" size="medium" onClick={redirectClick}>
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
