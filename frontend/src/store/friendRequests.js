import { createSlice } from '@reduxjs/toolkit'
import { httpConfig } from '../utils/httpConfig'
import { fetchSingleProfileByProfileId } from './singleProfile'



const slice = createSlice({
  name: "friendRequests",
  initialState: {},
  reducers: {
    setFriendRequests: (friendRequests, action) => {
      friendRequests [action.payload.profileId] = action.payload
  }
}})

export const {setFriendRequests} = slice.actions

export const fetchFriendRequests = (profileId) => async (dispatch) => {
    const {data} = await httpConfig.get(`/apis/friend/friendRequesteeProfileId/${profileId}`)
  for(let friendRequest of data){
    const gotYourFriends = await httpConfig.get(`/apis/profile/${friendRequest.friendRequestorProfileId}`)
    console.log(gotYourFriends)
    dispatch(setFriendRequests(gotYourFriends.data))
  }
}

export default slice.reducer