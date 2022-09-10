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

export async function updateCheckIn (checkIn: CheckIn): Promise<string> {
  const {checkInId, checkInProfileId, checkInBreweryId, checkInDateTime, checkInEndTime, checkInIsActive, checkInWhatChaDrinkin} = checkIn
  await sql `
  UPDATE "checkIn"
  SET "checkInProfileId" = ${checkInProfileId}, "checkInBreweryId" = ${checkInBreweryId}, "checkInDateTime" = ${checkInDateTime}, "checkInEndTime" = ${checkInEndTime}, "checkInIsActive" = ${checkInIsActive}, "checkInWhatChaDrinkin" = ${checkInWhatChaDrinkin}
  WHERE "checkInId" = ${checkInId}`
  return 'Check In updated Successfully!'
}

export async function updateCheckInToInactive (checkInProfileId: string): Promise<string> {
  await sql `
  UPDATE "checkIn"
  SET "checkInIsActive" = false
  WHERE "checkInProfileId" = ${checkInProfileId}`
  return 'Check In updated Successfully!'
}


export async function selectCheckInByCheckInId (checkInId: string): Promise<CheckIn|null> {
  const result = await sql<CheckIn[]>`SELECT "checkInId", "checkInProfileId", "checkInBreweryId", "checkInDateTime", "checkInEndTime", "checkInIsActive", "checkInWhatChaDrinkin" FROM "checkIn" WHERE "checkInId" = ${checkInId}`
  return result?.length === 1 ? result[0] : null
}

export async function selectCheckInByCheckInProfileId (checkInProfileId: string): Promise<CheckIn[]> {
  return  sql<CheckIn[]>`SELECT "checkInId", "checkInProfileId", "checkInBreweryId", "checkInDateTime", "checkInEndTime", "checkInIsActive", "checkInWhatChaDrinkin" from "checkIn" WHERE "checkInProfileId" = ${checkInProfileId}`
}

export async function selectCheckInByCheckInBreweryId (checkInBreweryId: string): Promise<CheckIn|null> {
  const result = await sql <CheckIn[]>`SELECT "checkInId", "checkInProfileId", "checkInBreweryId", "checkInDateTime", "checkInEndTime", "checkInIsActive", "checkInWhatChaDrinkin" from "checkIn" WHERE "checkInBreweryId" = ${checkInBreweryId}`
  return result.length === 1 ? result[0] : null
}

export async function selectCheckInsByCheckInIsActive (checkInIsActive: boolean): Promise<CheckIn[]|null> {
  const results = await sql <CheckIn[]>`
  SELECT "checkInId", "checkInProfileId", "checkInBreweryId", "checkInDateTime", "checkInEndTime", "checkInWhatChaDrinkin"
  FROM "checkIn" 
  WHERE "checkInIsActive" = ${checkInIsActive}`
  return results
}



