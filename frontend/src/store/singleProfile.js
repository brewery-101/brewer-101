import { createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../utils/httpConfig'

const slice = createSlice({
  name: "singleProfile",
  initialState: {},
  reducers: {
    setSingleProfile: (singleProfile, action) => {
      singleProfile[action.payload.profileId] = action.payload.data
    }

  }
})

export const {setSingleProfile} = slice.actions

export const fetchSingleProfileByProfileId = (profileId) => async (dispatch, getState) => {
  const state = getState()

  const singleProfile = state.singleProfile
  if(singleProfile[profileId] === undefined){
    const{data} = await httpConfig(`/apis/profile/${profileId}`)
    dispatch(setSingleProfile({profileId, data}))
  }
}

export default slice.reducer