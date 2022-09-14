import {Request, Response} from 'express';
import {
  Profile, selectAllProfilesByFriends,
  selectPartialProfileByProfileId,
  selectProfileByProfileId, selectProfileByProfileName,
  updateProfile,
} from '../../utils/models/Profile';
import {Status} from '../../utils/interfaces/Status';


/**
 * Express controller that handles editing a logged-in users profile information when the endpoint POST apis/profile/ is called
 * @param request  An object modeling the current request provided by Express.
 * @param response an object modeling the response that will be sent to the client.
 * @return A promise containing a status object with either a success or failure message set to the message field
 */
export async function putProfileController (request: Request, response: Response): Promise<Response>{
  try {
    const { profileId } =request.params
    const profile = request.session.profile as Profile
    const profileIdFromSession = profile.profileId as string

    if (profileId !== profileIdFromSession) {
      return response.json({ status: 400, data: null, message: 'You are not allowed to preform this task' })
    }


    const { profileAvatarUrl, profileEmail, profileName } = request.body
    const updatedValues = { profileAvatarUrl, profileEmail, profileName }
    const previousProfile: Profile = await selectProfileByProfileId(profileId) as Profile

    const newProfile: Profile = { ...previousProfile, ...updatedValues}
    await updateProfile(newProfile)
    return response.json({ status: 200, data: null, message: 'Profile successfully updated' })
  } catch (error: any) {
    return response.json({ status: 400, data: null, message: error.message })
  }
}

/**
 * Express controller that returns a profile object with the provided primary key or null, if no object was found, when the endpoint GET apis/status/ is called.
 * @param request  An object modeling the current request provided by Express.
 * @param response an object modeling the response that will be sent to the server.
 * @return A promise containing a status object with the requested information set to the data field
 */
export async function getProfileByProfileIdController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { profileId } = request.params
    const mySqlResult = await selectPartialProfileByProfileId(profileId)
    const data = mySqlResult ?? null
    const status: Status = { status: 200, data, message: null }
    return response.json(status)
  } catch (error: any) {
    return (response.json({ status: 400, data: null, message: error.message }))
  }
}

/**
 * Express controller that returns a profile object with the provided primary key or null, if no object was found, when the endpoint GET apis/status/ is called.
 * @param request  An object modeling the current request provided by Express.
 * @param response an object modeling the response that will be sent to the server.
 * @return A promise containing a status object with the requested information set to the data field
 */
export async function getProfileByProfileNameController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    console.log()
    const { profileName } = request.params
    const mySqlResult = await selectProfileByProfileName(profileName)
    const data = mySqlResult ?? null
    const status: Status = { status: 200, data, message: null }
    return response.json(status)
  } catch (error: any) {
    return (response.json({ status: 400, data: null, message: error.message }))
  }
}

export async function getAllProfilesByFriends (request: Request, response: Response): Promise<Response<Status>> {
 try{
  const { profileId } = request.params
  const mySqlResult = await selectAllProfilesByFriends(profileId)
  const data = mySqlResult ?? null
  const status: Status = { status: 200, data, message: null }
  return response.json(status)
} catch (error: any) {
  return (response.json({ status: 400, data: null, message: error.message }))
}

}
