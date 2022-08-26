import { Request, Response } from 'express'
import { Status } from '../../utils/interfaces/Status'
import { CheckIn, insertCheckIn, selectCheckInByCheckInIsActive } from '../../utils/models/Checkin'
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
      checkInProfileId,
      checkInBreweryId,
      checkInDateTime,
      checkInEndTime,
      checkInIsActive,
      checkInWhatChaDrinkin
    } = request.body

    // Grab the profileId from the session
    const profile = request.session.profile as Profile
    const profileId = profile.profileId as string

    const checkIn: CheckIn = {
      checkInId: null,
      checkInProfileId,
      checkInBreweryId,
      checkInDateTime,
      checkInEndTime,
      checkInIsActive,
      checkInWhatChaDrinkin
    }
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
