import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { httpConfig } from '../../../../utils/httpConfig'
import { FormControl, InputGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DisplayError } from '../../DisplayError'
import { DisplayStatus } from '../../DisplayStatus'

export function SignUpForm () {

  const signUp = {
    profileEmail: '',
    profilePassword: '',
    profilePasswordConfirm: '',
    profileName: '',
  }
  const validator = Yup.object().shape({
    profileEmail: Yup.string()
      .email('email must be a valid email')
      .required('email is required'),
    profilePassword: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least eight characters'),
    profilePasswordConfirm: Yup.string()
      .required('Password Confirm is required')
      .min(8, 'Password must be at least eight characters'),
    profileName: Yup.string()
      .required('profile Name is required'),
  })

  const submitSignUp = (values, { resetForm, setStatus }) => {
    httpConfig.post('/apis/signup/', values)
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
      initialValues={signUp}
      onSubmit={submitSignUp}
      validationSchema={validator}
    >
      {SignUpFormContent}
    </Formik>
  )
}

function SignUpFormContent (props) {
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
          <Form.Label>Email address</Form.Label>
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
        {/*controlId must match what is defined by the initialValues object*/}
        <Form.Group className="mb-3" controlId="profilePassword">
          <Form.Label>Password</Form.Label>
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
        <Form.Group className="mb-3" controlId="profilePasswordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <FontAwesomeIcon icon="key"/>
            </InputGroup.Text>
            <FormControl
              className="form-control"
              name="profilePasswordConfirm"
              type="password"
              value={values.profilePasswordConfirm}
              placeholder="placeholder-placeholder"
              onChange={handleChange}
              onBlur={handleBlur}

            />
          </InputGroup>
          <DisplayError errors={errors} touched={touched} field={'profilePasswordConfirm'}/>
        </Form.Group>
        <Form.Group className="mb-1" controlId="profileName">
          <Form.Label>Profile Name</Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <FontAwesomeIcon icon="dove"/>
            </InputGroup.Text>
            <FormControl
              className="form-control"
              name="profileName"
              type="text"
              value={values.profileName}
              placeholder="your Profile Name"
              onChange={handleChange}
              onBlur={handleBlur}

            />
          </InputGroup>
          <DisplayError errors={errors} touched={touched} field={'profileName'}/>
        </Form.Group>
        <Form.Group className={'mt-3'}>
          <Button className="btn btn-primary" type="submit">Submit</Button>
          {' '}
          <Button
            className="btn btn-danger"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >Reset
          </Button>
        </Form.Group>


      </Form>
      <DisplayStatus status={status}/>

    </>

  )
}

/*

export function SignUpForm () {
        return (
        <>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Username"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out"/>
        </Form.Group>
        <Button variant="primary" type="submit">
        Submit
        </Button>
        </Form>
        </>
        )
      }*/
