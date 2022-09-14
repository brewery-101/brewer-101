import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { FormControl, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { httpConfig } from '../../../utils/httpConfig'

import { useNavigate } from "react-router-dom";
import { addAllProfiles } from '../../../store/profiles'
import { useDispatch } from 'react-redux'


export function FriendSearchBar () {
  const dispatch = useDispatch()
const navigate = useNavigate()
  const searchFiend = {

    profileName: '',
  }
  const validator = Yup.object().shape({
    profileName: Yup.string()
      .required('profile Name is required'),
  })
  const submitSearchFriend = (values, { resetForm, setStatus }) => {
    console.log(values)
    httpConfig.get(`/apis/profile/profileName/${values.profileName}`)
      .then(reply => {
          let { message, type } = reply

          if (reply.status === 200) {
            dispatch(addAllProfiles(reply.data))
            resetForm()
            navigate(`/profileSearch`);
          }
          setStatus({ message, type })
        }
      )
  }
  return (
    <Formik
      initialValues={searchFiend}
      onSubmit={submitSearchFriend}
      validationSchema={validator}
    >
      {searchFiendFormContent}
    </Formik>
  )
}

function searchFiendFormContent (props) {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,

  } = props

  return (
    <>
      <Form onSubmit={handleSubmit} className="d-flex">
        <Form.Group className="mb-3" controlId="profileName">
          <InputGroup>
            <InputGroup.Text>
              <FontAwesomeIcon icon="search"/>
            </InputGroup.Text>
            <FormControl
              name="profileName"
              type="search"
              placeholder="Search"
              value={values.profileName}
              className="me-2"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </InputGroup>
        </Form.Group>
          <Button variant="outline-success" type="submit">Search</Button>
      </Form>
    </>
)
}