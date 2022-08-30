import {Schema} from 'express-validator';

export const friendValidator: Schema = {
  friendRequesteeProfileId: {
    isUUID: {
      errorMessage: 'please provide a valid friendRequesteeId'
    },
    custom: {
      options: (value, { req, location, path }) => {


        if (req.body.friendRequesteeProfileId !== req.params?.friendRequesteeProfileId) {
         return false
        }

        return true;
      },
      errorMessage: 'friend requestee does not match in request parameters and request body'
    },
  },
  friendRequestorProfileId: {
    isUUID: {
      errorMessage: 'please provide a valid friendRequestorId'
    },
    custom: {
      options: (value, { req, location, path }) => {

        if (req.body.friendRequestorProfileId !== req.params?.friendRequestorProfileId) {
          return false
        }

        return true;
      },
      errorMessage: 'friend requestor does not match in request parameters and request body'
    },
  },
  friendRequestApproved: {
    isBoolean: {
      errorMessage: "This isn't a Boolean!"
    }
  }
}
