import { httpConfig } from '../utils/httpConfig'
import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice(
  {
    name: "friends",
    initialState:[],
    reducers: {
      setInitialFriends: (friends, action) => {
        return action.payload
      }
    }

  }
)

export const {setInitialFriends} = slice.actions
export const fetchInitialFriends = () => async (dispatch, getState)=> {
  const {auth} = getState()
  if (auth !== null){
    const {data} = await httpConfig(`/apis/profile/friend/profileId/${auth.profileId}`)
    dispatch(setInitialFriends(data))
  }
}

export default slice.reducer