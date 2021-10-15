import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import StripeCheckout from "react-stripe-checkout";
import { Spinner } from "reactstrap";
import { PAYMENT_LOADING } from "../actions/action.type";
import { API } from "../helpers/backend.config";

require("dotenv").config();

const Payment = ({
  name,
  description,
  amount,
  seatState,
  loadingState,
  currentProduct,
  currentUser,
}) => {
  const CURRENCY = "INR";
  const dispatch = useDispatch();

  const handelClick = () => {
    dispatch({
      type: PAYMENT_LOADING,
      payload: true,
    });
  };

  const fromRupeesToPise = (amount) => amount * 100;

  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [seatsToBook, setSeatsToBook] = useState("");
  const [seatDate, setSeatDate] = useState("");
  const [seatTime, setSeatTime] = useState("");

  const onToken = (amount, description) => (token) =>
    axios({
      method: "POST",

      url: `${API}/payment`,
      data: {
        description: description,
        stripeToken: token.id,
        amount: fromRupeesToPise(amount),
        seats: seatsToBook,
        userId: currentUser.userId,
        productId: currentProduct.productId,
        seatDate,
        seatTime,
      },
    })
      .then((res) => {
        console.log(res.data);
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setFailed(true);
      });

  useEffect(() => {
    dispatch({
      type: PAYMENT_LOADING,
      payload: false,
    });
    const tempSeats = [];
    setSeatTime(seatState.selectedSeats[0].time);
    setSeatDate(seatState.selectedSeats[0].date);
    seatState.selectedSeats.map((seats) => {
      tempSeats.push(seats.id);
    });
    setSeatsToBook(tempSeats);
  }, []);

  return (
    <>
      {console.log(currentProduct)}
      {console.log(currentUser)}
      <StripeCheckout
        name={name}
        description={description}
        amount={fromRupeesToPise(amount)}
        token={onToken(amount, description)}
        currency={CURRENCY}
        stripeKey="KEY_GIVEN_BY_STRIPE"
      >
        <button
          className="button"
          style={{ borderRadius: "10px" }}
          onClick={handelClick}
        >
          {loadingState.loading ? (
            <div style={{ width: "100px", height: "30px" }}>
              <Spinner> </Spinner>
            </div>
          ) : (
            "Make Payment"
          )}
        </button>
      </StripeCheckout>

      {success && <Redirect to="/success" />}
      {failed && <Redirect to="/failed" />}
    </>
  );
};

const mapStateToProps = (state) => ({
  seatState: state.seats,
  loadingState: state.paymentLoading,
  currentProduct: state.product.productById[0],
  currentUser: state.user.user.user,
});
export default connect(mapStateToProps)(Payment);
