import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import "../style/searchResult.css";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="searchResult">
      <div className="resultCard">
        <img src={img} alt="result" />
        <div className="resultCard_content">
          <div className="location">
            <p>{location}</p>
            <FavoriteBorderIcon className="love_click" />
          </div>
          <h2 id="title">{title}</h2>
          <p id="desc">{description}</p>
          <div className="rating_price">
            <div className="star">
              <StarIcon className="starIcon" />
              <p>{star}</p>
            </div>
            <div className="price">
              <h1>{price}</h1>
              <p>{total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
