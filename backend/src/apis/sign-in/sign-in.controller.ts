import { Request, Response } from 'express'
import 'express-session'
import { v4 as uuid } from 'uuid'
import { generateJwt, validatePassword } from '../../utils/auth.utils'
import { Profile, selectProfileByProfileEmail } from '../../utils/models/Profile'

/**
 * Express controller that handles signing in users when the endpoint POST apis/sign-in/ is called
 * @param request  An object modeling the current request provided by Express.
 * @param response an object modeling the response that will be sent to the client.
 * @return A promise containing a status object with either a success or failure message set to the message field
 */
export async function signInController (request: Request, response: Response): Promise<Response> {
  try {
    const { profileEmail, profilePassword } = request.body
    const profile = await selectProfileByProfileEmail(profileEmail)

    return (profile !== null) && await validatePassword(profile.profileHash, profilePassword)
      ? signInSuccessful(request, response, profile)
      : signInFailed(response)
  } catch (error: any) {
    return response.json({ status: 500, data: null, message: error.message })
  }
}

/**
 * helper function that attaches a failure message, related to signing in, to the server response.
 * @param response an object modeling the response that will be sent to the client.
 * @return express response object with the client status object set in json
 **/
function signInFailed (response: Response): Response {
  return response.json({ status: 400, message: 'Email or password is incorrect please try again.', data: null })
}

/**
 * helper function that creates a jwt token, sets it to the authorization header in the response  and attaches a success message, related to signing in, to the response.
 * @param request  An object modeling the current request provided by Express.
 * @param response an object modeling the response that will be sent to the client.
 * @param profile Profile object of the person who just logged in
 * @return express response object with the client status object set in json and an authorization header
 **/
function signInSuccessful (request: Request, response: Response, profile: Profile): Response {
  const { profileId, profileName, profileEmail } = profile
  const signature: string = uuid()
  const authorization: string = generateJwt({
    profileId,
    profileName,
    profileEmail
  }, signature)

  request.session.profile = profile
  request.session.jwt = authorization
  request.session.signature = signature

  response.header({
    authorization
  })
  return response.json({ status: 200, message: 'Sign in successful', data: null })
}
