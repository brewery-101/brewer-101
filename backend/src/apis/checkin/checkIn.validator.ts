import { Schema } from 'express-validator'

export const checkInValidator: Schema = {
  checkInBreweryId: {
    isUUID: {
      errorMessage: 'please provide a valid Brewery Id'
    }
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
  checkinWhatChaDrinkin: {
    trim: true,
    escape: true,
    isLength: {
      errorMessage: 'What cha drinkin is the wrong size',
      options: {min: 1, max: 32}
    },
    optional: {
      options: {
        nullable: true
      }
    }
  }

}