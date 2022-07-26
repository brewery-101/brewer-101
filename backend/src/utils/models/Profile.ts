import {sql} from '../database.utils'


export interface Profile {
  profileId: string | null,
  profileActivationToken: string | null,
  profileAvatarUrl: string | null,
  profileEmail: string,
  profileHash: string,
  profileName: string
}

export interface PartialProfile {
  profileId: string | null,
  profileAvatarUrl: string | null,
  profileEmail: string,
  profileName: string,
}

export interface FriendsMetaData {
  profileId: string | null,
  profileAvatarUrl: string | null,
  profileName: string,
  breweryId: string | null,
}

export async function selectProfileByProfileId(profileId: string): Promise<Profile | null> {
  const searchedProfile = await sql<Profile[]>`SELECT "profileId", "profileActivationToken", "profileAvatarUrl", "profileEmail", "profileHash", "profileName" 
  FROM "profile"
  WHERE "profileId" = ${profileId}`
  return searchedProfile?.length === 1 ? searchedProfile[0] : null
}


/**
 * Helper function that interacts with postgres to insert a profile object in the database
 * @param profile Profile object that will be inserted into the database
 * @return success message if the sql statement was executed with no errors
 **/
export async function insertProfile(profile: Profile): Promise<string> {
  const {profileActivationToken, profileAvatarUrl, profileEmail, profileHash, profileName} = profile
  await sql`INSERT INTO "profile"("profileId", "profileActivationToken", "profileAvatarUrl", "profileEmail", "profileHash", "profileName") 
  VALUES (gen_random_uuid(), ${profileActivationToken}, ${profileAvatarUrl}, ${profileEmail}, ${profileHash}, ${profileName})`
  return 'Profile successfully created'
}

export async function selectProfileByProfileActivationToken(profileActivationToken: string): Promise<Profile | null> {
  const result = await sql<Profile[]>`SELECT "profileId", "profileActivationToken", "profileAvatarUrl", "profileEmail", "profileHash", "profileName" 
  FROM "profile"
  WHERE "profileActivationToken" = ${profileActivationToken}`
  return result?.length === 1 ? result[0] : null
}

export async function updateProfile(profile: Profile): Promise<string> {
  const {profileActivationToken, profileAvatarUrl, profileEmail, profileHash, profileName, profileId} = profile
  await sql`
      UPDATE "profile"
      SET "profileActivationToken" = ${profileActivationToken},
          "profileAvatarUrl"       = ${profileAvatarUrl},
          "profileEmail"           = ${profileEmail},
          "profileHash"            = ${profileHash},
          "profileName"            = ${profileName}
      WHERE "profileId" = ${profileId}`
  return 'Profile updated successfully'
}

export async function selectPartialProfileByProfileId(profileId: string): Promise<PartialProfile | null> {
  const result = await sql<Profile[]>`
  SELECT "profileId", "profileAvatarUrl", "profileEmail", "profileName" 
  FROM profile 
  WHERE "profileId" = ${profileId}`
  return result?.length === 1 ? result[0] : null
}

/**
 * Helper function that interacts with postgres to select a profile object by its primary key.
 * @param profileEmail a string containing the primary key for the target object.
 * @return A promise containing a status object with the primary key provided or null if no id was found
 **/
export async function selectProfileByProfileEmail(profileEmail: string): Promise<Profile | null> {
  const result = await sql <Profile[]>`
  SELECT "profileId", "profileActivationToken", "profileEmail", "profileHash", "profileName" 
  FROM "profile" 
  WHERE "profileEmail" = ${profileEmail}`
  return result?.length === 1 ? result[0] : null
}

export async function selectProfileByProfileName(profileName: string): Promise<Profile | null> {
  const parsedProfileName = `%${profileName}%`
  const result = await sql <Profile[]>`
  SELECT "profileId", "profileEmail", "profileName" 
  FROM "profile" 
  WHERE "profileName" LIKE ${parsedProfileName}`
  return result
}

export async function selectAllProfilesByFriends(profileId: string): Promise<Profile[]> {
  console.log(profileId)
  const data: Profile[] = await sql <Profile[]>`
SELECT "profileId", "profileAvatarUrl", "profileEmail", "profileName" 
FROM profile
INNER JOIN friend
ON friend."friendRequesteeProfileId" = profile."profileId" OR friend."friendRequestorProfileId" = profile."profileId"
Where "friendRequestApproved" = true AND ("friendRequesteeProfileId" = ${profileId} OR "friendRequestorProfileId" = ${profileId}) AND "profileId" != ${profileId}`
  return data
}

/*export async function selectAllProfilesByFriends(profileId: string): Promise<Profile[]> {
  console.log(profileId)
  const data: Profile[] = await sql <Profile[]>`
SELECT "profileId", "profileAvatarUrl", "profileEmail", "profileName" 
FROM profile
INNER JOIN friend
ON friend."friendRequesteeProfileId" = profile."profileId" OR friend."friendRequestorProfileId" = profile."profileId"
Where "friendRequestApproved" = true AND ("friendRequesteeProfileId" = ${profileId} OR "friendRequesteeProfileId" = ${profileId}) AND "profileId" != ${profileId}`
  return data
}*/
