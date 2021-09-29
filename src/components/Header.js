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

const Header = ({ userState }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

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

                  <NavItem>
                    <NavLink href="/profile"> My Profile </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink href="/categories"> Categories</NavLink>
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

export default connect(mapStateToProps)(Header);
