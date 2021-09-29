import React from "react";

//Css
import "../css/Orders.Page.css";

//Components
import Orders from "../components/Orders";

const MyOrders = () => {
  return (
    <div className="container">
      <div className="personal-info">
        <h2 className="text-center">YOUR INFO</h2>
        <div className="my-3">
          <span className="info">NAME: </span>
          <span>Mahesh</span>
        </div>
        <span className="info">ADDRESS:</span> <span>Bangalore, India</span>
        <div className="my-3">
          <span className="info">EMAIL ID: </span>
          <span>a@mahesh.com</span>
        </div>
        <div className="my-3">
          <span className="info">PHONE NUMBERS: </span>
          <span>8888888888</span>
        </div>
      </div>

      <div className="my-3">
        <h2 className="text-center">ORDERS</h2>
        <div>
          <Orders />
          <Orders />
          <Orders />
          <Orders />
          <Orders />
          <Orders />
          <Orders />
          <Orders />
          <Orders />
          <Orders />
          <Orders />
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
