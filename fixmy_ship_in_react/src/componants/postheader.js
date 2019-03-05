import React, { Component } from 'react';
import '../style/defaultpostpage.css';
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Card,
  UncontrolledDropdown,CardTitle,CardHeader,CardText,Container ,Button,Row,Label, Col,FormGroup,Form,CardBody,Input } from 'reactstrap';
  var FontAwesome = require('react-fontawesome');
  class PostHeader extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
         <Collapse navbar>
         <h2>Fix My 'Ship</h2>
         <Nav pills className="ml-auto" navbar>
              <NavItem>
                <NavLink><h2>Home </h2></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><h2>About Us</h2></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><h2>Groups</h2></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><h2>Members</h2></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><h2>Photos</h2></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><h2>Profile</h2></NavLink>
              </NavItem>
         </Nav>
          </Collapse>
        </Navbar>
       
  
     </div>      
    );
  }
}

export default PostHeader;
