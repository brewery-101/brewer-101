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
