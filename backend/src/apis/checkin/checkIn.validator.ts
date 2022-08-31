import { Schema } from 'express-validator'

export const checkInValidator: Schema = {
  checkInProfileId: {
    isUUID: {
      errorMessage: 'please provide a valid CheckInId'
    }
  },
  checkInDateTime: {
    isLength: {
      errorMessage: 'name cannot be longer than 32 characters',
      options: { min: 1, max: 32 }
    },
    trim: true,
    escape: true
  },
  // checkInEndTime: {
  //   isDate: true,
  //   errorMessage: "ticket due date is malformed",
  //   optional: {
  //     options: {
  //       nullable: true
  //     }
  //   },
  // },
  checkInIsActive: {
   isBoolean : {errorMessage: "please provide a valid boolean"}

  },
  checkinWhatChaDrinkin: {
    trim: true,
    escape: true,
    optional: {
      options: {
        nullable: true
      }
    }
  }

}