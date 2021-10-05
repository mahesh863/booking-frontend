import React from "react";
import { useHistory } from "react-router";

//Css
import "../css/SearchResultCard.components.css";

const SearchResultCard = () => {
  const handelViewDetails = () => {};
  return (
    <div className="base">
      <span>
        {" "}
        <img
          src="https://source.unsplash.com/random"
          className="search-prod-image"
        />
      </span>
      <span>
        {" "}
        <p className="search-header">Product Name</p>{" "}
        <p className="search-sub-header">Cost for 2: Rs 300 approx</p>
      </span>
      <span className="button button-edit" onClick={handelViewDetails}>
        {" "}
        View Details{" "}
      </span>
    </div>
  );
};

export default SearchResultCard;
