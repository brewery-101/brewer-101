import Form from 'react-bootstrap/Form'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { httpConfig } from '../../../utils/httpConfig'
import { Formik } from 'formik'
import { DisplayStatus } from '../DisplayStatus'
import Button from 'react-bootstrap/Button'
import { InputGroup } from 'react-bootstrap'


export function CheckInForm () {

  const dispatch = useDispatch()

  const validator = Yup.object().shape({
    checkInBreweryId: Yup.string()
      .required('must select a brewery'),
    checkInWhatChaDrinkin: Yup.string()
  })
  const checkIn = {
    checkInBreweryId: '',
    checkInWhatChaDrinkin: ''
  }

  const submitCheckIn = (values, { resetForm, setStatus }) => {
    httpConfig.post('/apis/check-In/', values)
      .then(reply => {
          let { message, type } = reply

          if (reply.status === 200) {
            resetForm()
          }
          setStatus({ message, type })
        }
      )
  }
  return (

    <Formik
      initialValues={checkIn}
      onSubmit={submitCheckIn}
      validationSchema={validator}
    >
      {CheckInFormContent}
    </Formik>
  )
}

function CheckInFormContent (props) {
  const breweries = useSelector(state => state.breweries ?? [])
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
  } = props
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="checkInBreweryId">
          <Form.Label>Brewery</Form.Label>
          <Form.Select
            name="checkInBreweryId"
            value={values.checkInBreweryId}
              onChange={handleChange}
              onBlur={handleBlur}>
            {breweries.map((brewery) =>
              <option
                value={brewery.breweryId}
                key={brewery.breweryId}>
                {brewery.breweryName}
              </option>
            )}

          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="checkInWhatChaDrinkin">
          <Form.Label>What cha Drinkin?</Form.Label>
          <InputGroup>

            <Form.Control
              className="form-control"
              name="checkInWhatChaDrinkin"
              type="text"
              value={values.checkInWhatChaDrinkin}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Ex: Left handed milk stout"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className={'mt-3'}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
      <DisplayStatus status={status}/>
    </>
  )
}