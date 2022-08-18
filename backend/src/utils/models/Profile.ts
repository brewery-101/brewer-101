import { sql } from '../database.utils'

export interface Profile {
  profileId: string | null,
  profileActivationToken: string,
  profileAvatarUrl: string|null,
  profileEmail: string,
  profileHash: string,
  profileName: string
}

export async function insertProfile (profile: Profile) :Promise<string>{
  const {profileActivationToken, profileAvatarUrl, profileEmail, profileHash, profileName} = profile
  await sql `INSERT INTO profile("profileId", "profileActivationToken", "profileAvatarUrl", "profileEmail", "profileHash", "profileName") 
  VALUES (gen_random_uuid(), ${profileActivationToken}, ${profileAvatarUrl}, ${profileEmail}, ${profileHash}, ${profileName})`
  return 'Profile successfully created'
}