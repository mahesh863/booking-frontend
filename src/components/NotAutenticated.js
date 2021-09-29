import React from "react";
import { Link } from "react-router-dom";

const NotAutenticated = () => {
  return (
    <div>
      <h2 className="text-center">Please Login To View The Page!</h2>
      <Link to="/signin">
        <p className="text-center">Login</p>
      </Link>
    </div>
  );
};

export default NotAutenticated;
