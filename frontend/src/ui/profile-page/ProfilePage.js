import React from 'react'
import "./style.css"
import { Col, Container, Row, Form, Button } from 'react-bootstrap'


export function ProfilePage () {
  let breweryPic = require('./beer.jpg')
  let profilePic = require('./beer.jpg')
  return (
    <>
      <Container className="breweryName text-center py-2">
        <h1 className="m-5 py-2 Brewery Title bg-light border-dark">Profile Page</h1>
      </Container>

      <Container>
        {/*        this is the first row of things*/}
        <Row className=" py-2">
          {/*the brewery image*/}
          <h1>Hello Name, </h1>
          <Col md={6} className="breweryImage ps-0">
            <img src={breweryPic} alt="A bar placeholder" className="breweryImage img-fluid"/>
          </Col>
          {/*brewery friend list*/}
          <Col md={6} className="breweryFriendCol bg-light">
            <h2>My Friends</h2>


            <Row className="peopleAtBrewery">
              <Col sm={3} className="personIcon">
                <img src={profilePic} alt="sample mingo" className="smallProfileIcon img-fluid"/>
              </Col>
              <Col>
                <Row className="bg-light mt-3 mb-1 me-2 fs-4 border border-dark">
                  <p className="personName my-0">Rando Calrissian</p>
                </Row>
                <Row className="whatChaDrinkin bg-light me-2 mb-2 fs-5 border border-dark">
                  <p className="my-0">Brewery: Lava Rock</p>
                </Row>
                <Row className="whatChaDrinkin bg-light me-2 mb-2 fs-5 border border-dark">
                  <p className="my-0">Drinkin: the fruitiest drink on the menu</p>
                </Row>
              </Col>
            </Row>

            <Row className="peopleAtBrewery">
              <Col sm={3} className="personIcon">
                <img src={profilePic} alt="sample mingo" className="smallProfileIcon img-fluid"/>
              </Col>
              <Col>
                <Row className="bg-light mt-3 mb-1 me-2 fs-4 border border-dark">
                  <p className="personName my-0">Rando Calrissian</p>
                </Row>
                <Row className="whatChaDrinkin bg-light me-2 mb-2 fs-5 border border-dark">
                  <p className="my-0">Brewery: Lava Rock</p>
                </Row>
                <Row className="whatChaDrinkin bg-light me-2 mb-2 fs-5 border border-dark">
                  <p className="my-0">Drinkin: the fruitiest drink on the menu</p>
                </Row>
              </Col>
            </Row>

          </Col>
        </Row>
        <Row>
          <Col className="profile Info bg-light border-dark">
            <h2>Find A Friend</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="search" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )

}
