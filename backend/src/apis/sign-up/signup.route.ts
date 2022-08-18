import { Router } from 'express'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { checkSchema } from 'express-validator'
import { signUpController } from './sign-up.controller'
import { signupValidator } from './signup.validator'

export const signupRoute: Router = Router()

signupRoute.route('/')
.post(
  asyncValidatorController(checkSchema(signupValidator)),
  signUpController
)


