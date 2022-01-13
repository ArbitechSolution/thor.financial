import React from "react";
import logo from "../../asset/logo-light.png";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./NavbarTwo.css";
import link from "../../asset/link.svg";
function NavbarTwo() {
  return (
    <div>
      <div className="container largehere">
        <div
          className="row mt-lg-4 dm-mt-0 rownone"
          //   style={{ border: "2px solid red" }}
        >
          <div className="col-6 text-start">
            <img src={logo} className="navbarimage" />
          </div>
          <div className="col-6 text-end">
            <button className="btn btn1" size="sm">
              Connect
            </button>
          </div>
        </div>
        <Navbar expand="lg" id="navbar1" className="mt-lg-4">
          <Navbar.Brand href="#home">
            {" "}
            <img src={logo} className="navbarimage1" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="" className="fs-6 fw-bolder" id="navbarapp">
                App
              </Nav.Link>
              <Nav.Link href="" className="fs-6 fw-bolder" id="navbarapp">
                Create Node
              </Nav.Link>
              <Nav.Link
                href="#pricing"
                className="fs-6 fw-bolder"
                id="navbarapp"
              >
                Community
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">
                <a className="fs-6 fw-bolder" id="navbarapp">
                  Price Chart&nbsp;
                  <img src={link} />
                </a>
              </Nav.Link>
              <Nav.Link href="#memes">
                <a className="fs-6 fw-bolder" id="navbarapp">
                  Contract Address&nbsp;
                  <img src={link} />
                </a>
              </Nav.Link>
              <Nav.Link href="#memes">
                <a className="fs-6 fw-bolder" id="navbarapp">
                Bifrost&nbsp;
                  <img src={link} />
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="fluid-container respons">
        <div
          className="row mt-lg-4 dm-mt-0 rownone"
          style={{ border: "2px solid red" }}
        >
          <div className="col-6 text-start">
            <img src={logo} className="navbarimage" />
          </div>
          <div className="col-6 text-end">
            <button className="btn btn1" size="sm">
              Launch App
            </button>
          </div>
        </div>
        <Navbar expand="lg" id="navbar1" className="mt-lg-4">
          <Navbar.Brand href="#home">
            {" "}
            <img src={logo} className="navbarimage1" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features" className="text-white fs-5 ">
                Home
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white fs-5">
                Community
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white fs-5">
                Treasury
              </Nav.Link>
            </Nav>
            <Nav>
              <div>
                <Nav.Link href="#deets">
                <a className="fs-6 fw-bolder" id="navbarapp">
                  Price Chart&nbsp;
                  <img src={link} />
                </a>
                </Nav.Link>
                <Nav.Link href="#memes">
                <a className="fs-6 fw-bolder" id="navbarapp">
                  Contract Address&nbsp;
                  <img src={link} />
                </a>
                </Nav.Link>
                <Nav.Link href="#memes">
                <a className="fs-6 fw-bolder" id="navbarapp">
                Bifrost&nbsp;
                  <img src={link} />
                </a>
              </Nav.Link>
              <button className="btn btn1" size="sm">
              Connect
            </button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default NavbarTwo;
