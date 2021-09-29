import React from "react";

//Css
import "../css/Orders.component.css";

const Orders = () => {
  return (
    <div className="order-base">
      <span>
        <img src="https://source.unsplash.com/random" className="prod-image" />
      </span>
      <span className=" prod-name"> Product Name</span>
      <span className="booking-date"> Date: 12/09/2021 </span>
      <span className="booking-date"> Time: 23:00 </span>
    </div>
  );
};

export default Orders;
