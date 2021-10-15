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
import { toast } from "react-toastify";

const Product = ({
  getAllSeats,
  seatState,
  productState,
  getProductById,
  userState,
  history,
}) => {
  const { id } = useParams();
  const [date, setDate] = useState("");
  const [currentProduct, setCurrentProduct] = useState("");
  const [todaysDate, setTodaysDate] = useState("");
  const dispatch = useDispatch();

  const handelDateSearch = () => {
    console.log(date);
    getAllSeats({ id, date });
  };

  const handelBook = () => {
    if (seatState.selectedSeats.length === 0) {
      toast.warn("Please Select Seats To Continue", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      history.push("/book");
    }
  };

  const handelSignin = () => {
    history.push("/signin");
  };

  useEffect(() => {
    var today = new Date().toISOString().split("T")[0];
    setTodaysDate(today);
    if (productState.productById) {
      if (productState.productById[0].productId == id) {
        setCurrentProduct(productState.productById[0]);
      } else {
        getProductById(id);
      }
    } else {
      getProductById(id);
    }
    dispatch({
      type: GET_SEATS,
      payload: "",
    });
  }, [productState]);
  return (
    <>
      {console.log(productState.productById)}
      {currentProduct ? (
        <div className="container">
          <div className="prod-info-base ">
            <img src={currentProduct.productImage} className="product-image" />
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
                      min={todaysDate}
                      type="date"
                      style={{ width: "200px", height: "49px" }}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </span>
                </FormGroup>
              </Form>

              <span
                onClick={handelDateSearch}
                className="button"
                style={{ borderRadius: "0px 10px 10px 0px " }}
              >
                Search
              </span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <div>
                {seatState.seats ? (
                  <div className="seats-div">
                    {seatState.seats.length === 0 ? (
                      <p style={{ fontWeight: "bold" }}>
                        Booking For The Day Has Not Yet Started! Please Try
                        Again Later.
                      </p>
                    ) : (
                      <>
                        {seatState.seats && (
                          <div>
                            <p
                              className="text-center"
                              style={{ fontWeight: "bold" }}
                            >
                              Time: {seatState.seats[0]?.seatTime}
                            </p>
                          </div>
                        )}

                        {seatState.seats.map((seat) => (
                          <Seats
                            id={seat.seatId}
                            booked={seat.booked}
                            number={seat.seatNumber}
                            price={seat.seatPrice}
                            date={seat.seatDate}
                            time={seat.seatTime}
                          />
                        ))}
                      </>
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
                onClick={userState.isAuthenticated ? handelBook : handelSignin}
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
      ) : (
        <h3 className="text-center"> Product Not Found! </h3>
      )}
    </>
  );
};

const mapDispatchToProps = {
  getAllSeats: (data) => getAllSeats(data),
  getProductById: (data) => getProductById(data),
};

const mapStateToProps = (state) => ({
  seatState: state.seats,
  productState: state.product,
  userState: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
