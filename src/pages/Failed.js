import React from "react";

import { FaTimes } from "react-icons/fa";

const Failed = () => {
  return (
    <div className="container">
      <p style={{ fontSize: "150px", textAlign: "center", color: "red" }}>
        <FaTimes />
      </p>
      <h2 className="text-center">Failed!</h2>
      <p className="text-center"> Failed To Book Your Tickets!</p>
      <p className="text-center"> Please Try Again Later!</p>
    </div>
  );
};

export default Failed;
