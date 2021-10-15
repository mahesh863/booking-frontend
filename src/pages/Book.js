import React, { useEffect, useState } from "react";

import SelectedSeatCard from "../components/SelectedSeatCard";

import { connect, useDispatch } from "react-redux";

//Css
import "../css/Book.page.css";
import Payment from "./Payment";

const Book = ({ seatState, history }) => {
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (seatState.selectedSeats.length == 0) {
      history.push("/");
      var totalAmount = 0;
    } else {
      var totalAmount = 0;
      seatState.selectedSeats.map((seat) => {
        totalAmount = totalAmount + seat.price;
      });
      var tax = totalAmount * 0.18;
      var total = totalAmount + tax;
      setTotal(parseFloat(totalAmount).toFixed(2));
      setTax(parseFloat(tax).toFixed(2));
      setOrderTotal(parseFloat(total).toFixed(2));
    }
  }, []);

  return (
    <div className="container">
      <div>
        {seatState.selectedSeats.map((seat) => (
          <SelectedSeatCard
            seatNo={seat.number}
            price={seat.price}
            date={seat.date}
            time={seat.time}
          />
        ))}
      </div>

      <div className="my-3 order-total-section ">
        <p className="float-right">
          Order Total:
          <span style={{ marginLeft: "20px" }}> Rs. {total}</span>
        </p>
        <p className="float-right">
          GST 18%:<span style={{ marginLeft: "20px" }}> Rs. {tax}</span>
        </p>
        <p className="float-right">
          Order Total:
          <span style={{ marginLeft: "20px" }}> Rs. {orderTotal}</span>
        </p>

        <Payment
          name={"Booked!"}
          description={"Ticket Booking!"}
          amount={orderTotal}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  seatState: state.seats,
});
export default connect(mapStateToProps)(Book);
