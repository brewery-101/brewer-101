import { Schema } from 'express-validator'

export const checkInValidator: Schema = {
  checkInProfileId: {
    isUUID: {
      errorMessage: 'please provide a valid TicketProfileId'
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
    trim: true,
    escape: true,
    optional: {
      options: {
        nullable: true
      }
    },
    isLength: {
      errorMessage: 'Description cannot be longer than 512 characters',
      options: { min: 1, max: 512 }
    }

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