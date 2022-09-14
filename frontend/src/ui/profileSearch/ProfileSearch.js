import React from 'react'
import Button from 'react-bootstrap/Button'
import { SearchResult } from './SearchResult'
import { useDispatch, useSelector } from 'react-redux'

import { addAllProfiles } from '../../store/profiles'
import { useNavigate } from 'react-router-dom'

export function ProfileSearch () {
 const navigate = useNavigate()
  const profile = useSelector(state => state.profiles ?? [])
  const dispatch = useDispatch()
  const initialEffects = () => {
    dispatch(addAllProfiles())
  }
  React.useEffect(initialEffects, [dispatch])
  return (
    <>
      {
        profile.map((profile, index) =>
          <>
            <SearchResult classname="profileComponent" profile={profile} key={index}/>
            <Button onClick={() => navigate(`/profile-page/${profile.profileId}`)}>Go To Profile</Button>
          </>
        )}
    </>
  )
}