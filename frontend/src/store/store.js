
import auth from "./auth";
import { configureStore,combineReducers} from '@reduxjs/toolkit'
import breweries from './breweries'
import activeCheckins from './activeCheckins'
import friends from './friends'
import profiles from './profiles'

const reducer = combineReducers({auth, breweries, activeCheckins, friends, profiles})
export default configureStore({reducer});