import React from 'react'
import { BreweryMap } from './BreweryMap'
import "./Map-Home-Style.css"
import { Container, Row, Col } from 'react-bootstrap'
import { CheckedInFriends } from './CheckedInFriends'

export function Home () {
  // const [show, setShow] = useState(false);
  //
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={4} className="checkedInFriendsBar border border-1 border-light">
            <h1>Who's Ready to Party!?</h1>
            <CheckedInFriends/>
          </Col>
          <Col md={8} className="px-0"><BreweryMap/></Col>
        </Row>
      </Container>






      {/*<Button variant="primary" onClick={handleShow}>*/}
      {/*  Check Friends*/}
      {/*</Button>*/}

      {/*<Offcanvas show={show} onHide={handleClose}>*/}
      {/*  <Offcanvas.Header closeButton>*/}
      {/*    <Offcanvas.Title>Checked In Friends</Offcanvas.Title>*/}
      {/*  </Offcanvas.Header>*/}
      {/*  <Offcanvas.Body>*/}
      {/*    List of Friends here*/}
      {/*  </Offcanvas.Body>*/}
      {/*</Offcanvas>*/}
    </>
  );
}
