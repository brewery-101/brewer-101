import React from 'react'
import './style.css'
import { Col, Container, Row } from 'react-bootstrap'
import { EditProfileModal } from './EditProfileModal'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleProfileByProfileId } from '../../store/singleProfile'
import { fetchCurrentUser } from '../../store/currentUser'
import { fetchInitialFriendsByProfileId } from '../../store/friends'
import { FriendList } from './FriendList'
import { AddAFriendForm } from './AddAFriendForm'
import Button from 'react-bootstrap/Button'
import { fetchFriendRequests } from '../../store/friendRequests'


export function ProfilePage () {
  let { profileId } = useParams()
  const navigate = useNavigate()
  const friendRequests = useSelector(state => state.friendRequests ? Object.values(state.friendRequests) : [])
  const profile = useSelector(state => state.singleProfile[profileId] ? state.singleProfile[profileId] : null)
  const currentUser = useSelector(state => state.currentUser ? state.currentUser : null)
  const isCurrentUser = profile && profile.profileId === currentUser?.profileId
  const friends = useSelector(state => state.friends ? state.friends : null)
  const isFriend = useSelector(state => {

    if (state.friends === null) {
      return false
    }
    return state.friends.some(friend => friend.profileId === state.auth?.profileId)

  })
  const dispatch = useDispatch()
  const initialEffects = () => {
    dispatch(fetchFriendRequests(profileId))
    dispatch(fetchSingleProfileByProfileId(profileId))
    dispatch(fetchCurrentUser())
    dispatch(fetchInitialFriendsByProfileId(profileId))
  }
  React.useEffect(initialEffects, [profileId, dispatch])
  return profile ? (
      <>
        <Container className="breweryName text-center py-2">
          <h1 className="m-5 py-2 Brewery Title bg-light border-dark">Profile Page</h1>
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

            {/*Logged in, my own profile*/}
            {isCurrentUser === true &&
              <>
                <Col md={6} className="profileFriendCol bg-light">
                  <h2>My Friends</h2>


                  {friends.map((friends, index) =>
                    <>
                      <FriendList friends={friends} key={index}/>
                      <Button onClick={() => navigate(`/profile-page/${friends.profileId}`)}>Go To Profile</Button>
                    </>
                  )}
                  {friendRequests.map((friendRequest, index) =>
                    <>
                      <FriendList friends={friendRequest} key={index}/>
                      <Button>Accept Friend</Button>

                    </>
                  )}
                </Col>

                <EditProfileModal/>

              </>
            }
            {/*Logged in, friends with user*/}
            {isFriend === true && isCurrentUser === false && (
              <>
                <Col md={6} className="profileFriendCol bg-light">
                  <h2>Their Friends</h2>
                  {friends.map((friends, index) =>
                    <>
                      <FriendList classname="friendComponent" friends={friends} currentUser={currentUser}
                                  key={friends.profileName}/>
                      <Button onClick={() => navigate(`/profile-page/${friends.profileId}`)}>Go To Profile</Button>
                      {}
                    </>
                  )}
                </Col>
              </>
            )}

            {/*Logged in, Not friends with user*/}

            {isFriend === false && isCurrentUser === false && (
              <>
                <Col md={6} className="profileFriendCol bg-light">
                  <h2>Send Friend Request?</h2>
                  <AddAFriendForm currentUser={currentUser} key={friends.profileId}/>
                </Col>
              </>
            )}
          </Row>
        </Container>
      </>
    ) :
    (
      <p>Loading...</p>
    )
}
