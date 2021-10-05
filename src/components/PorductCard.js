import React from "react";
import { useHistory } from "react-router-dom";

//css
import "../css/ProductCard.component.css";

const Porduct = ({ id, name = "lsdfm", category, price }) => {
  const history = useHistory();
  const handelClick = () => {
    history.push(`/product/${id}`);
  };

  return (
    <div className="m-2 product-card-base">
      <div>
        <img src="https://source.unsplash.com/random" className="image" />
      </div>
      <diV>
        <h4 className="my-2">
          {name.length < 14 ? name : `${name.slice(0, 15)}...`}
        </h4>
        <p className="my-2 ">Category:{category}</p>
        <p className="my-2 ">Cost for two: {price * 2} approx</p>
      </diV>
      <div>
        <div className="button" onClick={handelClick}>
          {" "}
          Book Seats{" "}
        </div>
      </div>
    </div>
  );
};

export default Porduct;
