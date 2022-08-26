import { Router } from 'express'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import {
  // check,
  checkSchema } from 'express-validator'
import { checkInValidator } from './checkIn.validator'
import { isLoggedInController } from '../../utils/controllers/is-logged-in-controller'
import {
  // getCheckInByCheckInProfileIdController,
  // getCheckInByProfileIdController,
  postCheckInController
} from './checkin.controller'

export const checkInRoute = Router()

checkInRoute.route('/')
  .post(isLoggedInController, asyncValidatorController(checkSchema(checkInValidator)), postCheckInController)

// checkInRoute.route('/:checkInId')
//   .get(asyncValidatorController([check('checkInId', 'please provide a valid checkInId').isUUID()]), getcheckInBycheckInIdController)
//   .put(isLoggedInController, asyncValidatorController(checkSchema(checkInValidator)), putCheckInController)
//
// checkInRoute.route('/checkInBreweryId/:checkInBreweryId')
//   .get(asyncValidatorController([check('checkInBreweryId', 'please provide a valid checkInBreweryId').isUUID()]), getCheckInBycheckInBreweryIdController)
//
// checkInRoute.route('/checkInProfileId/:checkInProfileId')
//   .get(asyncValidatorController([check('checkInProfileId', 'please provide a valid checkInProfileId').isUUID()]), getCheckInByCheckInProfileIdController)