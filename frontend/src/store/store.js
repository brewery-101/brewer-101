
import auth from "./auth";
import { configureStore,combineReducers} from '@reduxjs/toolkit'

const reducer = combineReducers({auth})
export default configureStore({reducer});