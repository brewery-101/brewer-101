import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import "./Map-Home-Style.css"
export function CheckedInFriends() {
  let profilePic = require('../../assets/demo.png')
  return (
<div>
  <Container>
    <h2 className="my-2">Who's ready to party?</h2>


    <Row className="peopleAtBrewery my-3">
      <Col sm={3} className="personIcon my-auto">
        <img src={profilePic} alt="sample mingo" className="smallProfileIcon "/>
      </Col>
      <Col>
        <Row className="bg-light mb-1 me-2 fs-6 border border-dark">
          <p className="personName my-0">Rando Calrissian</p>
        </Row>
        <Row className="whatChaDrinkin bg-light me-2 border border-dark">
          <p className="my-0">Drinkin: the fruitiest drink on the menu</p>
        </Row>
      </Col>
    </Row>

    <Row className="peopleAtBrewery">
      <Col sm={3} className="personIcon my-auto">
        <img src={profilePic} alt="sample mingo" className="smallProfileIcon "/>
      </Col>
      <Col>
        <Row className="bg-light mb-1 me-2 fs-6 border border-dark">
          <p className="personName my-0">Rando Calrissian</p>
        </Row>
        <Row className="whatChaDrinkin bg-light me-2 border border-dark">
          <p className="my-0">Drinkin: the fruitiest drink on the menu</p>
        </Row>
      </Col>
    </Row>
  </Container>


</div>
  );
}