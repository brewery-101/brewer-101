import React from 'react'
import './style.css'
import { Col, Container, Row } from 'react-bootstrap'
import { EditProfileModal } from './EditProfileModal'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleProfileByProfileId } from '../../store/singleProfile'
import { fetchCurrentUser } from '../../store/currentUser'
import { fetchInitialFriendsByProfileId } from '../../store/friends'
import { FriendList } from './FriendList'
import { AddAFriendForm } from './AddAFriendForm'

export function ProfilePage () {
  let { profileId } = useParams()
  const profile = useSelector(state => state.singleProfile[profileId] ? state.singleProfile[profileId] : null)
  const currentUser = useSelector(state => state.currentUser ? state.currentUser : null)
  const isCurrentUser = profile && profile.profileId === currentUser?.profileId
  const friends = useSelector(state => state.friends ? state.friends : null)
  const isFriend = useSelector(state => {
    console.log(state.friends)
    if (state.friends === null){
      return false
    }
    return state.friends.some(friend => friend.profileId === state.auth?.profileId)


  })
  const dispatch = useDispatch()
  const initialEffects = () => {
    dispatch(fetchSingleProfileByProfileId(profileId))
    dispatch(fetchCurrentUser())
    dispatch(fetchInitialFriendsByProfileId(profileId))
  }
  React.useEffect(initialEffects, [profileId, dispatch])
  let profilePic = require('./beer.jpg')
  // const {profileName, profileAvatarUrl} = profile[profileId]
  console.log(isFriend)
  return profile ? (
    <>
      <Container className="breweryName text-center py-2">
        <h1 className="m-5 py-2 Brewery Title bg-light border-dark">Profile Page</h1>
        <EditProfileModal/>
      </Container>

      <Container>
        {/*        this is the first row of things*/}
        <Row className=" py-2">

          <h2>{profile.profileName}</h2>
          {/*the profile image*/}
          <Col md={6} className="breweryImage ps-0">
            <img src={profile.profileAvatarUrl} alt="A bar placeholder" className="breweryImage img-fluid"/>
          </Col>

          {/*profile friend list*/}
          <Col md={6} className="breweryFriendCol bg-light">
            {/*Logged in, my own profile*/}
            {isCurrentUser === true &&
              <>
                <h2>My Friends</h2>
                {console.log(friends)}

                {friends.map((friends, index) => <FriendList friends = {friends} key={index}/>)}



              </>
            }
            {/*Logged in, friends with user*/}
            {isFriend === true && isCurrentUser === false && (
              <>
                {friends.map((friends, index) =>
                  <>
                  <FriendList friends = {friends} key={friends.profileName}/>
                  <AddAFriendForm friends = {friends} key={friends.profileId}/>
                  </>
                )}
              </>
            )}

            {/*Logged in, Not friends with user*/}

            {isFriend === false && isCurrentUser === false && (<p>i have NO friends</p>)}

            <Row className="peopleAtBrewery">
              <Col sm={3} className="personIcon">
                <img src={profilePic} alt="sample mingo" className="smallProfileIcon img-fluid"/>
              </Col>
              <Col>
                <Row className="bg-light mt-3 mb-1 me-2 fs-4 border border-dark">
                  <p className="personName my-0">Rando Calrissian</p>
                </Row>
                <Row className="whatChaDrinkin bg-light me-2 mb-2 fs-5 border border-dark">
                  <p className="my-0">Brewery: Lava Rock</p>
                </Row>
                <Row className="whatChaDrinkin bg-light me-2 mb-2 fs-5 border border-dark">
                  <p className="my-0">Drinkin: the fruitiest drink on the menu</p>
                </Row>
              </Col>
            </Row>

          </Col>
        </Row>

      </Container>
    </>
  ): (
    <p>Loading...</p>
  )

}
