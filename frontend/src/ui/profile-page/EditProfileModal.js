import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { EditProfileForm } from './EditProfileForm'
import { useSelector } from 'react-redux'


export function EditProfileModal() {
  const [show, setShow] = useState(false);
  const profile = useSelector(state => {return state.currentUser ? state.currentUser : null})
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Profile
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditProfileForm profile={profile}/>
        </Modal.Body>
      </Modal>
    </>
  );
}
