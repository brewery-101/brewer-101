import { Router } from 'express'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import {
  check,
  // check,
  checkSchema
} from 'express-validator'
import { checkInValidator } from './checkIn.validator'
import { isLoggedInController } from '../../utils/controllers/is-logged-in-controller'
import {
  getCheckInByCheckInBreweryIdController,
  getCheckInByCheckInIdController, getCheckInByCheckInProfileIdController, getCheckInsByCheckInIsActiveController,
  postCheckInController, putCheckInController
} from './checkin.controller'

export const checkInRoute = Router()

checkInRoute.route('/')
  .post(isLoggedInController, asyncValidatorController(checkSchema(checkInValidator)), postCheckInController)

checkInRoute.route('/:checkInId')
  .get(asyncValidatorController([check('checkInId', 'please provide a valid checkInId').isUUID()]), getCheckInByCheckInIdController)
  .put(isLoggedInController, asyncValidatorController(checkSchema(checkInValidator)), putCheckInController)

checkInRoute.route('/breweryId/:checkInBreweryId')
  .get(asyncValidatorController([check('checkInBreweryId', 'please provide a valid checkInBreweryId').isUUID()]), getCheckInByCheckInBreweryIdController)

checkInRoute.route('/profileId/:checkInProfileId')
  .get(asyncValidatorController([check('checkInProfileId', 'please provide a valid checkInProfileId').isUUID()]), getCheckInByCheckInProfileIdController)

checkInRoute.route('/isActive/true')
  .get(isLoggedInController, getCheckInsByCheckInIsActiveController)