import React from "react";
import "../style/fetch.css";
import SearchResult from "./SearchResult";
import DATA from "../items.json";
import Navbar from "./Navbar";
import { Button } from "@material-ui/core";

function FetchData() {
  let data = JSON.parse(localStorage.getItem("search"));
  let search = localStorage.getItem("searchValue").toLowerCase();

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <div>
      <Navbar check />
      <div className="search_heading">
        <h1>Results</h1>
        <p>
          {data.start} to {data.end} . {data.nop} guests
          <Button
            variant="outlined"
            color="secondary"
            className="all_button"
            onClick={handleClick}
          >
            Show All
          </Button>
        </p>
      </div>
      {DATA.filter((val) => {
        if (search === "") {
          return val;
        } else if (
          val.location.toLowerCase().includes(search) ||
          val.description.toLowerCase().includes(search) ||
          val.title.toLowerCase().includes(search) ||
          String(val.star).toLowerCase().includes(search)
        ) {
          return val;
        } else {
          return 0;
        }
      }).map((val, index) => (
        <SearchResult
          key={index}
          img={val.img}
          location={val.location}
          title={val.title}
          description={val.description}
          star={val.star}
          price={val.price}
          total={val.total}
        />
      ))}
    </div>
  );
}

export default FetchData;
