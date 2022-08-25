import { Schema} from 'express-validator'

export const breweryValidator: Schema = {
  breweryId: {
    trim: true,
    optional: {
      options: {
        nullable: true
      }
    }
  }
},
  breweryAddress: {
    trim: true,
    optional: {
      options: {
        nullable: true
      }
    }
  },
  breweryCity: {
    trim: true,
    optional: {
      options: {
        nullable: true
      }
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
    optional: {
      options: {
        nullable: true
      }
    }
  },
  breweryPictureUrl: {
    trim: true,
    optional: {
      options: {
        nullable: true
      }
    }
  },
  breweryState: {
    trim: true,
    optional: {
      options: {
        nullable: true
      }
    }
  },
breweryWebsite: {
  trim: true,
    optional: {
    options: {
      nullable: true
    }
  }
},
  breweryZipCode: {
    trim: true,
    optional: {
      options: {
        nullable: true
      }
    }
  }



