import { httpConfig } from '../../utils/httpConfig'
import React from 'react'

import { useParams } from 'react-router-dom'


export const AddAFriendForm = ({ currentUser }) => {
  let { profileId } = useParams()

  const clickFriend = () => {
    httpConfig.post('/apis/friend/', { friendRequesteeProfileId: profileId })
      .then(reply => {
          if (reply.status === 200) {
          }
        }
      )
  }
return (
  <button className="friendButton" onClick={clickFriend}>Send Friend Request</button>
)
}