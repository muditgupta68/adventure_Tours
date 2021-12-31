import React from "react";
import PropTypes from "prop-types";
import "../style/card.css";

function Card({ src, title, description, price }) {
  return (
    <div className="card">
      <img src={src} alt="card-mirage" />
      <div className="card_data">
        <h2>{title}</h2>
        <h4>{description}</h4>
        {price && <h2 className="price_heading">{price}</h2>}
      </div>
    </div>
  );
}

Card.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Card;
