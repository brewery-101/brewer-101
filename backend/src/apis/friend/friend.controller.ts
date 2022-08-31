import {Request, Response} from 'express';
import {
  Friend,
  insertFriend,
  selectFriendByFriendRequestApproved,
  selectFriendByFriendRequesteeProfileId,
  selectFriendByFriendRequestorProfileId,
  selectFriendByPrimaryKey,
  updateFriend
} from '../../utils/models/Friend'
import {Profile} from '../../utils/models/Profile';
import {Status} from '../../utils/interfaces/Status';
import { friendRoute } from './friend.route'

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

export async function putFriendController ( request: Request, response: Response): Promise<Response> {
  try {
    const profile = request.session.profile as Profile
    const friendProfileId = profile.profileId as string
    const { friendRequesteeProfileId, friendRequestorProfileId, friendRequestApproved } = request.body

    const friend = {friendRequestApproved, friendRequestorProfileId, friendRequesteeProfileId}
    const previousFriend: Friend | null = await selectFriendByPrimaryKey(friend)

    if (previousFriend === null) {
      return response.json({ status: 404, data: null, message: 'friend does not exist' })
    }

    if (friendProfileId !== previousFriend.friendRequesteeProfileId) {
      return response.json({ status: 401, data: null, message: 'you are not allowed to perform this task' })
    }

    const updatedValues = { friendRequesteeProfileId, friendRequestorProfileId, friendRequestApproved }

    const newFriend: Friend = { ...previousFriend, ...updatedValues }
    const message: string = await updateFriend(newFriend)
    return response.json({ status: 200, data: null, message })
  } catch (error: any) {
    return response.json({ status: 500, data: null, message: 'internal server error'})
  }
}

export async function getFriendByFriendRequesteeProfileIdController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { friendRequesteeProfileId } = request.params

    // const profile = request.session.profile as Profile
    // const profileIdFromSession = profile.profileId as string
    //
    // if (friendRequesteeProfileId !== profileIdFromSession) {
    //   return response.json({ status: 400, data: null, message: 'You are not allowed to perform this task' })}

    const data = await selectFriendByFriendRequesteeProfileId(friendRequesteeProfileId)
    const status: Status = { status: 200, message: null, data }
    return response.json(status)

  }catch (error) {
    console.error(error)
    return response.json({status: 500, message: '', data: []
    })
  }
}

export async function getFriendByFriendRequestorProfileIdController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { friendRequestorProfileId } = request.params

    // const profile = request.session.profile as Profile
    // const profileIdFromSession = profile.profileId as string
    //
    // if (friendRequestorProfileId !== profileIdFromSession) {
    //   return response.json({ status: 400, data: null, message: 'You are not allowed to perform this task' })}

    const data = await selectFriendByFriendRequestorProfileId(friendRequestorProfileId)
    const status: Status = { status: 200, message: null, data }
    return response.json(status)

  }catch (error) {
    console.error(error)
    return response.json({status: 500, message: '', data: []
    })
  }
}

export async function getFriendByPrimaryKey (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { friendRequesteeProfileId, friendRequestorProfileId } = request.params

    // const profile = request.session.profile as Profile
    // const profileIdFromSession = profile.profileId as string
    //
    // if (friendRequestorProfileId !== profileIdFromSession) {
    //   return response.json({ status: 400, data: null, message: 'You are not allowed to perform this task' })}
    const friend = {friendRequestApproved: true, friendRequestorProfileId, friendRequesteeProfileId}
    const data = await selectFriendByPrimaryKey(friend)
    const status: Status = { status: 200, message: null, data }
    return response.json(status)

  }catch (error) {
    console.error(error)
    return response.json({status: 500, message: '', data: []
    })
  }
}

// export async function getFriendByFriendRequestApproved (request: Request, response: Response): Promise<Response<Status>> {
//   try {
//     const { friendRequestApproved } = request.params
//     const result = JSON.parse(friendRequestApproved)
//     // const profile = request.session.profile as Profile
//     // const profileIdFromSession = profile.profileId as string
//     //
//     // if (friendRequestorProfileId !== profileIdFromSession) {
//     //   return response.json({ status: 400, data: null, message: 'You are not allowed to perform this task' })}
//
//     const data = await selectFriendByFriendRequestApproved(friendRequestApproved)
//     const status: Status = { status: 200, message: null, data }
//     return response.json(status)
//
//   }catch (error) {
//     console.error(error)
//     return response.json({status: 500, message: '', data: []
//     })
//   }
// }