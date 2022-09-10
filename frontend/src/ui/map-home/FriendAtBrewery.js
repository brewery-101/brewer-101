import React from "react"
import { Col, Row } from 'react-bootstrap'


export function FriendAtBrewery({friend, thatOneCheckIn}){
console.log(thatOneCheckIn)
  return(
    <>
      <Row className="peopleAtBrewery my-3">
               <Col sm={3} className="personIcon my-auto">
                 <img src={friend.profileAvatarUrl} alt="sample mingo" className="smallProfileIcon "/>
               </Col>
               <Col>
                <Row className="bg-light mb-1 me-2 fs-6 border border-dark">
                   <p className="personName my-0">{friend.profileName}</p>
                 </Row>
                 <Row className="whatChaDrinkin bg-light me-2 border border-dark">
                   <p className="my-0">{thatOneCheckIn.checkInWhatChaDrinkin}</p>
                </Row>
              </Col>
             </Row>
    </>
  )

}
