import React from "react";
import { useHistory } from "react-router-dom";

//css
import "../css/ProductCard.component.css";

const Porduct = ({ id, name = "", price, image }) => {
  const history = useHistory();
  const handelClick = () => {
    history.push(`/product/${id}`);
  };

  const defaultImage =
    "https://firebasestorage.googleapis.com/v0/b/booking-80be1.appspot.com/o/products%2Fdefault-no-image-1.png?alt=media&token=ef03430b-9b3f-49de-8672-ff7a15943d0c";

  return (
    <div className="m-2 product-card-base">
      <div>
        <img src={image ? image : defaultImage} className="image" />
      </div>
      <diV>
        <h4 className="my-2">
          {name.length < 14 ? name : `${name.slice(0, 15)}...`}
        </h4>
        <p className="my-2 ">Price Per Seat: {price}</p>

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
