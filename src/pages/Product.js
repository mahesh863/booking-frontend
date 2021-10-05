import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Form, FormGroup, Input } from "reactstrap";

import Seats from "../components/Seats";

import "../css/Product.page.css";

//Redux
import { getAllSeats } from "../actions/seats";
import { getProductById } from "../actions/products";
import { connect, useDispatch } from "react-redux";
import { GET_SEATS } from "../actions/action.type";

const Product = ({ getAllSeats, seatState, productState, getProductById }) => {
  const { id } = useParams();
  const [date, setDate] = useState("");
  const [currentProduct, setCurrentProduct] = useState("");
  const dispatch = useDispatch();

  const handelDateSearch = () => {
    console.log(date);
    getAllSeats({ id, date });
  };
  useEffect(() => {
    getProductById(id);

    if (productState.productById) {
      setCurrentProduct(productState.productById[0]);
    }

    dispatch({
      type: GET_SEATS,
      payload: "",
    });
  }, [date]);
  return (
    <div className="container">
      <div className="prod-info-base ">
        <img
          src="https://source.unsplash.com/random"
          className="product-image"
        />
        {console.log(seatState)}
        <span>
          <p className="product-name">{currentProduct.productName}</p>
          <p className="product-title">
            Cost for 2: Rs {currentProduct.pricePerSeat * 2} approx
          </p>
        </span>

        <p className="prod-address">
          Address : {currentProduct.productAddress}
        </p>
      </div>

      <div className="border" />
      <div>
        <div
          style={{
            display: "flex",
            marginTop: "30px",
            justifyContent: "center",
          }}
        >
          <Form>
            <FormGroup>
              <span>
                <Input
                  type="date"
                  style={{ width: "200px", height: "49px" }}
                  onChange={(e) => setDate(e.target.value)}
                />
              </span>
            </FormGroup>
          </Form>

          <p
            onClick={handelDateSearch}
            className="button"
            style={{ borderRadius: "0px 10px 10px 0px " }}
          >
            Search
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            {seatState.seats ? (
              <div className="seats-div">
                {seatState.seats.length === 0 ? (
                  <p className="text-center" style={{ fontWeight: "bold" }}>
                    Booking For The Day Has Not Yet Started! Please Try Again
                    Later.
                  </p>
                ) : (
                  seatState.seats.map((seat) => (
                    <Seats
                      id={seat.seatId}
                      booked={seat.booked}
                      number={seat.seatNumber}
                      price={seat.seatPrice}
                    />
                  ))
                )}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {seatState.seats && seatState.seats.length !== 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span
            className="button"
            style={{ borderRadius: "10px", padding: " 15px 50px " }}
          >
            {" "}
            Book{" "}
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const mapDispatchToProps = {
  getAllSeats: (data) => getAllSeats(data),
  getProductById: (data) => getProductById(data),
};

const mapStateToProps = (state) => ({
  seatState: state.seats,
  productState: state.product,
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
