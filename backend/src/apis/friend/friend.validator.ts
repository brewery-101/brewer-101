import {Schema} from 'express-validator';

export const friendValidator: Schema = {
  friendRequesteeProfileId: {
    isUUID: {
      errorMessage: 'please provide a valid friendRequesteeId'
    }
  },
  friendRequestorProfileId: {
    isUUID: {
      errorMessage: 'please provide a valid friendRequestorId'
    }
  },
  friendRequestApproved: {
    isBoolean: {
      errorMessage: "This isn't a Boolean!"
    }
  }
}
