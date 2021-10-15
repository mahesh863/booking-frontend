import React, { useState, useEffect } from "react";
import "../css/seats.components.css";
import { MdEventSeat } from "react-icons/md";

import { selectSeats, removeSeats } from "../actions/seats";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import userEvent from "@testing-library/user-event";

const Seats = ({
  id,
  number,
  booked,
  price,
  date,
  time,
  seatState,
  selectSeats,
  removeSeats,
}) => {
  const [selected, setSelected] = useState(false);
  const handelAdd = () => {
    selectSeats({ id, number, price, date, time });
    setSelected(true);
  };

  const handelRemove = () => {
    removeSeats(id);
    setSelected(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",
      }}
      onClick={
        booked
          ? () => {
              toast.warn("Seat Is Already Booked!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          : !selected
          ? () => handelAdd()
          : () => handelRemove()
      }
    >
      <div className={booked ? "booked" : selected ? "selected" : "empty"}>
        <MdEventSeat className="seat-icon" />
        <span>Rs. {price}</span>
      </div>
      {console.log(seatState)}
      <span>{number}</span>
    </div>
  );
};

const mapDispatchToProps = {
  selectSeats: (data) => selectSeats(data),
  removeSeats: (data) => removeSeats(data),
};

const mapStateToProps = (state) => ({
  seatState: state.seats,
});

export default connect(mapStateToProps, mapDispatchToProps)(Seats);
