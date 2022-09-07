import React, { useState } from 'react'
import { SignUpModal } from '../shared/main-nav/sign-up/SignUpModal'
import { SignInModal } from '../shared/main-nav/sign-in/SignInModal'
import { BreweryMap } from './BreweryMap'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export function Home () {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>

      <h1>Home</h1>
      <BreweryMap/>
      <SignUpModal/>
      <SignInModal/>


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
