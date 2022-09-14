import React from 'react'
import { Col, Row } from 'react-bootstrap'



export const SearchResult = ({ profile }) =>
{
  return (

    <Row className="peopleAtBrewery">
      <Col sm={3} className="personIcon">
        <img src={profile.profileAvatarUrl} alt="profile Avatar" className="smallProfileIcon img-fluid"/>
      </Col>
      <Col>
        <Row className="bg-light mt-3 mb-1 me-2 fs-4 border border-dark">
          <p className="personName my-0">{profile.profileName}</p>
        </Row>
      </Col>
    </Row>
  )
}
