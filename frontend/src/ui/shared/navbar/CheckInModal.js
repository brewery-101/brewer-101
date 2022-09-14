import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux'
import { fetchInitialBreweries } from '../../../store/breweries'
import { CheckInForm } from './CheckInForm'
/*import { httpConfig } from '../utils/httpConfig'*/

export function CheckInModal() {


  const dispatch = useDispatch ()
  const initialEffects = () => {
    dispatch(fetchInitialBreweries())
  }
  React.useEffect(initialEffects, [dispatch])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-grid gap-2">
      <Button variant="primary" onClick={handleShow}>
        CHECK IN
      </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Check In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <CheckInForm/>
        </Modal.Body>
      </Modal>
    </>
  );
}
