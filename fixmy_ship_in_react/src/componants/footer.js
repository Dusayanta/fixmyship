import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import "../style/footer.css";
class Footer extends Component {
  render() {
    return (
      <div className="footer">
       <i>@copyrights</i>
      </div>
    );
  }
}

export default Footer;
