
import auth from "./auth";
import { configureStore,combineReducers} from '@reduxjs/toolkit'
import breweries from './breweries'
import activeCheckins from './activeCheckins'
import friends from './friends'
import profiles from './profiles'
import currentUser from './currentUser'
import singleProfile from './singleProfile'
import friendRequests from './friendRequests'

const reducer = combineReducers({auth, breweries, activeCheckins, friends, profiles, currentUser, singleProfile, friendRequests})
export default configureStore({reducer});