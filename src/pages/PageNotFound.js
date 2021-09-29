import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="g-base-div">
      <h2>Page Not Found!</h2>
      <Link to="/">
        {" "}
        <h2>Go To Home Page</h2>{" "}
      </Link>
    </div>
  );
};

export default PageNotFound;
