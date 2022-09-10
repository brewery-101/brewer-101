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

  return (
    <>
      {
        friends.length && activeCheckinsWithoutSelf.length && breweries.filter (brewery => activeCheckinsWithoutSelf.map(checkin => checkin.checkInBreweryId).includes(brewery.breweryId)).map(brewery =>  <BreweryThatHasFriendsAtIt brewery={brewery} key={brewery.breweryId} friendsAtThisBrewery={friends.filter(friend => activeCheckinsWithoutSelf.filter(checkin => checkin.checkInBreweryId === brewery.breweryId).filter(checkin => checkin.checkInProfileId === friend.friendRequestorProfileId || checkin.checkInProfileId === friend.friendRequesteeProfileId))} allCheckIns={activeCheckinsWithoutSelf}/>)
      }

    </>
// <div>
//   {breweries.length && friends.length && activeCheckins.filter(checkin=>checkin.checkInProfileId !== auth.profileId).map((activeCheckin, index) =>
//
//   <Container>
//     <h2 className="my-2">{friends.filter(friend => friend.profileId=== activeCheckin.checkInBreweryId)[0].breweryName}</h2>
//     {breweries.length && friends.length && activeCheckins.filter(checkin=>checkin.checkInProfileId !== auth.profileId).map((activeCheckin, index) =>
//
//     <Row className="peopleAtBrewery my-3">
//       <Col sm={3} className="personIcon my-auto">
//         <img src={profilePic} alt="sample mingo" className="smallProfileIcon "/>
//       </Col>
//       <Col>
//         <Row className="bg-light mb-1 me-2 fs-6 border border-dark">
//           <p className="personName my-0">{friends.filter(friend => friend.profileId=== activeCheckin.checkInProfileId)[0].profileName}</p>
//         </Row>
//         <Row className="whatChaDrinkin bg-light me-2 border border-dark">
//           <p className="my-0">Drinkin: the fruitiest drink on the menu</p>
//         </Row>
//       </Col>
//     </Row>
//     )}
//   </Container>
//
//   )}
//
// </div>
  );
}