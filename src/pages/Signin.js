import React, { useState } from "react";
import { Form, FormGroup, Input } from "reactstrap";

//Css
import "../css/Signin.page.css";
import { toast } from "react-toastify";

//Redux
import { signin } from "../actions/user";
import { connect } from "react-redux";

const Signin = ({ signin, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.warn("All Fields Are Required!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }

    signin({ email, password, history });
  };
  return (
    <div className="base-div container">
      <div className="container-div">
        <div>
          <h2 className="my-1 text-center">Signin</h2>
        </div>
        <div>
          <Form onSubmit={(e) => handelSubmit(e)}>
            <FormGroup className="my-2">
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
            </FormGroup>

            <FormGroup className="my-2">
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
              />
            </FormGroup>
          </Form>

          <div className="button" onClick={(e) => handelSubmit(e)}>
            Submit{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProp = {
  signin: (data) => signin(data),
};

export default connect(null, mapDispatchToProp)(Signin);
