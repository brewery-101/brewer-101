import { sql } from '../database.utils'

export interface Friend {
  friendRequesteeProfileId: string
  friendRequestorPofileId: string
  friendRequesttApproved: boolean
}
