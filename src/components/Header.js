import React, { useState } from "react";

//Css
import "../css/Header.component.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { connect } from "react-redux";
import { signout } from "../actions/user";

const Header = ({ userState, signout }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  const handelLogout = () => {
    signout();
  };

  return (
    <div className="container ">
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto logo ">
            Booked!
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              {!userState.isAuthenticated ? (
                <>
                  <NavItem>
                    <NavLink href="/signup">Signup</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/signin">Signin</NavLink>
                  </NavItem>
                </>
              ) : (
                <>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/orders"> My Bookings</NavLink>
                  </NavItem>
                  <NavItem className="my-2">
                    <span
                      className="button my-2 logout-button"
                      style={{
                        borderRadius: "10px",
                        backgroundColor: "#BF3312",
                      }}
                      onClick={handelLogout}
                    >
                      Logout
                    </span>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userState: state.user,
});

const mapDispatchToProps = {
  signout: () => signout(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
