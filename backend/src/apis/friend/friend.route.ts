import {Router} from 'express';
import {isLoggedInController} from '../../utils/controllers/is-logged-in-controller';
import {asyncValidatorController} from '../../utils/controllers/async-validator.controller';
import {check, checkSchema} from 'express-validator';
import {friendValidator} from './friend.validator';
import {
  postFriendController,
  putFriendController,
  getFriendByFriendRequesteeProfileIdController,
  getFriendByFriendRequestorProfileIdController, getFriendByPrimaryKey,
} from './friend.controller'


export const friendRoute = Router()

friendRoute.route('/')
  .post
  (isLoggedInController, asyncValidatorController([check("friendRequesteeProfileId", "Please provide a valid uuid Id").isUUID()]), postFriendController)
.put(isLoggedInController, asyncValidatorController(checkSchema(friendValidator)), putFriendController)


friendRoute.route('/friendRequesteeProfileId/:friendRequesteeProfileId/friendRequestorProfileId/:friendRequestorProfileId')
  .put(isLoggedInController,asyncValidatorController(checkSchema(friendValidator)), putFriendController )
  .get(asyncValidatorController ([check('friendRequesteeProfileId', '\'please provide a valid friendRequesteeProfileId\'').isUUID(), check('friendRequestorProfileId', '\'please provide a valid friendRequestorProfileId\'').isUUID()]),getFriendByPrimaryKey)

  // [
  // check('friendRequesteeProfileId', 'please provide a valid friendRequesteeProfileId').isUUID(), check('friendRequestorProfileId', 'please provide a valid friendProfileId').isUUID()]
  friendRoute.route('/friendRequesteeProfileId/:friendRequesteeProfileId')
  .get(asyncValidatorController([check('friendRequesteeProfileId', '\'please provide a valid friendRequesteeProfileId\'').isUUID()]), getFriendByFriendRequesteeProfileIdController)

friendRoute.route('/friendRequestorProfileId/:friendRequestorProfileId')
  .get(asyncValidatorController([check('friendRequestorProfileId', '\'please provide a valid friendRequestorProfileId\'').isUUID()]), getFriendByFriendRequestorProfileIdController)

