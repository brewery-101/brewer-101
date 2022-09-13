import { httpConfig } from '../../utils/httpConfig'
import React from 'react'
import { fetchInitialFriendsByProfileId } from '../../store/friends'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'


export const AddAFriendForm = ({ currentUser }) => {
  let { profileId } = useParams()
  const dispatch = useDispatch()
  const clickFriend = () => {
    httpConfig.post('/apis/friend/', { friendRequesteeProfileId: profileId })
      .then(reply => {
          if (reply.status === 200) {

            dispatch(fetchInitialFriendsByProfileId(currentUser))
          }
        }
      )
  }
return (
  <button className="friendButton" onClick={clickFriend}>Send Friend Request</button>
)
}