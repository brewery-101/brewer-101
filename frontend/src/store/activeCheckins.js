import { createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../utils/httpConfig'

const slice = createSlice(
  {
    name: "activeCheckins",
    initialState: [],
    reducers: {
      getActiveCheckins: (activeCheckins, action) => {
        return action.payload
      }


    }
  }
)

export const {getActiveCheckins} = slice.actions

export function fetchActiveCheckins() {
  return async function (dispatch) {
    const {data} = await httpConfig('/apis/check-in/isActive/true')
    dispatch (getActiveCheckins(data))
  }
}

export default slice.reducer
