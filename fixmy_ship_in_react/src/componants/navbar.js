import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem } from 'reactstrap';
  import { Link ,BrowserRouter } from "react-router-dom";
  import { NavLink } from "react-router-dom";
class NaveBar extends Component {
  render() {
    return (
      <div>
       
        <Navbar color="light" light expand="md">
         <Collapse navbar>
         <h1>Fix My 'Ship</h1>
         <Nav pills className="ml-auto" navbar>
         <NavItem>
         <NavLink to='/login'>Login</NavLink>
         </NavItem>
         <NavItem>
         <NavLink to='/signup'>SignUp</NavLink>
         </NavItem>
         </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NaveBar;
