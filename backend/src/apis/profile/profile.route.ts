import { Router } from 'express';
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller';
import { check, checkSchema } from 'express-validator';
import {getProfileByProfileIdController, putProfileController} from './profile.controller';
import { profileValidator } from './profile.validator';
import { isLoggedInController } from '../../utils/controllers/is-logged-in.controller';


export const ProfileRoute:Router = Router()
ProfileRoute.route('/:profileId')
  .get(
    asyncValidatorController([
      check('profileId', 'please provide a valid profileId').isUUID()
      ])
    , getProfileByProfileIdController
  )
  .put(isLoggedInController, asyncValidatorController(checkSchema(profileValidator)), putProfileController)
