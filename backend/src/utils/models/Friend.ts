import { sql } from '../database.utils'

export interface Friend{
  friendRequesteeProfileId: string,
  friendRequestorProfileId: string,
  friendRequestApproved: boolean | null
}

export async function insertFriend(friend: Friend): Promise<string>{
  const { friendRequesteeProfileId, friendRequestorProfileId, friendRequestApproved } = friend
  await sql `
  INSERT INTO friend( "friendRequesteeProfileId", "friendRequestorProfileId", "friendRequestApproved")
   VALUES (${friendRequesteeProfileId}, ${friendRequestorProfileId}, ${friendRequestApproved})`
  return 'Friend created successfully'
}

export async function updateFriend (friend: Friend): Promise<string> {
  const { friendRequesteeProfileId, friendRequestorProfileId, friendRequestApproved } = friend
  const result = await sql `UPDATE friend SET "friendRequestApproved" = ${friendRequestApproved} WHERE "friendRequesteeProfileId" = ${friendRequesteeProfileId} AND "friendRequestorProfileId" = ${friendRequestorProfileId}`
  return result?.count === 1 ? 'friend request updated successfully' : 'update failed'
}

export async function selectFriendByPrimaryKey (friend: Friend): Promise<Friend|null> {
  const { friendRequesteeProfileId, friendRequestorProfileId, friendRequestApproved } = friend
  const result = await sql <Friend[]> `SELECT "friendRequesteeProfileId", "friendRequestorProfileId", "friendRequestApproved" FROM friend WHERE "friendRequesteeProfileId" = ${friendRequesteeProfileId} AND "friendRequestorProfileId" = ${friendRequestorProfileId}`
  return result?.length === 1 ? result[0]:null
}

