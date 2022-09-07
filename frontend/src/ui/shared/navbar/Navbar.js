import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { CheckInModal } from './CheckInModal'
import { Col, Container, Row } from 'react-bootstrap'
import "./navbar-style.css"
import { SignUpModal } from '../main-nav/sign-up/SignUpModal'
import { SignInModal } from '../main-nav/sign-in/SignInModal'
import React from 'react'

export function BrewCrewNavBar () {
  return (
    <>
      <span className="position-relative trigger"/>
      {/*This span will hopefully let the bar be responsive.*/}
      <Container fluid className="navbarContainerTarget">
        <Row>
          <Navbar bg="light" variant="light">
            <Col md={{ span: 2, offset: 0}} className="ps-4">
              <SignUpModal/>
              <SignInModal/>
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
