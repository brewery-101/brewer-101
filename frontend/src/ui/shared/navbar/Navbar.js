import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { CheckInModal } from './CheckInModal'

import { Col, Container, Row } from 'react-bootstrap'
import "./navbar-style.css"

export function BrewCrewNavBar () {
  return (
    <>
      <span className="position-relative trigger"/>
      {/*This span will hopefully let the bar be responsive.*/}
      <Container fluid className="navbarContainerTarget">
        <Row>
          <Navbar bg="light" variant="light">
            <Col md={{ span: 2, offset: 0}} className="ps-4">
              <Navbar.Brand href="/">ABQ BrewCrew</Navbar.Brand>
            </Col>
            <Col md={{ span: 6, offset: 1}}>
              <CheckInModal/>
            </Col>
            <Col md={{ span: 2, offset: 1}} className="pe-4">
              <Nav className="me-auto justify-content-end">
                <Nav.Link href="/">Map</Nav.Link>
                <Nav.Link href="#">Need something?</Nav.Link>
                <Nav.Link href="/profile-page">UserName</Nav.Link>
              </Nav>
            </Col>
          </Navbar>
        </Row>
      </Container>
    </>
  )
}

/*<div className="container-fluid">
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <SignInModal/>
    <SignUpModal/>
    <CheckInModal/>
    <Nav className="me-auto">
      <Nav.Link href="#Map">Map</Nav.Link>
      <Nav.Link href="#">Need something?</Nav.Link>
      <Nav.Link href="#User">UserName</Nav.Link>
    </Nav>
  </Navbar>
</div>*/


/*
import React from 'react'


export function Navbar () {


  return (
    <>
      <span className="position-relative trigger"/>

      <nav className="border bg-light border-2 navbar navbar-expand-lg sticky-top justify-content-md-center" id="navbar-container">
        <div className="container-fluid mx-md-3">
          <a className="navbar-brand fw-bolder headline fs-3" href="#">ABQ Brew Crew</a>

          <div className="col-md-6 m-1">
            <a href="#" className="border border-dark container-fluid l-50 text-center">CHECK IN</a>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="col-sm-3 collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <div className="vr navbar-lines"></div>
              <li className="nav-item">
                <a className="nav-link active text-black-50" target="_blank" aria-current="page"
                   href="https://www.linkedin.com/in/nick-rockford/">Map</a>

              </li>
              <div className="vr navbar-lines"></div>
              <li className="nav-item">
                <a className="nav-link text-black-50" target="_blank" href="https://github.com/Nick-Rockford">
                  Need Somthing?</a>

              </li>
              <div className="vr navbar-lines"></div>
              <li className="nav-item">
                <a className="nav-link text-black-50" type="button" data-bs-toggle="modal"
                   data-bs-target="#contactModal"> Profile</a>

              </li>
              <div className="vr navbar-lines"></div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}*/

