import React from "react";
import { FaCheck } from "react-icons/fa";

const Success = () => {
  return (
    <div className="container">
      <p style={{ fontSize: "150px", textAlign: "center", color: "green" }}>
        <FaCheck />
      </p>
      <h2 className="text-center">Success!</h2>
      <p className="text-center">Your Tickets has been Booked Successfully!</p>
    </div>
  );
};

export default Success;
