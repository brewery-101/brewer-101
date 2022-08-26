import { Schema } from 'express-validator'

export const profileValidator: Schema = {
  profileEmail: {
    isEmail: {
      errorMessage: 'Please provide a valid email'
    },
    // Uncomment the next line to sanitize email, but it removes +1 from testing email addresses.
    // normalizeEmail: true,
    trim: true
  },
  profileName: {
    escape: true,
    trim: true,
    isLength: {
      errorMessage: 'profile name must be between one and thirty two characters',
      options: { min: 1, max: 32 }
    }
  }
}
