import { getBreweryByBreweryIdController, putBreweryController } from './brewery.controller'
import { Router } from 'express'
import { check , checkSchema} from 'express-validator'
import { asyncValidatorController} from '../../utils/controllers/async-validator.controller'
import { isLoggedInController } from '../../utils/controllers/is-logged-in.controller'
import { breweryValidator } from './brewery.validator'

export const breweryRoute: Router = Router()
breweryRoute.route('/')
  .post(putBreweryController)

breweryRoute.route('/:breweryId')
  .get(
    asyncValidatorController([
      check('breweryId', 'please provide a valid breweryId').isUUID()
    ])
    , getBreweryByBreweryIdController
  )
.put(isLoggedInController, asyncValidatorController(checkSchema(breweryValidator)), putBreweryController)