import React from 'react'
import { BreweryMap } from './BreweryMap'
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Map-Home-Style.css"
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
          <Col md={4} className="border border-1 border-dark"><CheckedInFriends/></Col>
          <Col md={8} className="pe-0"><BreweryMap/></Col>
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
