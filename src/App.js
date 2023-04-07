import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage";
import Features from "./Page/Features";
import ResumeAI from "./Page/ResumeAI";
import "./App.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBNavbar,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBFooter,
} from "mdb-react-ui-kit";
import About from "./Page/About";

export default function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <header>
          <MDBNavbar expand="lg" light bgColor="white">
            <MDBContainer fluid>
              <MDBNavbarToggler
                onClick={() => 0}
                aria-controls="navbarExample01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <MDBIcon fas icon="bars"></MDBIcon>
              </MDBNavbarToggler>
              <MDBCollapse show={true}>
                <MDBNavbarNav right className="mb-2 mb-lg-0">
                  <MDBNavbarItem active>
                    <MDBNavbarLink aria-current="page" href="/">
                      Home
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href="/features">Features</MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href="/about">About</MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href="/resumeai">ResumeAI</MDBNavbarLink>
                  </MDBNavbarItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/resumeai" element={<ResumeAI />} />
        </Routes>
        <MDBFooter
          bgColor="light"
          className="text-center text-lg-start text-muted"
        >
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href = "/about" className="me-4 text-reset">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href = "/about" className="me-4 text-reset">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href = "/about" className="me-4 text-reset">
                <MDBIcon fab icon="google" />
              </a>
              <a href = "/about" className="me-4 text-reset">
                <MDBIcon fab icon="instagram" />
              </a>
              <a href = "/about" className="me-4 text-reset">
                <MDBIcon fab icon="linkedin" />
              </a>
              <a href = "/about" className="me-4 text-reset">
                <MDBIcon fab icon="github" />
              </a>
            </div>
          </section>

          <section className="">
            <MDBContainer className="text-center text-md-start mt-5">
              <MDBRow className="mt-3">
                <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <MDBIcon icon="gem" className="me-3" />
                    Ten doi thi
                  </h6>
                  <p>
                    Tieu chi cua san pham
                  </p>
                </MDBCol>

                <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Technology</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Python
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      React
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      ML
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      AI
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Help
                    </a>
                  </p>
                </MDBCol>

                <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <MDBIcon icon="home" className="me-2" />
                    HN, HCM
                  </p>
                  <p>
                    <MDBIcon icon="envelope" className="me-3" />
                    info@example.com
                  </p>
                  <p>
                    <MDBIcon icon="phone" className="me-3" /> 0373938439
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2023 Copyright:
            <a className="text-reset fw-bold" href="/about">
              Ten doi thi
            </a>
          </div>
        </MDBFooter>
      </BrowserRouter>
    </div>
  );
}
