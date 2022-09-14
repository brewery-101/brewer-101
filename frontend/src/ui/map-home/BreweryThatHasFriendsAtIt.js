import React from 'react'
import { FriendAtBrewery } from './FriendAtBrewery'

export const BreweryThatHasFriendsAtIt = ({brewery, friendsAtThisBrewery, allCheckIns}) => {

  return (
    <>
      <h2>{brewery.breweryName}</h2>
      {friendsAtThisBrewery.map(friend => <FriendAtBrewery friend={friend} key={friend.profileId} thatOneCheckIn={allCheckIns.filter(checkin=>checkin.checkInProfileId === friend.profileId)[0]}/>)}
    </>
  )
}

