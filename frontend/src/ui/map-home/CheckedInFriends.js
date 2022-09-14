import React from "react"
import "./Map-Home-Style.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchActiveCheckins } from '../../store/activeCheckins'
import { fetchInitialFriends } from '../../store/friends'
import { BreweryThatHasFriendsAtIt } from './BreweryThatHasFriendsAtIt'



export function CheckedInFriends() {
const activeCheckins = useSelector(state => state.activeCheckins ?? [])
  const breweries = useSelector(state => state.breweries ?? [])
  const friends = useSelector(state => state.friends ?? [])
  const auth = useSelector(state => state.auth ?? null)
  const dispatch = useDispatch ()
  const initialEffects = ()=> {
    dispatch(fetchActiveCheckins())
    dispatch(fetchInitialFriends())
  }

  React.useEffect(initialEffects, [dispatch])

  // console.log(breweries.length && friends.length && activeCheckins.filter(checkin=>checkin.checkInProfileId !== auth.profileId).map((activeCheckin, index) =>breweries.filter(friend => friend.profileId === activeCheckin.checkInProfileId)[0].breweryName))

  const activeCheckinsWithoutSelf = activeCheckins.filter(checkin=>checkin.checkInProfileId !== auth.profileId)

  const activeCheckinsWithFriends = activeCheckinsWithoutSelf.filter(checkin=>friends.map(friend=>friend.profileId).includes(checkin.checkInProfileId))


  return (
    <>
      {
        (friends.length && activeCheckinsWithFriends.length && breweries.filter(brewery => activeCheckinsWithFriends.map(checkin => checkin.checkInBreweryId).includes(brewery.breweryId)).map(brewery =>  <BreweryThatHasFriendsAtIt brewery={brewery} key={brewery.breweryId} friendsAtThisBrewery={friends.filter(friend => activeCheckinsWithFriends.filter(checkin => checkin.checkInBreweryId === brewery.breweryId).map(checkin=>checkin.checkInProfileId).includes(friend.profileId))} allCheckIns={activeCheckinsWithoutSelf}/>)
        ) || ""

      }

    </>
  );
}