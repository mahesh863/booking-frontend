import React from "react";

//Css
import "../css/SearchResultCard.components.css";

import { useHistory } from "react-router";

const SearchResultCard = ({ image, id, name }) => {
  const defaultImage =
    "https://firebasestorage.googleapis.com/v0/b/booking-80be1.appspot.com/o/products%2Fdefault-no-image-1.png?alt=media&token=ef03430b-9b3f-49de-8672-ff7a15943d0c";

  const history = useHistory();
  const handelViewDetails = () => {
    history.push(`product/${id}`);
  };
  return (
    <div className="base">
      <span>
        {" "}
        <img src={image ? image : defaultImage} className="search-prod-image" />
      </span>
      <span>
        {" "}
        <p className="search-header">{name}</p>{" "}
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
