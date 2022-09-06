import {
  getBreweryByBreweryIdController,
  postBreweryController,
  putBreweryController,
  getBreweryByBreweryNameController,
  getBreweriesController
} from './brewery.controller'
import { Router } from 'express'
import { check, checkSchema } from 'express-validator'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { breweryValidator } from './brewery.validator'
import { isLoggedInController } from '../../utils/controllers/is-logged-in-controller'

export const breweryRoute: Router = Router()

breweryRoute.route('/breweryId/:breweryId')
  .get(
    asyncValidatorController([
      check('breweryId', 'please provide a valid breweryId').isUUID()
    ])
    , getBreweryByBreweryIdController
  )
breweryRoute.route('/breweryName/:breweryName')
  .get(
    asyncValidatorController([
      check('breweryName', 'please provide a valid breweryName').isString()
    ])
    , getBreweryByBreweryNameController
  )
breweryRoute.route('/secret')
  .post(isLoggedInController, asyncValidatorController(checkSchema(breweryValidator)), postBreweryController)

breweryRoute.route('/')
  .get(
    asyncValidatorController([]), getBreweriesController)
