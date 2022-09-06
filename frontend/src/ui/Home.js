import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export function Home () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Check Friends
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Checked In Friends</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          List of Friends here
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
