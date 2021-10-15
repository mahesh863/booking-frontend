import React from "react";

//Css
import "../css/Orders.Page.css";

//Components
import Orders from "../components/Orders";

import { connect } from "react-redux";

const MyOrders = ({ userState }) => {
  return (
    <div className="container">
      {console.log(userState)}
      <div className="personal-info">
        <h2 className="text-center">YOUR INFO</h2>
        <div className="my-3">
          <span className="info">NAME: </span>
          <span> {userState.user.user.name}</span>
        </div>
        <div className="my-3">
          <span className="info">EMAIL ID: </span>
          <span> {userState.user.user.email}</span>
        </div>
      </div>

      {/* <div className="my-3">
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
        </div> */}
      {/* </div> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userState: state.user,
});

export default connect(mapStateToProps)(MyOrders);
