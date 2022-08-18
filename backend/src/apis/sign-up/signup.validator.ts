import {Schema} from 'express-validator'

export const signupValidator: Schema = {
  profileEmail: {
    isEmail: {
      errorMessage: 'Please provide a valid email'
    },
    trim: true
  },
    profilePassword: {
      isLength: {
        errorMessage: 'Password must be at least eight characters',
        options: { min: 8 }
      },
      trim: true,
      escape: true
    },
  profileName: {
    escape: true,
    trim: true,
    isLength: {
      errorMessage: 'profile name must be between 1 and 32 characters',
      options: { min: 1, max: 32}
  }
  }
}