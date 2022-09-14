import { createSlice } from '@reduxjs/toolkit'


const slice = createSlice({
  name: "profiles",
  initialState: [],
  reducers: {
    setProfiles: (profiles, action) => {
      return action.payload}
    }
})

export const {setProfiles} = slice.actions

export const addAllProfiles = (profiles) => async (dispatch) => {

    dispatch(setProfiles(profiles))

}

export default slice.reducer