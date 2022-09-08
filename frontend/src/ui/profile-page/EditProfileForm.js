import * as Yup from 'yup'
import { httpConfig } from '../../utils/httpConfig'
import { Form, Formik } from 'formik'
import { FormControl, InputGroup, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DisplayError } from '../shared/DisplayError'
import { DisplayStatus } from '../shared/DisplayStatus'

export const EditProfileForm = (props) => {
  const { profile } = props

  const validationObject = Yup.object().shape({
    profileEmail: Yup.string()
      .email('Must be a valid email'),
    profileAvatarUrl: Yup.mixed(),
    profileName: Yup.string()
      .min(1, 'profile Name is too long')
  })

  function submitEditedProfile (values, { resetForm, setStatus }) {

    const submitUpdatedProfile = (updatedProfile) => {
      httpConfig.put(`/apis/profile/${profile.profileId}`, updatedProfile)
        .then(reply => {
          let { message, type } = reply

          if (reply.status === 200) {
            resetForm()
          }
          setStatus({ message, type })
          return (reply)
        })
    }

  //   if (values.profileAvatarUrl !== undefined) {
  //     httpConfig.post(`/apis/image-upload/`, values.profileAvatarUrl)
  //       .then(reply => {
  //         let { message, type } = reply
  //
  //         if (reply.status === 200) {
  //           submitUpdatedProfile({...values, profileAvatarUrl: message})
  //         }else {
  //           setStatus({message, type})
  //         }
  //       })
  //   } else {
  //     submitUpdatedProfile(values)
  //   }
   }

   return (
     <Formik
       initialValues={profile}
       onSubmit={submitEditedProfile}
       validationSchema={validationObject}>
       {EditProfileFormContent}
     </Formik>
   )

}

function EditProfileFormContent (props){
  const {
    setFieldValue,
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
      <Form onSubmit={handleSubmit} className="bg-light border rounded p-3">
        <h2>Edit Profile Form</h2>
        <Form.Group className="mb-3" controlId="profileEmail">
          <Form.Label>Email</Form.Label>
          <InputGroup>
          <InputGroup.Text>
            <FontAwesomeIcon icon="envelope"/>
          </InputGroup.Text>
          <FormControl
            className="form-control"
            name="profileEmail"
            type="text"
            value={values.profileEmail}
            placeholder="Your Email"
            onChange={handleChange}
            onBlur={handleBlur}

            />
        </InputGroup>
        <DisplayError errors={errors} touched={touched} field={'profileEmail'}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="profileName">
          <Form.Label>Name</Form.Label>
          <InputGroup>
            <InputGroup.Text>
              <FontAwesomeIcon icon="User"/>
            </InputGroup.Text>
            <FormControl
              className="form-control"
              name="profileName"
              type="text"
              value={values.profileName}
              placeholder="handle"
              onChange={handleChange}
              onBlur={handleBlur}
              />
          </InputGroup>
          <DisplayError errors={errors} touched={touched} field={'profileName'}/>
        </Form.Group>
        {/*<ImageDropZone*/}
        {/*  formikProps={{*/}
        {/*    values,*/}
        {/*    handleChange,*/}
        {/*    handleBlur,*/}
        {/*    setFieldValue,*/}
        {/*    fieldValue: 'profileAvatarUrl'*/}
        {/*  }}*/}
        {/*/>*/}
        <Form.Group className={"mt-3"}>
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