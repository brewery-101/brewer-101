import {Request, Response} from 'express';
import {Friend, insertFriend} from '../../utils/models/Friend';
import {Profile} from '../../utils/models/Profile';
import {Status} from '../../utils/interfaces/Status';

export async function postFriendController (request: Request, response: Response): Promise<Response> {
  try {

    const {friendRequesteeProfileId} = request.body
    // Grab the profileId from the session
    const profile = request.session.profile as Profile
    const friendRequestorProfileId = profile.profileId as string

    const friend: Friend = {friendRequesteeProfileId, friendRequestorProfileId, friendRequestApproved: null}
    const result = await insertFriend(friend)
    const status: Status = {
      status: 200,
      message: result,
      data: null
    }
    return response.json(status)
  } catch (error) {
    return response.json({
      status: 500,
      message: 'Error creating ticket try again later.',
      data: null
    })
  }
}