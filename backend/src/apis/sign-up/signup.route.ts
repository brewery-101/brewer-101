import { Router } from 'express'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { param, checkSchema } from 'express-validator'
import { signUpController } from './sign-up.controller'
import { signupValidator } from './signup.validator'
import {activationController} from './activation.controller';

export const signupRoute: Router = Router()

signupRoute.route('/')
.post(
  asyncValidatorController(checkSchema(signupValidator)),
  signUpController
)
signupRoute.route('/activation/:activation')
  .get(
    asyncValidatorController([param('activation', 'invalid activation link').isHexadecimal().notEmpty()]),
    activationController
  )


