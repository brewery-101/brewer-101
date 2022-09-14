import { Request, Response } from 'express'
import { Status } from '../../utils/interfaces/Status'
import {
  CheckIn,
  insertCheckIn, selectCheckInByCheckInBreweryId,
  selectCheckInByCheckInId,
  selectCheckInByCheckInProfileId, selectCheckInsByCheckInIsActive,
  updateCheckIn, updateCheckInToInactive
} from '../../utils/models/Checkin'
import { Profile } from '../../utils/models/Profile'

// export async function getCheckInByCheckInProfileIdController (request: Request, response: Response): Promise<Response<Status>> {
//   try {
//     const { checkInByProfileId } = request.params
//     const data = await selectCheckInByCheckInIsActive(Boolean(checkInByProfileId))
//     const status: Status = { status: 200, message: null, data }
//     return response.json({
//       status: 500,
//       message: '',
//       data: []
//     })
//   }
// }

export async function postCheckInController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const {
      checkInBreweryId,
      checkInWhatChaDrinkin
    } = request.body

    // Grab the profileId from the session
    const profile = request.session.profile as Profile
    const profileId = profile.profileId as string

    const checkIn: CheckIn = {
      checkInId: null,
      checkInProfileId: profileId,
      checkInBreweryId,
      checkInDateTime: new Date().toLocaleString('en-US', { timeZone: 'America/Denver' }),
      checkInEndTime: new Date().toLocaleString('en-US', { timeZone: 'America/Denver' }),
      checkInIsActive: true,
      checkInWhatChaDrinkin
    }

    await updateCheckInToInactive(profileId)

    const result = await insertCheckIn(checkIn)
    const status: Status = {
      status: 200,
      message: result,
      data: null
    }
    return response.json(status)
  } catch (error) {
    console.log(error)
    return response.json({
      status: 500,
      message: 'Error checkin. Find your own friends.',
      data: null
    })
  }
}


export async function getCheckInByCheckInIdController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { checkInId } = request.params
    const data = await selectCheckInByCheckInId(checkInId)
    // return the response
    const status: Status = { status: 200, message: null, data }
    return response.json(status)
  } catch (error) {
    return response.json({
      status: 500,
      message: '',
      data: []
    })
  }
}

export async function putCheckInController (request: Request, response: Response): Promise<Response> {
  try {
    const { checkInId } = request.params
    const profile = request.session.profile as Profile
    const checkInProfileId = profile.profileId as string
    const {
      checkInBreweryId,
      checkInDateTime,
      checkInEndTime,
      checkInIsActive,
      checkInWhatChaDrinkin
    } = request.body

    const previousCheckIn: CheckIn | null = await selectCheckInByCheckInId(checkInId)

    if (previousCheckIn === null) {
      return response.json({ status: 404, data: null, message: 'check in does not exist' })
    }

    if (checkInProfileId !== previousCheckIn.checkInProfileId) {
      return response.json({ status: 401, data: null, message: 'you are not allowed to preform this task' })
    }

    const updatedValues = { checkInBreweryId, checkInDateTime, checkInEndTime, checkInIsActive, checkInWhatChaDrinkin }

    const newCheckIn: CheckIn = { ...previousCheckIn, ...updatedValues }
    const message: string = await updateCheckIn(newCheckIn)
    return response.json({ status: 200, data: null, message })
  } catch (error: any) {
    return response.json({ status: 500, data: null, message: 'internal server error' })
  }
}

export async function getCheckInByCheckInProfileIdController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { checkInProfileId } = request.params
    const profile = request.session.profile as Profile
    const profileIdFromSession = profile.profileId as string

    if (checkInProfileId !== profileIdFromSession) {
      return response.json({ status: 400, data: null, message: 'You are not allowed to preform this task' })
    }

    const data = await selectCheckInByCheckInProfileId(checkInProfileId)
    const status: Status = { status: 200, message: null, data: data }
    return response.json(status)
  } catch (error) {
    return response.json({
      status: 500,
      message: 'internal server error',
      data: []
    })
  }
}

export async function getCheckInByCheckInBreweryIdController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { checkInBreweryId } = request.params
    const mySqlResult = await selectCheckInByCheckInBreweryId(checkInBreweryId)
    const data = mySqlResult ?? null
    const status: Status = {status: 200, data, message: null }
    return response.json(status)
  } catch (error: any) {
    return (response.json({ status: 400, data: null, message: error.message }))
  }
}

export async function getCheckInsByCheckInIsActiveController (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const {checkInIsActive} = request.params
    const data = await selectCheckInsByCheckInIsActive(true)
    // return the response
    const status: Status = { status: 200, message: null, data }
    return response.json(status)
  } catch (error) {
    return response.json({
      status: 500,
      message: '',
      data: []
    })
  }
}

