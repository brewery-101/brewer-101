import { Schema } from 'express-validator'

export const breweryValidator: Schema = {
  breweryId: {
    trim: true,
    optional: {
      options: {
        nullable: true
      }
    }
  },
  breweryAddress: {
    trim: true,
    optional: {
      options: {
        nullable: true
      }
    },
    isLength: {
      errorMessage: 'profile name must be between one and thirty two characters',
      options: { min: 1, max: 32 }
    }
  },
  breweryCity: {
    trim: true,
    isLength: {
      errorMessage: 'profile name must be between one and thirty two characters',
      options: { min: 1, max: 32 }
    }
  },
  breweryLat: {
    trim: true,
    optional: {
      options: {
        nullable: true
      }
    }
  },
  breweryLng: {
    trim: true,
    optional: {
      options: {
        nullable: true
      }
    }
  },
  breweryName: {
    trim: true,
  },
  breweryPictureUrl: {
    trim: true,
    optional: {
      options: {
        nullable: true
      }
    },
    isLength: {
      errorMessage: 'profile name must be between one and thirty two characters',
      options: { min: 1, max: 255 }
    }
  },
  breweryState: {
    trim: true,
  },
  breweryWebsite: {
    trim: true,
    optional: {
      options: {
        nullable: true
      }
    },
    isLength: {
      errorMessage: 'profile name must be between one and thirty two characters',
      options: { min: 1, max: 255 }
    }
  },
  breweryZipCode: {
    trim: true,
    isLength: {
      errorMessage: 'profile name must be between one and thirty two characters',
      options: { min: 1, max: 5 }
    }
  }
}