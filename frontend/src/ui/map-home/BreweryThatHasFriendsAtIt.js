import React from 'react'
import { FriendAtBrewery } from './FriendAtBrewery'

export const BreweryThatHasFriendsAtIt = ({brewery, friendsAtThisBrewery, allCheckIns}) => {
console.log(brewery)
  console.log(friendsAtThisBrewery)
  console.log(allCheckIns)
  return (
    <>
      <h1>{brewery.breweryName}</h1>
      {friendsAtThisBrewery.map(friend => <FriendAtBrewery friend={friend} key={friend.profileId} thatOneCheckIn={allCheckIns.filter(checkin=>checkin.checkInProfileId === friend.profileId)[0]}/>)}
    </>
  )
}

