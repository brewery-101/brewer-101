import React from 'react'
import { httpConfig } from '../../../../utils/httpConfig'
import jwtDecode from 'jwt-decode'
import { setAuth } from '../../../../store/auth'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DisplayError } from '../../DisplayError'
import { DisplayStatus } from '../../DisplayStatus'
import { Formik } from 'formik'
import { fetchInitialFriends } from '../../../../store/friends'

export function SignInForm () {
  const dispatch = useDispatch()

  const validator = Yup.object().shape({
    profileEmail: Yup.string()
      .email('please provide a valid email')
      .required('email is required'),
    profilePassword: Yup.string()
      .required('password is required')
      .min(8, 'password must be at least eight characters')
  })

  //the initial values object defines what the request payload is.
  const signIn = {
    profileEmail: '',
    profilePassword: ''
  }

  const submitSignIn = (values, { resetForm, setStatus }) => {
    httpConfig.post('/apis/sign-in/', values)
      .then(reply => {
        let { message, type } = reply
        setStatus({ message, type })
        if (reply.status === 200 && reply.headers['authorization']) {
          window.localStorage.removeItem('authorization')
          window.localStorage.setItem('authorization', reply.headers['authorization'])
          resetForm()
          let jwtToken = jwtDecode(reply.headers['authorization'])
          dispatch(setAuth(jwtToken))
          dispatch(fetchInitialFriends())
        }
        setStatus({ message, type })
      })
  }

  return (
    <>
      <Formik
        initialValues={signIn}
        onSubmit={submitSignIn}
        validationSchema={validator}
      >
        {SignInFormContent}
      </Formik>
    </>
  )
}

function SignInFormContent (props) {
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
        {/*controlId must match what is passed to the initialValues prop*/}
        <Form.Group className="mb-3" controlId="profileEmail">
          <Form.Label>email</Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <FontAwesomeIcon icon="envelope"/>
            </InputGroup.Text>
            <FormControl
              className="form-control"
              name="profileEmail"
              type="text"
              value={values.profileEmail}
              placeholder="your@email.you"
              onChange={handleChange}
              onBlur={handleBlur}

            />
          </InputGroup>
          <DisplayError errors={errors} touched={touched} field={'profileEmail'}/>
        </Form.Group>

        <FontAwesomeIcon icon="key"/>
        {/*controlId must match what is defined by the initialValues object*/}
        {/*This might be the cause of an Error. Check here first*/}
        <Form.Group className="mb-3" controlId="profileName">
        <Form.Label>password</Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <FontAwesomeIcon icon="key"/>
            </InputGroup.Text>
            <FormControl
              className="form-control"
              name="profilePassword"
              type="password"
              value={values.profilePassword}
              placeholder="P@ssword1"
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </InputGroup>
          <DisplayError errors={errors} touched={touched} field={'profilePassword'}/>
        </Form.Group>

        <Form.Group className="mt-3">
          <Button className="btn btn-primary" type="submit">Submit</Button>

          <Button
            className="btn btn-danger"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >Reset</Button>
        </Form.Group>
      </Form>
      <div className="pt-3">
        <DisplayStatus status={status}/>
      </div>
    </>
  )
}
/*

export function SignInForm () {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Username</Form.Label>
          <Form.Control type="username" placeholder="Username"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>


      </Form>
    </>
  )
}

*/
