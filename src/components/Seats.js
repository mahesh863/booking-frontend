import React from "react";
import "../css/seats.components.css";
import { MdEventSeat } from "react-icons/md";

const Seats = ({ id, number, booked, price }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <div className={booked ? "booked" : "empty"}>
        <MdEventSeat className="seat-icon" />
        <span>Rs. {price}</span>
      </div>
      <span>{number}</span>
    </div>
  );
};

export default Seats;
