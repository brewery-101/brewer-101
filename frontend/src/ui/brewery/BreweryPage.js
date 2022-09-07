import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './breweryPageStyle.css'
import '../../assets/cloud-city-bar.jpg'
import '../../assets/profile-picture.jpg'


export function BreweryPage () {
  let breweryPic = require('../../assets/cloud-city-bar.jpg')
  let profilePic = require('../../assets/profile-picture.jpg')
  return (
    <>
      <Container className="breweryName text-center py-2">
        <h1 className="m-5 py-2 Brewery Title bg-light border-dark">Drunk Skunk Bro Bar</h1>
      </Container>

      <Container>
        {/*        this is the first row of things*/}
        <Row className=" py-2">
          {/*the brewery image*/}
          <Col md={6} className="breweryImage ps-0">
            <img src={breweryPic} alt="A bar placeholder" className="breweryImage img-fluid"/>
          </Col>
          {/*brewery friend list*/}
          <Col md={6} className="breweryFriendCol bg-light">
            <h2>Who's ready to party?</h2>

            <Row className="peopleAtBrewery">
              <Col sm={3} className="personIcon">
                <img src={profilePic} alt="sample mingo" className="smallProfileIcon"/>
              </Col>
              <Col>
                <Row className="bg-light mt-3 mb-1 me-2 fs-4 border border-dark">
                  <p className="personName my-0">Rando Calrissian</p>
                </Row>
                <Row className="whatChaDrinkin bg-light me-2 mb-2 fs-5 border border-dark">
                  <p className="my-0">Drinkin: the fruitiest drink on the menu</p>
                </Row>
              </Col>
            </Row>

            <Row className="peopleAtBrewery">
              <Col sm={3} className="personIcon">
                <img src={profilePic} alt="sample mingo" className="smallProfileIcon"/>
              </Col>
              <Col>
                <Row className="bg-light mt-3 mb-1 fs-4 me-2 border border-dark">
                  <p className="personName my-0">Rando Calrissians brother</p>
                </Row>
                <Row className="whatChaDrinkin bg-light mb-2 me-2 fs-5 border border-dark">
                  <p className="my-0">Drinkin: the fruitiest drink on the menu</p>
                </Row>
              </Col>
            </Row>

          </Col>
        </Row>
        <Row>
          <Col className="breweryInfo bg-light border-dark">
            <h2>Details</h2>
            <p>BreweryName</p>
            <p>Address</p>
            <p>hours</p>
          </Col>
        </Row>
      </Container>
    </>
  )

}