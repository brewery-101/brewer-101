import { createSlice } from '@reduxjs/toolkit'
import { fetchAuth } from './auth'
import { httpConfig } from '../utils/httpConfig'

const currentUserSlice = createSlice({
  name: "profile",
  initialState: null,
  reducers: {
    getCurrentUserByProfileId: (profile, action) => {
      return action.payload
    }
  }
})

export const {getCurrentUserByProfileId} = currentUserSlice.actions


export const fetchCurrentUser = () => async (dispatch, getState) => {
  await dispatch(fetchAuth())
  const {auth} = getState()
  if(auth !== null) {
    const {data} = await httpConfig.get(`/apis/profile/${auth.profileId}`)
    dispatch(getCurrentUserByProfileId(data))
  }
}

export default currentUserSlice.reducer