// Reactstrap imports !!!!DELETE!!!!!


// React-bootsrap Imports

import { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import nProgress from "nprogress";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        className=" navbar"
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand href="#" style={{ borderRight: "2.3px solid black" }}>
            {APP_NAME}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className=" " navbarScroll>
              <Nav.Link
                href="#action1"
                style={{ borderRight: "2.3px solid black", margin:'0px' }}
              >
                <a href="" className="href" style={{ display: "flex", paddingTop:'15px', paddingRight:'15px', paddingLeft:'15px' }}>
                  <img src="./static/images/icons/usericon.png" alt="user" />
                </a>
              </Nav.Link>
              <NavDropdown
                title="Colletions"
                id="navbarScrollingDropdown"
                style={{ borderRight: "2.3px solid black" }}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav.Link href="#action1" style={{ borderRight: "2.3px solid black", margin:'0px', height:'54px' }}>
              <a href="" className="href" style={{ display: "flex", paddingTop:'15px', minWidth:'150px' }}>
                Start business course
              </a>
            </Nav.Link>
            <div className="search">
              <Form
              className="d-flex"
              marginLeft='20px'
            >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button style={{marginRight:'20px'}}>Search</Button>
            </Form>
            </div>
            {isAuth() && (
                <Nav.Link
                  style={{ cursor: "pointer", borderLeft:'2.3px solid black', margin:'0px', height:'54px', paddingTop:'15px', display:'flex', }}
                  onClick={() => signout(() => Router.replace(`/signin`))}
                >
                  Signout
                </Nav.Link>
            )}
            {!isAuth() && (
              <>
                <Nav.Link>
                    <Nav.Link>
                      <a href="/signin">
                        Signin
                      </a>
                      </Nav.Link>
                </Nav.Link>
                <Nav.Link>
                  <Nav.Link href="/signup">
                    Signup
                  </Nav.Link>
                </Nav.Link>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="navdiv"></div>
    </>
  );

  //  ---------------------------------------------------------------------
  // OLD HEADER+++++++++++++++++++++++++++++++++++++++++++ !!!! DELETE!!!!
  // ------------------------------------------------------------------------

  return (
    <>
      <Navbar
        color="light"
        light
        expand="md"
        className="border-bottom border-primary border-2 border-dark"
        fixed="top"
      >
        <a href="/">
          <NavLink className="font-weight-bold">{APP_NAME}</NavLink>
        </a>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <>
              <NavItem>
                <a href="/blogs">
                  <NavLink>All Items</NavLink>
                </a>
              </NavItem>
            </>

            {!isAuth() && (
              <>
                <NavItem>
                  <a href="/signin">
                    <NavLink>Signin</NavLink>
                  </a>
                </NavItem>
                <NavItem>
                  <Link href="/signup">
                    <NavLink>Signup</NavLink>
                  </Link>
                </NavItem>
              </>
            )}

            {isAuth() && isAuth().role === 0 && (
              <NavItem>
                <a href="/user">
                  <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                </a>
              </NavItem>
            )}

            {isAuth() && isAuth().role === 1 && (
              <NavItem>
                <a href="/admin">
                  <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                </a>
              </NavItem>
            )}

            {isAuth() && (
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  onClick={() => signout(() => Router.replace(`/signin`))}
                >
                  Signout
                </NavLink>
              </NavItem>
            )}
            <NavItem>
              <a href="/contact">
                <NavLink>Contact</NavLink>
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
