import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBLink,MDBNav
} from "mdbreact";
import { BrowserRouter as Router, Route, Link,NavLink   } from 'react-router-dom';

class NavbarPage extends Component {
  state = {
    isOpen: false,
    menuname:null
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen 
                      });
  }
  onClickACtive = (ev) => {
    console.log(ev)
    let {innerText} = ev.target;
    this.setState({menuname:innerText})
 
  }

  render() {
    return (
    
        <MDBNavbar color="indigo" dark expand="md" className="mb-4">
          <MDBNavbarBrand>
            <strong className="white-text">Navbar</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar className="justify-content-center">
          <MDBNavbarNav  className="font-weight-bold ml-auto mr-auto" left>

              <MDBNavItem   active={this.state.menuname === 'Home'}  onClick={this.onClickACtive}>
          
                <NavLink    to="/home"  className="nav-link text-white active">Home</NavLink>
              </MDBNavItem>

              <MDBNavItem  active={this.state.menuname === 'ListUser'} onClick={this.onClickACtive}>
              <Link to="/listuser" className="nav-link text-white">ListUser</Link>
              </MDBNavItem>

              <MDBNavItem  active={this.state.menuname === 'AddUser'} onClick={this.onClickACtive}>
              <NavLink to='/adduser' className="nav-link text-white">AddUser</NavLink>
              </MDBNavItem>

              <MDBNavItem  active={this.state.menuname === 'EditUser'} onClick={this.onClickACtive}>
              <NavLink to='/edituser' className="nav-link text-white">EditUser</NavLink>
              </MDBNavItem>

             

            </MDBNavbarNav>

          </MDBCollapse>
        </MDBNavbar>
    
    );
  }
}

export default NavbarPage;