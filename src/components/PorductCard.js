import React from "react";

//css
import "../css/ProductCard.component.css";

const Porduct = () => {
  return (
    <div className="m-2 product-card-base">
      <div>
        <img src="https://source.unsplash.com/random" className="image" />
      </div>
      <diV>
        <h4 className="my-2">PVR Cinemas</h4>
        <p className="my-2 ">Category: Movie</p>
        <p className="my-2 ">Cost for two: 500 approx</p>
      </diV>
      <div>
        <div className="button "> Book Seats </div>
      </div>
    </div>
  );
};

export default Porduct;
