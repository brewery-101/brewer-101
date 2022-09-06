/*import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Formik} from "formik";
import {useDispatch} from "react-redux";
import * as Yup from "yup"
import {FormDebugger} from '../utils/FormDebugger'*/

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
/*import { httpConfig } from '../utils/httpConfig'*/

export function CheckInModal() {
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="Select">Brewery</Form.Label>
              <Form.Select id="Select">
                <option>select</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formWhatShaDrinkin">
              <Form.Label>Password</Form.Label>
              <Form.Control type="What Cha Drinkin?" placeholder="Ex: Left handed milk stout" />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
/*

export function PostForm() {

  const dispatch = useDispatch()

  const validator = Yup.object().shape({
    misquoteAttribution: Yup.string()
      .required("A misquote attribution is required to create a misquote")
      .max(64, "misquote attribution cannot be over 64 characters "),
    misquoteContent: Yup.string()
      .required(" misquote content is required to create a misquote")
      .max(255, "misquote content cannot be over 255 characters "),
    misquoteSubmitter: Yup.string()
      .required("Please specify who is submitting this misquote")
      .max(64, "misquote submitter cannot be over 64 characters "),

  })

  const handleSubmit = (values, {resetForm, setStatus}) => {
    httpConfig.post("/apis/misquote/", values).then(reply => {
      const {message, type, status} = reply
      if (status === 200) {
        resetForm()
        dispatch(PostCheckin())
      }
      setStatus({message, type})
    })
  }

  const misquote = {
    misquoteAttribution: "",
    misquoteContent: "",
    misquoteSubmitter: ""
  }

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={misquote}
        validationSchema={validator}
      >
        {PostFormContent}
      </Formik>
    </>
  )
}


function PostFormContent(props) {
  const {
    status,
    values,
    errors,
    touched,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <InputGroup>
            <FormControl
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Attribution"
              value={values.misquoteAttribution}
              name="misquoteAttribution"
            />
          </InputGroup>
          {errors.misquoteAttribution && touched.misquoteAttribution && <>
            <div className="alert alert-danger">
              {errors.misquoteAttribution}
            </div>
          </>}
        </Form.Group>

        <Form.Group>
          <InputGroup>
            <FormControl
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Submitter"
              value={values.misquoteSubmitter}
              name="misquoteSubmitter"
            />

          </InputGroup>
          {errors.misquoteSubmitter && touched.misquoteSubmitter && <>
            <div className="alert alert-danger">
              {errors.misquoteSubmitter}
            </div>
          </>}
        </Form.Group>

        <Form.Group>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <FontAwesomeIcon icon="dog"/>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              as="textarea"
              placeholder="Meow Meow Goes Here"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.misquoteContent}
              name="misquoteContent"
            />

            <InputGroup.Append>
              <Button variant="primary" type="submit"> Submit <FontAwesomeIcon
                icon="envelope"/></Button>
            </InputGroup.Append>
          </InputGroup>
          {errors.misquoteContent && touched.misquoteContent && <>
            <div className="alert alert-danger">
              {errors.misquoteContent}
            </div>
          </>}
        </Form.Group>
        <FormDebugger {...props} />
      </Form>
      {
        status && (<div className={status.type}>{status.message}</div>)
      }
    </>
  )
}*/
