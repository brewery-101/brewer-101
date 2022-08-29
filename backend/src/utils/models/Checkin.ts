import { sql } from '../database.utils'

export interface CheckIn {
  checkInId: string | null,
  checkInProfileId: string,
  checkInBreweryId: string,
  checkInDateTime: string,
  checkInEndTime: string,
  checkInIsActive: string,
  checkInWhatChaDrinkin: string
}


export async function insertCheckIn (checkIn: CheckIn):Promise<string>{
  const {checkInProfileId, checkInBreweryId, checkInDateTime, checkInEndTime, checkInIsActive, checkInWhatChaDrinkin} = checkIn
  await sql `
  INSERT INTO "checkIn" ("checkInId", "checkInProfileId", "checkInBreweryId", "checkInDateTime", "checkInEndTime", "checkInIsActive", "checkInWhatChaDrinkin")
  VALUES (gen_random_uuid(), ${checkInProfileId}, ${checkInBreweryId}, ${checkInDateTime}, ${checkInEndTime}, ${checkInIsActive}, ${checkInWhatChaDrinkin})`
  return "Check In Verified!"
}



export async function selectCheckInByCheckInIsActive (checkInIsActive: boolean): Promise<CheckIn[]|null> {
  const results = await sql <CheckIn[]>`
  SELECT ("checkInId", "checkInProfileId", "checkInBreweryId", "checkInDateTime", "checkInEndTime", "checkInWhatChaDrinkin")
  WHERE "checkInIsActive" = ${checkInIsActive}`
  return results
}