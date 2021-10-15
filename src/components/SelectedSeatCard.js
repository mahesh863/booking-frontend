import React from "react";

//Css
import "../css/SelectedSeatCard.components.css";

const SelectedSeatCard = ({ seatNo, price, date, time }) => {
  return (
    <div className="selected-seat-card-base">
      <p> Seat No: {seatNo}</p>
      <p> Rs. {price}</p>
      <p>{date} </p>
      <p>{time}</p>
    </div>
  );
};

export default SelectedSeatCard;
