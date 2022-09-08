
import auth from "./auth";
import { configureStore,combineReducers} from '@reduxjs/toolkit'
import breweries from './breweries'

const reducer = combineReducers({auth, breweries})
export default configureStore({reducer});